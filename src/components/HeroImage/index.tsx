import React from 'react';

import styles from './styles.less';

interface IHeroImageProps {
  className: string;
  src: string;
}

class HeroImage extends React.Component<IHeroImageProps, any> {
  static defaultProps = {
    className: '',
    src: '',
  };

  render() {
    const { className, src } = this.props;

    return (
      <div
        className={`${styles.heroImage} ${className}`}
        style={{ backgroundImage: `url('${src}')` }}
      />
    );
  }
}

export default HeroImage;
