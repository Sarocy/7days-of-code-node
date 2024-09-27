# 7 Days of Code: Node! 🧑🏿‍💻

## 💻 Dia 01:  Criação do Projeto e Instalação de Dependências
### 🚀 O Desafio de Hoje

No primeiro dia do desafio realizamos a configuração inicial do ambiente de desenvolvimento para construir nossa API de gerenciamento de missões espaciais. Durante este dia, criamos a base do projeto com **Node.js**, **Express**, e **SQLite**, além de definir a estrutura inicial das pastas e arquivos.
### 1. Inicialização do Projeto
- Usamos o comando `npm init` para inicializar o projeto Node.js e gerar o arquivo `package.json`.
  **Comando:**
  ```bash
  npm init -y

### 2. Instalação de Dependências
- Instalamos as bibliotecas essenciais que serão utilizadas ao longo do projeto: Express, para criar o servidor e definir as rotas. SQLite3, para gerenciar o banco de dados relacional que será usado para armazenar as informações das missões. Nodemon, para monitorar as alterações no código e reiniciar o servidor automaticamente durante o desenvolvimento.
  **Comando:**
  ```bash
  npm install express sqlite3 nodemon

### 3. Estrutura do Projeto
- Organizamos o projeto criando pastas onde ficarão os controllers, models, routes e os arquivos de configuração e conexão ao banco de dados SQLite. Criamos também o arquivo principal server.js, que configura o servidor Express e define a porta de escuta.

### 4. Configuração do Nodemon
Adicionamos um script no package.json para facilitar a execução do servidor em modo de desenvolvimento usando o Nodemon, script esse que pode ser acionado com o comando `npm run dev`.

**Scripts no package.json:**
 ```bash
"scripts": {
  "dev": "nodemon src/server.js"
}
```
## Como Executar o Projeto
- Clone o repositório do projeto e instale as dependências:
```bash
npm install
```
- Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```

