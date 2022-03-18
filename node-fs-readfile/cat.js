const fs = require('fs');

let currentArg = 1;
const test = (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('---------');
  console.log('data:', data);
};

function concatReadAll() {
  currentArg++;
  if (currentArg >= process.argv.length) {
    return;
  }
  console.log('currentArg:', currentArg);
  const filename = process.argv[currentArg];
  console.log('file:', filename);
  fs.readFile(filename, 'utf8', test);
  concatReadAll();
}
concatReadAll();

// const filename = process.argv[2];
// fs.readFile(filename, 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     process.exit(1)
//   }
//   console.log('---------');
//   console.log('data:', data);
// });
