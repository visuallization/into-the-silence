const DtsCreator = require('typed-css-modules');
const glob = require('glob');

const creator = new DtsCreator();

glob('src/**/*.less', {}, (error, filePaths) => {
  for (const filePath of filePaths) {
    creator.create(filePath)
      .then(content => content.writeFile())
      .catch((error) => console.log(error));
  }
});