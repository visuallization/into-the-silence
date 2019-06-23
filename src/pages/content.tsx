import React from 'react';
import { withRouter } from 'next/router';

import Error from './_error';
import { ContentTemplate } from '../components';
import * as content from '../content';

interface IContentProps {
  router: any;
}

class Content extends React.Component<IContentProps, {}> {
  render() {
    const { id } = this.props.router.query;
    // @ts-ignore
    const page = id && content[id.replace(/-/g, '')];

    if (page) {
      const { attributes } = page;
      return <ContentTemplate {...attributes} />;
    }

    return <Error />;
  }
}

export default withRouter(Content);
