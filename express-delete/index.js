const express = require('express');
const app = express();

app.use(express.json());

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const newArr = [];
  for (const prop in grades) {
    newArr.push(grades[prop]);
  }
  res.json(newArr);
});

app.delete('/api/grades/:id', (req, res) => {
  const objId = parseInt(req.params.id);
  if (objId === grades[objId].id) {
    delete grades[objId];
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
