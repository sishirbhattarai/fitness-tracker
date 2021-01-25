const path = require("path");
const router = require("express").Router();
const db = require("../models");

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

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