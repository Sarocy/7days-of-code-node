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

// Função para obter todas as missões
exports.getMissions = (req, res) => {
    missionModel.getMissions((err, missions) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Erro ao buscar as missões');
        } else {
            res.status(200).json(missions);
        }
    });
};

// Função para obter uma missão por ID
exports.getMissionById = (req, res) => {
    const id = req.params.id;

    missionModel.getMissionById(id, (err, mission) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Erro ao buscar a missão');
        } else if (mission) {
            res.status(200).json(mission);
        } else {
            res.status(404).send('Missão não encontrada');
        }
    });
};