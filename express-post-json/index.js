const express = require('express');
const app = express();

app.use(express.json());

var nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const newArr = [];
  for (const prop in grades) {
    newArr.push(grades[prop]);
  }
  res.json(newArr);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  res.status(201).json(req.body);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
