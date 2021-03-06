import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

import styles from './styles.less';

interface IContentBlockProps {
  className?: string;
  heading?: string;
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
        {heading && <h2>{heading}</h2>}
        <ReactMarkdown source={text}/>
        {link && <Link as={`content/${link}`} href={`content?id=${link}`}><a>mehr</a></Link>}
      </div>
    );
  }
}

export default ContentBlock;
