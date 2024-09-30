# 7 Days of Code: Node! 🧑🏿‍💻

## 💻 Dia 6: Implementar a operação DELETE
### 🚀 O Desafio de Hoje

No Dia 6, vamos implementar a rota e a lógica necessárias para excluir uma missão do nosso banco de dados. A operação DELETE receberá o ID de uma missão e removerá o registro correspondente do SQLite. Para isso seguiremos o seguinte passo a passo:
- Criar a rota para deletar missões: implementar a rota DELETE /missions/:id no arquivo missionRoutes.js.
- Implementar a função de exclusão no controller: Desenvolver a função deleteMission no arquivo missionController.js para processar a solicitação de exclusão.
- Desenvolver a lógica no model para deletar a missão: No arquivo missionModel.js, criar a lógica que removerá o registro do banco de dados.

### 📦 Testando a API no Postman
Para testar a rota `DELETE /missions/:id` no Postman devemos criar uma nova requisição do tipo DELETE. No campo de URL, devemos inserir `http://localhost:3000/missions/{id}`, onde `{id}` é o ID da missão que desejamos deletar. Devemos, então, enviar a requisição e verificar se a missão foi removida corretamente, através da exibição da seguinte resposta:
```{
  "message": "Missão deletada com sucesso!"
}
```
