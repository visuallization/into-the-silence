import React from 'react';

import { ContentBlock, HeroImage, Menu, Quote } from '../components';
import content from '../content/home.md';

import styles from '../styles/home.less';

class Home extends React.Component {
  render() {
    const { attributes: { hero, section1 } } = content;

    return (
      <div className={styles.home}>
        <Menu />
        <HeroImage
          className={styles.heroImage}
          src={hero.image}
          title={hero.title}
          subtitle={hero.subtitle}
        />
        <div className={styles.content}>
          <div className={styles.section}>
            <Quote
              className={styles.quote}
              text={section1.quote}
              author={section1.author}
            />
            <ContentBlock
              className={styles.contentBlock}
              heading={section1.title}
              text={section1.text}
              link={section1.link}
            />
          </div>
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
