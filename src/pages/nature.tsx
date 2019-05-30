import React from 'react';

import { ContentTemplate } from '../components';
import content from '../content/blog/nature.md';

class Content extends React.Component<{}, {}> {
  render() {
    const { attributes } = content;
    return <ContentTemplate {...attributes} />;
  }
}

export default Content;