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
  render() {
    return(
      <div className={styles.menu}>
        <div className={styles.mobile}>
          <span className={styles.logo}>In die Stille gehen</span>
          <Hamburger/>
        </div>
        {this.renderMenuItems()}
      </div>
    );
  }

  renderMenuItems = () => {
    const items = menuItems.map((item, i) => <li key={i}>{item}</li>);
    return <ul className={styles.list}>{items}</ul>;
  }
}

export default Menu;
