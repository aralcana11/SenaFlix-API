# SenaFlix-API - Node.Js + Express
API REST simples para gerenciar filmes e séries

## Pré-requisitos
- Node.js instalado

## Como rodar
```bash
npm i
```

### Iniciar o servidor
```bash
node index.js
```

### Acessar
Abra o navegador em: `http://localhost:3000`

## Endpoints

### Filmes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id`| Buscar um filme específico |
| POST | `/filmes` | Cria um novo filme |
| PUT | `/filmes/:id` | Atualiza um filme |
| DELETE | `/filmes/:id` | Remove um filme

### Séries

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/series` | Lista todos os series |
| GET | `/series/:id`| Buscar uma serie específica |
| POST | `/series` | Cria uma nova serie |
| PUT | `/series/:id` | Atualiza uma serie |
| DELETE | `/series/:id` | Remove uma serie


## Tecnologias
- Node.js
