const fs = require('fs');

const data = Math.random();

fs.writeFile('random.txt', data + '\n', 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
