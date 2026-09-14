# Serverest — Testes Automatizados

Projeto de testes para a aplicação Serverest, cobrindo interface (Cypress) e API (Postman).

---

## Tecnologias

- Cypress
- Postman
- JavaScript
- Git
- GitHub Actions (CI/CD)

---

## Como rodar os testes

### UI (Cypress)

```bash
npm install
npx cypress open
Para rodar em modo headless:

bash
npx cypress run
API (Postman)
Abra o Postman

Clique em Import

Selecione o arquivo postman/serverest.postman_collection.json

Execute as requisições na ordem: Login → Usuários → Produtos → Carrinhos

Documentação
Plano de Teste: docs/plano-de-teste.md

Casos de Teste: docs/casos-de-teste.md

CI/CD
Pipeline configurado com GitHub Actions para execução automática dos testes em cada push.

Responsável
Douglas Sampaio — QA Junior

Testando CI
