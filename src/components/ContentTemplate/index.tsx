import React from 'react';
import ReactMarkdown from 'react-markdown';

import Footer from '../Footer';
import Menu from '../Menu';
import Quote from '../Quote';

import styles from './styles.less';

interface IContentTemplateProps {
  title: string;
  intro: string;
  image: string;
  text: string;
  content: IContent[];
}

interface IContent {
  author?: string;
  quote?: string;
  text?: string;
  type: Type;
}

enum Type {
  text = 'text',
  quote = 'quote',
}

const menuItems = [
  {
    name: 'In die Stille gehen',
    link: '/',
  },
  {
    name: 'In die eigene Lebendigkeit',
    link: '/',
  },
  {
    name: 'Methoden',
    link: '/',
  },
  {
    name: 'Über mich & meine Lehrer',
    link: '/',
  },
  {
    name: 'Kontakt',
    link: '/',
  },
];

class ContentTemplate extends React.Component<IContentTemplateProps, {}> {
  render() {
    const { title, intro, image } = this.props;

    return (
      <div className={styles.contentTemplate}>
        <Menu className={styles.menu} items={menuItems} />
        <div className={styles.content}>
          <h1>{title}</h1>
          <p className={styles.intro}>{intro}</p>
          <img src={image} />
          {this.renderContent()}
        </div>
        <Footer />
      </div>
    );
  }

  renderContent = () => {
    const { content } = this.props;

    return content.map((element, index) => {
      if (element.type === Type.quote) {
        return (
          <Quote
            key={index}
            className={styles.quote}
            text={element.quote}
            author={element.author}
          />
        );
      }

      return <ReactMarkdown className={styles.markdown} key={index} source={element.text}/>;
    });
  }
}

export default ContentTemplate;
