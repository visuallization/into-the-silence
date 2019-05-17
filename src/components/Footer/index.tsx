import React from 'react';

import styles from './styles.less';

class Footer extends React.Component<{}, {}>{
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.content}>
          <ul>
            <li>Footer</li>
            <li>Some text</li>
            <li>and</li>
            <li>another</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;