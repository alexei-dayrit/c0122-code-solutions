const fs = require('fs');
const parsed = require('./data.json');

// READ
if (process.argv[2] === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    }
    for (const prop2 in parsed.notes) {
      console.log(prop2 + ': ' + parsed.notes[prop2]);
    }
  });
}

// CREATE
// if (process.argv[2] === 'create') {
//   parsed.notes[parsed.nextId.toString()] = process.argv[3];
//   parsed.nextId++;
//   const newNote = JSON.stringify(parsed, null, 2);
//   fs.writeFile('./data.json', newNote, err => {
//     if (err) {
//       console.error(err);
//     }
//   });
// }

// UPDATE
if (process.argv[2] === 'update') {
  parsed.notes[process.argv[3]] = process.argv[4];
  const updatedNote = JSON.stringify(parsed, null, 2);
  fs.writeFile('./data.json', updatedNote, err => {
    if (err) {
      console.error(err);
    }
  });
}

// DELETE
if (process.argv[2] === 'delete') {
  delete parsed.notes[process.argv[3]];
  parsed.nextId--;
  const updatedNote = JSON.stringify(parsed, null, 2);
  fs.writeFile('./data.json', updatedNote, err => {
    if (err) {
      console.error(err);
    }
  });
}
