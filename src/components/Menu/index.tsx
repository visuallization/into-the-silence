import React from 'react';

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
        {this.renderMenuItems()}
      </div>
    );
  }

  renderMenuItems = () => {
    const items = menuItems.map((item, i) => <li key={i}>{item}</li>);
    return <ul>{items}</ul>;
  }
}

export default Menu;
