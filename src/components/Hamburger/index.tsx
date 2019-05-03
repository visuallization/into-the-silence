import React from 'react';

import styles from './styles.less';

interface IHamburgerProps {
  className?: string;
}

class Hamburger extends React.Component<IHamburgerProps, any> {
  static defaultProps = {
    className: '',
  };

  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    const { className } = this.props;
    const { open } = this.state;

    return(
      <div
        className={`${styles.hamburger} ${className} ${open ? styles.open : ''}`}
        onClick={this.toggle}
      >
        <div className={`${styles.line} ${styles.top}`}/>
        <div className={`${styles.line} ${styles.center}`}/>
        <div className={`${styles.line} ${styles.bottom}`}/>
      </div>
    );
  }

  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  }
}

export default Hamburger;
