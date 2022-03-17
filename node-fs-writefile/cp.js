const fs = require('fs');

const fileToCopy = process.argv[2];

fs.readFile(fileToCopy, (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fs.writeFile('reminder.txt', data, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
});
