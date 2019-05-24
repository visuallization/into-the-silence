import React from 'react';
import ReactMarkdown from 'react-markdown';

import Footer from '../Footer';
import Menu from '../Menu';

import styles from './styles.less';

interface IContentTemplateProps {
  title: string;
  intro: string;
  image: string;
  text: string;
}

class ContentTemplate extends React.Component<IContentTemplateProps, {}> {
  render() {
    const { title, intro, image, text } = this.props;
    return (
      <div className={styles.contentTemplate}>
        <Menu className={styles.menu} />
        <div className={styles.content}>
          <h1>{title}</h1>
          <p className={styles.intro}>{intro}</p>
          <img src={image} />
          <ReactMarkdown source={text}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContentTemplate;
