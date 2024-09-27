const db = require('../database/db');

// Função para criar uma nova missão no banco de dados
exports.createMission = (missionData, callback) => {
    const { name, crew, spacecraft, destination, status, duration } = missionData;

    const sql = `INSERT INTO missions (name, crew, spacecraft, destination, status, duration) 
                 VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(sql, [name, crew, spacecraft, destination, status, duration], function(err) {
        callback(err, this ? this.lastID : null);
    });
};

// Função para obter todas as missões
exports.getMissions = (callback) => {
    const sql = `SELECT * FROM missions`;
    db.all(sql, [], (err, rows) => {
        callback(err, rows);
    });
};

// Função para obter uma missão por ID
exports.getMissionById = (id, callback) => {
    const sql = `SELECT * FROM missions WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        callback(err, row);
    });
};

// Função para atualizar uma missão
exports.updateMission = (id, missionData, callback) => {
    const { name, crew, spacecraft, destination, status, duration } = missionData;

    const sql = `UPDATE missions 
                 SET name = ?, crew = ?, spacecraft = ?, destination = ?, status = ?, duration = ?
                 WHERE id = ?`;

    db.run(sql, [name, crew, spacecraft, destination, status, duration, id], function(err) {
        callback(err, this.changes);
    });
};
