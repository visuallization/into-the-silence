import React from 'react';
import Link from 'next/link';

import styles from './styles.less';

interface IFooterProps {
  className?: string;
  id?: string;
}

class Footer extends React.Component<IFooterProps, {}>{
  static defaultProps = {
    className: '',
    id: '',
  };

  render() {
    const { className, id } = this.props;
    return (
      <div id={id} className={`${styles.footer} ${className}`}>
        <div className={styles.content}>
          <ul>
            <li>Mag<sup>a</sup>. Heidrun Rieger</li>
            <li>Hetzendorf, AT</li>
            <li>
              <Link href="mailto:kontakt@in-die-stille-gehen.at">
                <a>kontakt@in-die-stille-gehen.at</a>
              </Link>
            </li>
            <li>
              <Link href="/content?id=legal-notice-and-data-privacy">
                <a>Impressum & Datenschutz</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
