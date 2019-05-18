import React from 'react';

import { Hamburger } from '../';

import styles from './styles.less';

interface IMenuState {
  open: boolean;
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
      open: false,
      position: POSITION.ABSOLUTE,
    };
  }

  private maxWidth: number = 1046;

  componentDidMount() {
    window.addEventListener('scroll', this.setMenuPosition);
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setMenuPosition);
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    const { position, open } = this.state;

    return (
      <div className={`${styles.menu} ${styles[position]} ${open ? styles.open : ''}`}>
        <div className={styles.mobileMenu}>
          <span className={styles.logo}>{menuItems[0]}</span>
          <Hamburger open={open} onToggle={this.showMobileItems} />
        </div>
        {this.renderMenuItems()}
      </div>
    );
  }

  renderMenuItems = () => {
    const items = menuItems.map((item, i) => <li key={i}>{item}</li>);
    return (
      <ul className={`${styles.menuItems}`}>
        {items}
      </ul>
    );
  }

  showMobileItems = (show: boolean) => {
    if (show) {
      document.body.className = 'no-scroll';
    } else {
      document.body.className = '';
    }

    this.setState({
      open: show,
    });
  }

  onResize = () => {
    if (window.innerWidth > this.maxWidth && this.state.open) {
      this.showMobileItems(false);
    }
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
