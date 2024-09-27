const express = require('express');
const db = require('./src/database/db'); 

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Inicializa o banco de dados
db.serialize(() => {
    console.log('Banco de dados e tabelas estão prontos');
});

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

