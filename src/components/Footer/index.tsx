import React from 'react';
import Link from 'next/link';

import styles from './styles.less';

interface IFooterProps {
  id?: string;
}

class Footer extends React.Component<IFooterProps, {}>{
  static defaultProps = {
    id: '',
  };

  render() {
    const { id } = this.props;
    return (
      <div id={id} className={styles.footer}>
        <div className={styles.content}>
          <ul>
            <li>Mag<sup>a</sup>. Heidrun Rieger</li>
            <li>Hetzendorf, AT</li>
            <li><Link><a href="tel:+43 0123 456 789">+43 0123 456 789</a></Link></li>
            <li><Link><a href="mailto:my@email.com">my@email.com</a></Link></li>
            <li>
              <Link><a href="/legal-notice-and-data-privacy">Impressum & Datenschutz</a></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
