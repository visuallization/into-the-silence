import React from 'react';

import { Hamburger } from '../';

import styles from './styles.less';

interface IMenuState {
  showMobileItems: boolean;
  position: POSITION;
}

enum POSITION {
  ABSOLUTE = 'absolute',
  HIDE = 'hide',
  SHOW = 'show',
}

const menuItems = [
  'In die Stille gehen',
  'In die eigene Lebendigkeit',
  'Methoden',
  'Über mich & meine Lehrer',
  'Kontakt',
];

class Menu extends React.Component<any, IMenuState> {
  constructor(props: any) {
    super(props);

    this.state = {
      showMobileItems: false,
      position: POSITION.ABSOLUTE,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setMenuPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setMenuPosition);
  }

  render() {
    const { position } = this.state;

    return (
      <div className={`${styles.menu} ${styles[position]}`}>
        <div className={styles.mobileMenu}>
          <span className={styles.logo}>{menuItems[0]}</span>
          <Hamburger onToggle={this.showMobileItems} />
        </div>
        {this.renderMenuItems()}
      </div>
    );
  }

  renderMenuItems = () => {
    const { showMobileItems } = this.state;

    const items = menuItems.map((item, i) => <li key={i}>{item}</li>);
    return (
      <ul className={`${styles.menuItems} ${showMobileItems ? styles.mobile : ''}`}>
        {items}
      </ul>
    );
  }

  showMobileItems = (show: boolean) => {
    this.setState({
      showMobileItems: show,
    });
  }

  setMenuPosition = () => {
    const { position } = this.state;

    if (window.scrollY > window.innerHeight && position === POSITION.ABSOLUTE) {
      this.setState({ position: POSITION.SHOW });
    } else if (window.scrollY <= window.innerHeight && position === POSITION.SHOW) {
      this.setState(
        { position: POSITION.HIDE },
        () => {
          setTimeout(() => { this.setState({ position: POSITION.ABSOLUTE }); }, 200);
        },
      );
    }
  }
}

export default Menu;
