const router = require("express").Router();
const path = require("path");
const db = require("../models");

//setting routes and eferencing route from api.js
//get 
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(data => {
      res.json(data);
    })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
      });
  });

// post 
router.post('/api/workouts', (req, res) => {
    db.Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

router.put('/api/workouts/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  db.Workout.findOneAndUpdate({ _id: id}, { $push: { exercises: body }})
  .then((data) => {
    console.log(data);
    res.json(data);
  })

  .catch((err) => {
    res.status(400).json(err);
  });
});

router.put('/api/workouts/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  db.Workout.findOneAndUpdate(
    { id },
    { $push: { exercises: body } },
    { new: true },
  )
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

  module.exports = router;

