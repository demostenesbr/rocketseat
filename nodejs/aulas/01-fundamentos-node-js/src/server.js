// Criar usuários
// Listar usuários
// Edição de usuários
// Remoção de usuários

// Métodos HTTP => https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
// Método HTTP
// URL

// GET, POST, PUT, PATCH, DELETE, 

// GET => Buscar uma informação do back-end
// POST => Enviar uma informação para o back-end
// PUT => Atualizar uma informação no back-end
// PATCH => Alterar uma informação no back-end
// DELETE => Remover uma informação no back-end

// GET => http://localhost:3333/users => Buscar usuários do back-end
// POST => http://localhost:3333/users => Criar um usuário no back-end

// Statefull - StateLess

// Request Param => Parâmetros que vem na própria rota que identificam um recurso

// HTTP Status Code => https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .write(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    });
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
