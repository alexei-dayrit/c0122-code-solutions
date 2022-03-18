const fs = require('fs');

let currentArg = 1;

function concatReadAll() {
  currentArg++;
  if (currentArg >= process.argv.length) {
    return;
  }
  const filename = process.argv[currentArg];
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('---------');
    console.log(data);
  });
  // concatReadAll();
}
concatReadAll();
