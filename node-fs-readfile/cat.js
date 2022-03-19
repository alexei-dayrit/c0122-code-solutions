const fs = require('fs');

let currentArg = 1;

function concatReadAll() {
  currentArg++;
  if (currentArg < process.argv.length) {
    const filename = process.argv[currentArg];
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(data);
      concatReadAll();
    });
  }
}
concatReadAll();
