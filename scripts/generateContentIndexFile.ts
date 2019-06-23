const path = require('path');
const fs = require('fs');

console.log('GENERATING BLOG INDEX FILE');

fs.readdir(path.resolve(__dirname, '../src/content/blog'), (err, data) => {
  if (err) {
    return console.log('Unable to scan directory: ', err);
  }

  let fileContent = ``;

  const fileNames = [];

  data.forEach((file) => {
    let name = file.replace(/\.[^/.]+$/, '');
    name = name.replace(/-/g, '');

    fileNames.push(name);

    fileContent += `import ${name} from './blog/${file}';
`;
  });

  fileContent += `
export {
`;

  fileNames.forEach((name) => {
    fileContent += `  ${name},
`;
  });

  fileContent += `};
`;

  fs.writeFile(
    path.resolve(__dirname, `../src/content/index.ts`),
    fileContent,
    (err) => {
      if (err) {
        return console.log('Unable to create blog index file: ', err);
      }
      console.log('Sucessfully created blog index file');
    },
  );
});
