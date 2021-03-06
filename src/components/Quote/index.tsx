import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles.less';

interface IQuoteProps {
  text: string;
  author?: string;
  cite?: string;
  className?: string;
}

class Quote extends React.Component<IQuoteProps, {}> {
  static defaultProps = {
    text: 'Ich bin ein Zitat.',
    cite: '',
    className: '',
  };

  render() {
    const { text, cite, className } = this.props;

    return (
      <blockquote className={`${styles.quote} ${className}`} cite={cite}>
        <ReactMarkdown source={text} />
        {this.renderAuthor()}
      </blockquote>
    );
  }

  renderAuthor = () => {
    const { author } = this.props;

    if (author) {
      return <span>- {author} -</span>;
    }

    return null;
  }
}

export default Quote;
