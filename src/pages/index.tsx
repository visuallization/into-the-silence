import React from 'react';

import { Menu, HeroImage } from '../components';
import content from '../content/home.md';

import styles from '../styles/home.less';

class Home extends React.Component {
  render() {
    const { html, attributes: { title } } = content;
    return (
      <div className={styles.home}>
        <Menu />
        <HeroImage
          className={styles.heroImage}
        />
        <div className={styles.content}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          {this.renderMethods()}
        </div>
      </div>
    );
  }

  renderMethods = () => {
    const { attributes: { methods } } = content;

    const items = methods.map((method: any, i: number) => (
      <li key={i}>
        <h2>{method.name}</h2>
        <p>{method.description}</p>
      </li>
    ));

    return <ul>{items}</ul>;
  }
}

export default Home;
