# Casos de Teste — Serverest

## Login

### CT01 — Login com sucesso

- **Endpoint:** POST /login
- **Entrada:** email: fulano@qa.com, senha: qateste
- **Resultado esperado:** status 200, token retornado

### CT02 — Login com credencial inválida

- **Endpoint:** POST /login
- **Entrada:** email: kksk@qa.com, senha: 4846389515
- **Resultado esperado:** status 401, mensagem de erro

---

## Cadastro de usuário

### CT03 — Cadastro com dados válidos

- **Endpoint:** POST /usuarios
- **Entrada:** nome, email, senha (dados válidos)
- **Resultado esperado:** status 201, usuário criado

### CT04 — Cadastro com email duplicado

- **Endpoint:** POST /usuarios
- **Entrada:** mesmo email do CT03
- **Resultado esperado:** status 400, mensagem de erro

---

## Produtos

### CT05 — Listar produtos

- **Endpoint:** GET /produtos
- **Entrada:** nenhuma
- **Resultado esperado:** status 200, lista de produtos

### CT06 — Criar produto com token válido

- **Endpoint:** POST /produtos
- **Entrada:** nome, preco, descricao, quantidade + token
- **Resultado esperado:** status 201, produto criado

### CT07 — Criar produto sem token

- **Endpoint:** POST /produtos
- **Entrada:** nome, preco, descricao, quantidade (sem token)
- **Resultado esperado:** status 401, mensagem de erro

---

## Observações

- Os dados devem ser dinâmicos para evitar duplicidade (ex: timestamp no email)
- Os testes de API podem ser automatizados com Cypress
- Os testes de UI devem validar redirecionamentos e mensagens visíveis