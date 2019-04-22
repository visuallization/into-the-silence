import React from 'react';
import Link from 'next/link';

import styles from './styles.less';

class Menu extends React.Component<any, any> {
  render() {
    return(
      <div className={styles.menu}>
        <ul>
          <li><Link href='/'><a>In die Stille gehe</a></Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;