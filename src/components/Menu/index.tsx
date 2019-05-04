import React from 'react';

import { Hamburger } from '../';

import styles from './styles.less';

interface IMenuState {
  showMobileItems: boolean;
  onTop: boolean;
}

const menuItems = [
  'In die Stille gehen',
  'In die eigene Lebendigkeit',
  'Methoden',
  'Über mich & meine Lehrer',
  'Kontakt',
];

class Menu extends React.Component<any, IMenuState> {
  private scrollOffset: number = 200;

  constructor(props: any) {
    super(props);

    this.state = {
      showMobileItems: false,
      onTop: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScrollPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition);
  }

  render() {
    const { onTop } = this.state;

    return (
      <div className={`${styles.menu} ${!onTop ? styles.sticky : ''}`}>
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
      <ul className={`${styles.list} ${showMobileItems ? styles.mobile : ''}`}>
        {items}
      </ul>
    );
  }

  showMobileItems = (show: boolean) => {
    this.setState({
      showMobileItems: show,
    });
  }

  checkScrollPosition = () => {
    const { onTop } = this.state;

    if (window.scrollY > this.scrollOffset && onTop) {
      this.setState({
        onTop: false,
      });
    } else if (window.scrollY <= this.scrollOffset && !onTop) {
      this.setState({
        onTop: true,
      });
    }
  }
}

export default Menu;
