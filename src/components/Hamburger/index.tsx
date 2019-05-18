import React from 'react';

import styles from './styles.less';

interface IHamburgerProps {
  className?: string;
  onToggle(open: boolean): void;
  open?: boolean;
}

interface IHamburgerState {
  open: boolean;
}

class Hamburger extends React.Component<IHamburgerProps, IHamburgerState> {
  static defaultProps = {
    className: '',
    onToggle: () => {},
  };

  constructor(props: any) {
    super(props);

    this.state = {
      open: props.open || false,
    };
  }

  componentDidUpdate(prevProps: IHamburgerProps) {
    if (prevProps.open !== this.props.open) {
      this.setState({ open: !!this.props.open });
    }
  }

  render() {
    const { className } = this.props;
    const { open } = this.state;

    return (
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
    const { onToggle } = this.props;
    const { open } = this.state;
    const toggled = !open;

    this.setState({
      open: toggled,
    });

    onToggle(toggled);
  }
}

export default Hamburger;
