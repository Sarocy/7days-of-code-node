const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem-vindo à API de Missões Espaciais!' });
});

router.post('/missions', missionController.createMission);
router.get('/missions', missionController.getMissions);
router.get('/missions/:id', missionController.getMissionById);
// Rota para atualizar uma missão por ID:
router.put('/missions/:id', missionController.updateMission);

module.exports = router;
