const fs = require('fs');

let currentArg = 1;

function concatReadAll() {
  currentArg++;
  if (currentArg < process.argv.length) {
    console.log('currentArg:', currentArg);
    const filename = process.argv[currentArg];
    console.log('file:', filename);
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log('---------');
      console.log('data:', data);
      concatReadAll();
    });
  }
}
concatReadAll();
