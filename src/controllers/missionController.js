const missionModel = require('../models/missionModel');

// Função para criar uma nova missão
exports.createMission = (req, res) => {
    const missionData = req.body;

    missionModel.createMission(missionData, (err, missionId) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Erro ao adicionar a missão');
        } else {
            res.status(201).json({ id: missionId, message: 'Missão criada com sucesso!' });
        }
    });
};
