import React from 'react';

import { ContentBlock, HeroImage, Menu, Quote } from '../components';
import content from '../content/home.md';

import styles from '../styles/home.less';

class Home extends React.Component {
  render() {
    const { attributes: { hero, section1, section2, section3, section4 } } = content;

    return (
      <div className={styles.home}>
        <Menu />
        <HeroImage
          className={styles.heroImage}
          src={hero.image}
          title={hero.title}
          subtitle={hero.subtitle}
        />
        <div>
          <div className={`${styles.section} ${styles.section1} ${styles.content}`}>
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
          <div className={`${styles.section} ${styles.section2}`}>
            <div className={styles.content}>
              <ContentBlock
                className={styles.contentBlock}
                heading={section2.title}
                text={section2.text}
                link={section2.link}
              />
            </div>
          </div>
          <div
            className={`${styles.section} ${styles.section3}`}
            style={{ backgroundImage: `url('${section3.image}')` }}
          >
            <div className={styles.content}>
              <ContentBlock
                className={styles.contentBlock}
                heading={section3.title}
                text={section3.text}
                link={section3.link}
              />
            </div>
          </div>
          <div className={`${styles.section} ${styles.section4} ${styles.content}`}>
            <ContentBlock
              className={styles.contentBlock}
              heading={section4.title}
              text={section4.text}
              link={section4.link}
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
        <div className={styles.image} style={{ backgroundImage: `url('${method.image}')`}}/>
        <h3>{method.name}</h3>
        <p>{method.description}</p>
        <a href={method.link}>mehr</a>
      </li>
    ));

    return (
      <div className={styles.section5}>
        <div className={styles.content}>
          <h2>methoden</h2>
          <ul className={`${styles.methods}`}>{items}</ul>
        </div>
      </div>
    );
  }
}

export default Home;
