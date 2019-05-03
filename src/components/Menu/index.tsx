import React from 'react';

import { Hamburger } from '../';
import styles from './styles.less';

const menuItems = [
  'In die Stille gehen',
  'In die eigene Lebendigkeit',
  'Methoden',
  'Über mich & meine Lehrer',
  'Kontakt',
];

class Menu extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      showMobileItems: false,
    };
  }

  render() {
    return (
      <div className={styles.menu}>
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
}

export default Menu;
