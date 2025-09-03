# Requests Mock

Este projeto é um mock de requisições HTTP para facilitar o desenvolvimento e testes de aplicações React. Ele permite simular respostas de APIs, tornando o processo de integração mais rápido e seguro.

## Funcionalidades

- Simulação de endpoints REST
- Configuração de respostas customizadas
- Suporte a diferentes métodos HTTP (GET, POST, PUT, DELETE)
- Fácil integração com projetos React

## Como usar

1. Clone o repositório:
  ```bash
  git clone https://github.com/seu-usuario/requests-mock.git
  ```
2. Instale as dependências:
  ```bash
  npm install
  ```
3. Execute o mock server:
  ```bash
  npx json-server db.json
  ```
4. Caso queira rodar via terminal:
  - GET 
    ```bash
    curl http://localhost:3000/users
    ```
  - POST 
    ```bash
    curl -X POST http://localhost:3000/users -d '{"id": 1, "name": "wend"}'
    ```

## Exemplos de uso

```js
fetch('/users')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está sob a licença MIT.