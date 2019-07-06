import React from 'react';
import Link from 'next/link';

import Button from '../Button';

import styles from './styles.less';

interface ICookieBannerState {
  show: boolean;
}

class CookieBanner extends React.Component<{}, ICookieBannerState> {
  constructor (props: {}) {
    super(props);

    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.setState({ show: !(document.cookie.indexOf('cookie-accepted') > -1) });
  }

  render() {
    const { show } = this.state;

    if (show) {
      return (
        <div className={styles.cookieBanner}>
          Diese Seite verwendet Cookies.
          Durch die Nutzung dieser Seite sind Sie mit der Verwendung von Cookies einverstanden.
          &nbsp;
          <Link
            as="/legal-notice-and-data-privacy"
            href="/content?id=legal-notice-and-data-privacy"
          >
            <a>Mehr Infos</a>
          </Link>
          <Button className={styles.button} onClick={this.close} />
        </div>
      );
    }

    return null;
  }

  close = () => {
    document.cookie = 'cookie-accepted; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    this.setState({ show: false });
  }
}

export default CookieBanner;
