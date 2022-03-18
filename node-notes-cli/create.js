const fs = require('fs');
const parsed = require('./data.json');

// CREATE
if (process.argv[2] === 'create') {
  parsed.notes[parsed.nextId.toString()] = process.argv[3];
  parsed.nextId++;
  const newNote = JSON.stringify(parsed, null, 2);
  fs.writeFile('./data.json', newNote, err => {
    if (err) {
      console.error(err);
    }
  });
}
