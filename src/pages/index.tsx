import React from 'react';

import { Menu } from '../components';
import content from '../content/home.md';

import styles from '../styles/home.less';

class Home extends React.Component {
  render() {
    const { html, attributes: { title } } = content;
    return (
      <div className={styles.home}>
        <Menu />
        <div className={styles.content}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          {this.renderCats()}
        </div>
      </div>
    );
  }

  renderCats = () => {
    const { attributes: { cats } } = content;

    const items = cats.map((cat :any, key: number) => (
      <li key={key}>
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
      </li>
    ));

    return <ul>{items}</ul>;
  }
}

export default Home;
