const express = require('express');
const app = express();
app.use(express.json());

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const allGrades = result.rows;
      res.status(200).json(allGrades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const score = parseFloat(req.body.score);
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'Missing a required field (name, course, score)'
    });
    return;
  } else if (Number.isInteger(score) !== true || score <= 0 || score >= 100) {
    res.status(400).json({
      error: '\'score\' must be an integer from 0 to 100'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      const createdGrade = result.rows[0];
      res.status(201).json(createdGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const score = Number(req.body.score);
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'Missing a required field (name, course, score)'
    });
    return;
  } else if (Number.isInteger(score) !== true || score <= 0 || score >= 100) {
    res.status(400).json({
      error: '\'score\' must be an integer from 0 to 100'
    });
    return;
  } else if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
    update "grades"
       set "name"   = $1,
           "course" = $2,
           "score"  = $3
     where "gradeId" = $4
     returning *;
  `;
  const params = [req.body.name, req.body.course, req.body.score, req.params.gradeId];
  db.query(sql, params)
    .then(result => {
      const updatedGrade = result.rows[0];
      if (!updatedGrade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${req.params.gradeId}`
        });
      } else {
        res.status(200).json(updatedGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
     where "gradeId" = $1
    returning *;
  `;
  const params = [req.params.gradeId];
  db.query(sql, params)
    .then(result => {
      const deletedGrade = result.rows[0];
      if (!deletedGrade) {
        res.status(404).json({
          error: `Cannot find a grade with gradeId ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
