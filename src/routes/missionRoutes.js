const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem-vindo à API de Missões Espaciais!' });
});

router.post('/missions', missionController.createMission);
// Rota para obter todas as missões:
router.get('/missions', missionController.getMissions);
// Rota para obter uma missão por ID:
router.get('/missions/:id', missionController.getMissionById);

module.exports = router;
