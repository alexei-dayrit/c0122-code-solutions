const express = require('express');
const app = express();

app.use(express.json());

var nextId = 1;
const grades = {};
const newArr = [];
for (const prop in grades) {
  newArr.push(grades[prop]);
}

app.get('/api/grades', (req, res) => {
  res.json(newArr);
  // eslint-disable-next-line no-console
  console.log('Got a GET request!');
});

app.post('/api/grades', (req, res) => {
  // res.json controls the bottom output
  res.status(201).json({
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  });
  newArr.push({
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  });
  nextId++;
  // eslint-disable-next-line no-console
  console.log('Got a POST request!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
