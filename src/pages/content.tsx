import React from 'react';
import { withRouter } from 'next/router';

import { ContentTemplate } from '../components';
import * as content from '../content';

interface IContentProps {
  router: any;
}

class Content extends React.Component<IContentProps, {}> {
  render() {
    const { router } = this.props;
    const { id } = router.query;

    let normalizedPageId = null;
    if (id) {
      normalizedPageId = id.replace(/-/g, '');
    } else {
      normalizedPageId = router.asPath.split('/').pop().replace(/-/g, '');
    }

    const page = content[normalizedPageId];

    if (page) {
      const { attributes } = page;
      return <ContentTemplate {...attributes} />;
    }

    return null;
  }
}

export default withRouter(Content);
