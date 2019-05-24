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
    const { className, text, link } = this.props;

    return (
      <div className={`${styles.contenBlock} ${className}`}>
        {this.renderHeading()}
        <ReactMarkdown source={text}/>
        <Link href={link}><a>mehr</a></Link>
      </div>
    );
  }

  renderHeading = () => {
    const { heading } = this.props;
    if (heading) {
      return <h2>{heading}</h2>;
    }
    return null;
  }
}

export default ContentBlock;
