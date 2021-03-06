import React from 'react';
import ReactMarkdown from 'react-markdown';

import CookieBanner from '../CookieBanner';
import Footer from '../Footer';
import Menu from '../Menu';
import Quote from '../Quote';

import styles from './styles.less';

interface IContentTemplateProps {
  title?: string;
  intro?: string;
  image?: string;
  content?: IContent[];
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

class ContentTemplate extends React.Component<IContentTemplateProps, {}> {
  render() {
    const { title } = this.props;

    return (
      <div className={styles.contentTemplate}>
        <Menu className={styles.menu} items={menuItems} />
        <div className={styles.content}>
          <h1>{title}</h1>
          {this.renderIntro()}
          {this.renderImage()}
          {this.renderContent()}
        </div>
        <Footer />
        <CookieBanner />
      </div>
    );
  }

  renderIntro = () => {
    const { intro } = this.props;

    if (intro) {
      return <ReactMarkdown className={styles.intro} source={intro}/>;
    }

    return null;
  }

  renderImage = () => {
    const { image } = this.props;

    if (image) {
      return <img src={image} />;
    }

    return null;
  }

  renderContent = () => {
    const { content } = this.props;

    if (content) {
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

        return (
          <ReactMarkdown
            className={styles.markdown}
            key={index}
            source={element.text}
            // @ts-ignore
            transformLinkUri={null}
          />
        );
      });
    }

    return null;
  }
}

export default ContentTemplate;
