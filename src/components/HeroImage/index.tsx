import React from 'react';

import styles from './styles.less';

interface IHeroImageProps {
  className: string;
  src: string;
  title: string;
  subtitle: string;
}

class HeroImage extends React.Component<IHeroImageProps, any> {
  static defaultProps = {
    className: '',
    src: '',
    title: '',
    subtitle: '',
  };

  render() {
    const { className, src, title, subtitle } = this.props;

    return (
      <div
        className={`${styles.heroImage} ${className}`}
        style={{ backgroundImage: `url('${src}')` }}
      >
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
}

export default HeroImage;
