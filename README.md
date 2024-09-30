# 7 Days of Code: Node! 🧑🏿‍💻

## 💻 Dia 5: Implementar a operação UPDATE
### 🚀 O Desafio de Hoje

No Dia 5, o foco é permitir a atualização das missões espaciais já registradas. Vamos criar uma rota que será responsável por receber uma requisição com os dados atualizados de uma missão específica e, em seguida, gravar essas mudanças no banco de dados. Dessa forma, aplicamos hoje as seguintes atividades:

- Criamos a rota PUT /missions/:id no arquivo missionRoutes.js para atualizar uma missão existente.
- Criamos a função para processar a atualização no controller, implementando a função updateMission no missionController.js.
- Criamos a função de atualização no model.

### 📦 Testando a API no Postman

Para testar a rota `PUT /missions/:id`:
- Abra o Postman e crie uma nova requisição do tipo PUT.
- No campo de URL, insira `http://localhost:3000/missions/{id}`, onde `{id}` é o ID da missão que desejamos atualizar.
- No corpo da requisição, envie os novos dados da missão no formato JSON, por exemplo:
```javascript
{
   "name": "Missão Júpiter",
    "crew": "Tripulação 1",
    "spacecraft": "Nave Apolo",
    "destination": "Júpiter",
    "status": "ativa",
    "duration": "7 dias"
}
```
- Clique em Send e veja se a missão foi atualizada corretamente.
