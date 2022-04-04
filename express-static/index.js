const express = require('express');
const path = require('path');
const app = express();

const joinedPath = path.join(__dirname, 'public');
console.log('__dirname value:', __dirname);
console.log('joinedPath return value:', joinedPath);

const staticFiles = express.static(joinedPath);
app.use(staticFiles);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
