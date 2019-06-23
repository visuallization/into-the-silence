import React from 'react';
import Error from 'next/error';

import { Footer, Menu } from '../components';

import styles from '../styles/error.less';

const menuItems = [
  {
    name: 'In die Stille gehen',
    link: '/#home',
  },
  {
    name: 'In die eigene Lebendigkeit',
    link: '/#liveliness',
  },
  {
    name: 'Methoden',
    link: '/#methods',
  },
  {
    name: 'Über mich & meine Lehrer',
    link: '/#about',
  },
  {
    name: 'Kontakt',
    link: '/#contact',
  },
];

class Page extends React.Component {
  render() {
    return (
      <>
        <Menu className={styles.menu} items={menuItems}/>
        <Error statusCode={404} />
        <Footer className={styles.footer} />
      </>
    );
  }
}

export default Page;
