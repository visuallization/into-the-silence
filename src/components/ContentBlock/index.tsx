import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles.less';

interface IContentBlockProps {
  className?: string;
  heading: string;
  text: string;
  link?: string;
}

class ContentBlock extends React.Component<IContentBlockProps, {}> {
  static defaultProps = {
    className: '',
    link: '',
  };

  render() {
    const { className, heading, text, link } = this.props;

    return (
      <div className={`${styles.contenBlock} ${className}`}>
        <h2>{heading}</h2>
        <ReactMarkdown source={text}/>
        <a href={link}>mehr</a>
      </div>
    );
  }
}

export default ContentBlock;
