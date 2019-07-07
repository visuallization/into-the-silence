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
    console.log(this.props.router);
    // @ts-ignore
    const page = id && content[id.replace(/-/g, '')];

    if (page) {
      const { attributes } = page;
      return <ContentTemplate {...attributes} />;
    }

    return null;
  }
}

export default withRouter(Content);
