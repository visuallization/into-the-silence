import React from 'react';

import styles from './styles.less';

class Footer extends React.Component<{}, {}>{
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.content}>
          <ul>
            <li>Mag<sup>a</sup>. Heidrun Rieger</li>
            <li>Hetzendorf, AT</li>
            <li><a href="tel:+43 0123 456 789">+43 0123 456 789</a></li>
            <li><a href="mailto:my@email.com">my@email.com</a></li>
            <li><a>Impressum</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
