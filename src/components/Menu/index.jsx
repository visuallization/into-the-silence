import React, { Component } from 'react';
import Link from 'next/link';

import styles from './styles.less';

class Menu extends Component {
  render() {
    return(
      <div className={styles.menu}>
        <ul>
          <li><Link href='/'>In die Stille gehen</Link></li>
          <li><Link href='/vitality'>In die eigene Lebendigkeit</Link></li>
          <li><Link href='/methods'>Methoden</Link></li>
          <li><Link href='/about'>Über mich & meine Lehrer</Link></li>
          <li><Link href='/contact'>Kontakt</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;