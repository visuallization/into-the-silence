import React from 'react';
import Link from 'next/link';

import { Hamburger } from '../';

import styles from './styles.less';

interface IMenuProps {
  className?: string;
  items: IMenuItem[];
}

interface IMenuItem {
  name: string;
  link: string;
}

interface IMenuState {
  open: boolean;
  position: POSITION;
}

enum POSITION {
  ABSOLUTE = 'absolute',
  HIDE = 'hide',
  SHOW = 'show',
}

class Menu extends React.Component<IMenuProps, IMenuState> {
  private maxWidth: number = 1046;

  static defaultProps = {
    className: '',
  };

  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
      position: POSITION.ABSOLUTE,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setMenuPosition);
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setMenuPosition);
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    const { className, items } = this.props;
    const { position, open } = this.state;

    return (
      <div className={`${styles.menu} ${styles[position]} ${open ? styles.open : ''} ${className}`}>
        <div className={styles.mobileMenu}>
          <span className={styles.logo} onClick={this.closeMobileItems}>
            <Link href={items[0].link}><a>{items[0].name}</a></Link>
          </span>
          <Hamburger open={open} onToggle={this.showMobileItems} />
        </div>
        {this.renderMenuItems()}
      </div>
    );
  }

  renderMenuItems = () => {
    const { items } = this.props;

    const menuItems = items.map((item, i) => (
      <li key={i} onClick={this.closeMobileItems}>
        <Link href={item.link}><a>{item.name}</a></Link>
      </li>
    ));

    return (
      <ul className={`${styles.menuItems}`}>
        {menuItems}
      </ul>
    );
  }

  showMobileItems = (show: boolean) => {
    if (show) {
      document.body.className = 'no-scroll';
    } else {
      document.body.className = '';
    }

    this.setState({
      open: show,
    });
  }

  closeMobileItems = () => {
    this.showMobileItems(false);
  }

  onResize = () => {
    if (window.innerWidth > this.maxWidth && this.state.open) {
      this.showMobileItems(false);
    }
  }

  setMenuPosition = () => {
    const { position } = this.state;

    if (window.scrollY > window.innerHeight && position === POSITION.ABSOLUTE) {
      this.setState({ position: POSITION.SHOW });
    } else if (window.scrollY <= window.innerHeight && position === POSITION.SHOW) {
      this.setState(
        { position: POSITION.HIDE },
        () => {
          setTimeout(() => { this.setState({ position: POSITION.ABSOLUTE }); }, 200);
        },
      );
    }
  }
}

export default Menu;
