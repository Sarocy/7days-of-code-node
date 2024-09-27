const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./space_missions.db');

// Criação da tabela, se não existir
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS missions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        crew TEXT NOT NULL,
        spacecraft TEXT NOT NULL,
        destination TEXT NOT NULL,
        status TEXT NOT NULL,
        duration TEXT NOT NULL
    )`);
});

module.exports = db;
