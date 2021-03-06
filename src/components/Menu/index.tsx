import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import { Hamburger } from '../';

import styles from './styles.less';

interface IMenuProps {
  className?: string;
  items: IMenuItem[];
  scrollOnClick?: boolean;
  logoColor?: string;
  logoColorSticky?: string;
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
    scrollOnClick: false,
    logoColor: 'inherit',
    logoColorSticky: 'inherit',
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

    smoothscroll.polyfill();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setMenuPosition);
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    const { className, items, logoColor, logoColorSticky } = this.props;
    const { position, open } = this.state;

    return (
      <div className={`${styles.menu} ${styles[position]} ${open ? styles.open : ''} ${className}`}>
        {this.renderOverlay()}
        <div className={styles.mobileMenu}>
          <span className={styles.logo}>
            <a
              href={items[0].link}
              onClick={this.closeMobileItems}
              style={{ color: `${position === POSITION.ABSOLUTE ? logoColor : logoColorSticky}` }}
            >
              {items[0].name}
            </a>
          </span>
          <Hamburger open={open} onToggle={this.showMobileItems} />
        </div>
        {this.renderMenuItems()}
      </div>
    );
  }

  renderOverlay = () => {
    const { open } = this.state;

    if (open) {
      return <div className={styles.overlay} onClick={this.closeMobileItems}/>;
    }
    return null;
  }

  renderMenuItems = () => {
    const { items } = this.props;

    const menuItems = items.map((item, i) => (
      <li key={i}>
        <a href={item.link} onClick={this.closeMobileItems}>{item.name}</a>
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

  closeMobileItems = (e: React.SyntheticEvent) => {
    const { scrollOnClick } = this.props;
    const element = e.currentTarget;

    if (element.tagName === 'A' && scrollOnClick) {
      e.preventDefault();
      e.stopPropagation();

      const id = element.getAttribute('href') || '';
      const scrollToElement = document.querySelector(id) as HTMLElement;
      const scrollOffset = 40;

      window.scrollTo({
        top: scrollToElement.offsetTop - scrollOffset,
        left: 0,
        behavior: 'smooth',
      });
    }

    this.showMobileItems(false);
  }

  onResize = () => {
    if (window.innerWidth > this.maxWidth && this.state.open) {
      this.showMobileItems(false);
    }
  }

  setMenuPosition = () => {
    const { position } = this.state;

    if (window.pageYOffset > window.innerHeight && position === POSITION.ABSOLUTE) {
      this.setState({ position: POSITION.SHOW });
    } else if (window.pageYOffset <= window.innerHeight && position === POSITION.SHOW) {
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
