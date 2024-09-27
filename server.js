const express = require('express');
const app = express();

// Aqui vamos definir uma rota inicial (raiz) para testar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('API de Missões Espaciais - Servidor Rodando!');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}. Acesse http://localhost:${PORT}/`);
});
