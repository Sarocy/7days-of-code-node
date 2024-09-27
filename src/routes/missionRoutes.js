const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem-vindo à API de Missões Espaciais!' });
});

// Rota para criar uma nova missão
router.post('/missions', missionController.createMission);

module.exports = router;
