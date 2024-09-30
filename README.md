# 7 Days of Code: Node! 🧑🏿‍💻

## 💻 Dia 3: Implementar a operação CREATE
### 🚀 O Desafio de Hoje

Hoje, no projeto "7 Days of Code", focamos na implementação da funcionalidade de Create, que permite adicionar novas missões espaciais ao banco de dados. 
Nesse dia, criamos a rota de POST que permite a inserção de uma nova missão na base de dados SQLite. Agora, podemos enviar uma requisição contendo os dados de uma missão espacial e armazená-la corretamente no banco, o que marca o início do controle de missões pela API!

### 📂 Estrutura

- Criamos uma rota POST em routes/missions.js para lidar com a inserção de missões.
- Criamos a função createMission no missionController.js e missionModel.js.
- Conectamos nossa aplicação ao banco de dados SQLite e usamos queries SQL para realizar a inserção.

### 🚀 Testando
Para testar, você pode usar o Postman ou outra ferramenta de API para enviar a requisição POST com o corpo JSON da missão.

#### Exemplo de Requisição
A requisição POST para adicionar uma missão deve ser feita no endpoint:
```bash
POST /missions
```
Exemplo de corpo da requisição (JSON):

```bash
{
    "name": "Missão de Teste",
    "crew": "Tripulação 1",
    "spacecraft": "Espaçonave 1",
    "destination": "Lua",
    "status": "ativa",
    "duration": "7 dias"
}

```


