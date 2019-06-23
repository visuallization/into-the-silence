import React from 'react';
import { withRouter } from 'next/router';

import { ContentTemplate } from '../components';
import * as content from '../content';

interface IContentProps {
  router: any;
}

class Content extends React.Component<IContentProps, {}> {
  render() {
    const { id } = this.props.router.query;

    if (id) {
      // @ts-ignore
      const { attributes } = content[this.props.router.query.id.replace(/-/g, '')] || {};
      return <ContentTemplate {...attributes} />;
    }
    return <div>This Page could not be found</div>;
  }
}

export default withRouter(Content);
