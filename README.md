# 7 Days of Code: Node! 🧑🏿‍💻

## 💻 Dia 4: Implementar a operação READ
### 🚀 O Desafio de Hoje

Hoje, avançamos mais um passo na construção da API para missões espaciais! O foco do Dia 4 foi implementar as operações de READ, permitindo a leitura das missões que estão armazenadas no banco de dados. Nesse dia, trabalhamos na operação READ do nosso CRUD, que nos permite visualizar os dados das missões, o que significa que agora temos a capacidade de consultar todas as missões cadastradas ou buscar uma missão específica pelo seu ID.

### 📂 Estrutura
As tarefas concluídas no Dia 4 são:
- Implementamos a rota GET /missions para obter a lista de todas as missões espaciais.
- Implementamos a rota GET /missions/ para obter os detalhes de uma missão específica pelo seu ID.
- Adicionamos as funções getMissions e getMissionById no arquivo missionController.js para manipular as requisições.
- Criamos as funções correspondentes no arquivo missionModel.js para buscar os dados diretamente no banco de dados SQLite.
- Testamos as funcionalidades utilizando o Postman.

### 📦 Testando a API
Podemos testar as operações de leitura que implementamos através do Postman.

Para testar a rota `GET /missions`:
- Configure a requisição como GET.
- No campo de URL, insira http://localhost:3000/missions.
- Clique em Send para enviar a requisição e veja a lista de todas as missões cadastradas.

Testar a rota `GET /missions/:id`:

- Crie uma nova requisição no Postman, também do tipo GET.
- No campo de URL, insira http://localhost:3000/missions/{id}, onde {id} é o ID de uma missão existente.
- Clique em Send para obter os detalhes da missão específica.

Dessa forma, temos a capacidade de consultar os dados armazenados no nosso banco de dados SQLite!
