const fs = require('fs');
const parsedData = require('./data.json');

const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const note in parsedData.notes) {
    notesArr.push(parsedData.notes[note]);
  }
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const idNum = parseFloat(req.params.id);
  if (Number.isInteger(idNum) !== true || idNum < 0) {
    res.status(400);
    res.json({
      error: 'Id must be a positive integer'
    });
  } else if (parsedData.notes[req.params.id] === undefined) {
    res.status(404).json({
      error: 'Cannot find note with id ' + req.params.id
    });
  } else if (parseInt(req.params.id) === parsedData.notes[req.params.id].id) {
    res.status(200).json(parsedData.notes[req.params.id]);
  }
});

app.post('/api/notes', (req, res) => {
  const nextIdName = parsedData.nextId;
  const nextIdNum = parsedData.nextId;
  if (!req.body.content) {
    res.status(400).json({
      error: 'Content is a required field'
    });
  } else if (req.body.content) {
    parsedData.notes[nextIdName] = {
      id: parsedData.nextId,
      content: req.body.content
    };
    parsedData.nextId++;
    const newNote = JSON.stringify(parsedData, null, 2);
    fs.writeFile('./derp/data.json', newNote, err => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error ocurred'
        });
      } else {
        res.status(201).json({
          id: nextIdNum,
          content: req.body.content
        });
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const idNum = parseFloat(req.params.id);
  if (Number.isInteger(idNum) !== true || idNum < 0) {
    res.status(400);
    res.json({
      error: 'Id must be a positive integer'
    });
  } else if (parsedData.notes[req.params.id] === undefined) {
    res.status(404).json({
      error: 'Cannot find note with id ' + req.params.id
    });
  } else if (parseInt(req.params.id) === parsedData.notes[req.params.id].id) {
    delete parsedData.notes[req.params.id];
    const note = JSON.stringify(parsedData, null, 2);
    fs.writeFile('./derp/data.json', note, err => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const idNum = parseFloat(req.params.id);
  if (Number.isInteger(idNum) !== true || idNum < 0) {
    res.status(400);
    res.json({
      error: 'Id must be a positive integer'
    });
  } else if (!req.body.content) {
    res.status(400);
    res.json({
      error: 'Content is a required field'
    });
  } else if (parsedData.notes[req.params.id] === undefined) {
    res.status(404).json({
      error: 'Cannot find note with id ' + req.params.id
    });
  } else if (parseInt(req.params.id) === parsedData.notes[req.params.id].id) {
    parsedData.notes[req.params.id] = {
      id: parsedData.notes[req.params.id].id,
      content: req.body.content
    };
    const newNote = JSON.stringify(parsedData, null, 2);
    fs.writeFile('./derp/data.json', newNote, err => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error ocurred'
        });
      } else {
        res.status(200).json({
          id: parsedData.notes[req.params.id].id,
          content: req.body.content
        });
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
