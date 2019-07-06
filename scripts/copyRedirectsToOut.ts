const path = require('path');
const fs = require('fs');

console.log('COPYING _REDIRECTS');

fs.copyFile(
  path.resolve(__dirname, '../_redirects'),
  path.resolve(__dirname, '../out/_redirects'),
  (err) => {
    if (err) {
      throw err;
    }
    console.log('Sucessfully copied _redirects to out');
  },
);
