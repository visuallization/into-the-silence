import React from 'react';

import { ContentTemplate } from '../components';
import content from '../content/about.md';

class About extends React.Component<{}, {}> {
  render() {
    const { attributes } = content;
    return <ContentTemplate {...attributes} />;
  }
}

export default About;
