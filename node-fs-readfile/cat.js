const fs = require('fs');

const fileName = process.argv[2];
const fileName2 = process.argv[3];
const fileName3 = process.argv[4];

function testReadIt() {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.readFile(fileName2, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
      fs.readFile(fileName3, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    });
  });
}

testReadIt();
