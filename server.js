const express = require('express');
const db = require('./src/database/db'); 
const missionRoutes = require('./src/routes/missionRoutes');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api', missionRoutes);

db.serialize(() => {
    console.log('Banco de dados e tabelas estão prontos');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

