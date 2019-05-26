const path = require('path');
const fs = require('fs');

console.log('GENERATING PAGES');

fs.readdir(path.resolve(__dirname, '../src/content/blog'), (err, data) => {
  if (err) {
    return console.log('Unable to scan directory: ', err);
  }

  data.forEach((file) => {
    const fileName = file.replace(/\.[^/.]+$/, '');

    const fileContent = `
import React from 'react';

import { ContentTemplate } from '../components';
import content from '../content/blog/${fileName}.md';

class Content extends React.Component<{}, {}> {
  render() {
    const { attributes } = content;
    return <ContentTemplate {...attributes} />;
  }
}

export default Content;
`;

    fs.writeFile(
      path.resolve(__dirname, `../src/pages/${fileName}.tsx`),
      fileContent,
      (err) => {
        if (err) {
          return console.log('Unable to create Page: ', err);
        }
        console.log('Sucessfully created page: ', fileName);
      },
    );
  });
});
