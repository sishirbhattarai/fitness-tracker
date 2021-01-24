const router = require("express").Router();
const path = require("path");
const db = require("../models");

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

