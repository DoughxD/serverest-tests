# Plano de Teste — Serverest

## Identificação

- Projeto: Serverest E-commerce
- Versão: 1.0
- Data: 08/2026
- Responsável: Douglas Sampaio
- Tipo de teste: Funcional (API + UI)
- Ferramentas: Cypress, Postman, GitHub Actions

---

## Objetivo

Validar se os fluxos principais da aplicação Serverest (login, cadastro, produtos e carrinho) funcionam conforme o esperado, tanto na API quanto na interface do usuário.

---

## Escopo

### Será testado

- Login (API + UI)
- Cadastro de usuário (API + UI)
- Listagem de produtos (API)
- Criação de produto (API)

### Não será testado

- Performance
- Segurança avançada
- Testes em dispositivos móveis
- Integração com serviços externos

---

## Estratégia de teste

- Testes manuais: execução de fluxos no navegador e validação de respostas no Postman
- Testes automatizados de API: Cypress com validação de status code, schema e mensagens
- Testes automatizados de UI: Cypress simulando ações do usuário
- Pipeline CI/CD: GitHub Actions para execução automática em cada push

---

## Critérios de aceite

- Cada endpoint retorna o status code esperado
- Mensagens de erro são claras e consistentes
- Os fluxos de login, cadastro e produtos funcionam sem falhas na UI
- O sistema não permite ações sem autenticação quando exigido

---

## Classificação de bugs

- **Crítica**: sistema para de funcionar ou não responde
- **Alta**: funcionalidade principal não funciona
- **Média**: comportamento inesperado, mas com alternativa viável
- **Baixa**: erro visual, texto ou pequena inconsistência

---

## Riscos e mitigação

- A API pode estar fora do ar → usar ambiente local ou dados mockados
- Cadastro duplicado → usar dados dinâmicos nos testes
- Alteração de seletores → priorizar o uso de `data-testid`

---

## Entregáveis

- Plano de Teste (este documento)
- Casos de Teste documentados
- Testes automatizados no Cypress
- Relatório de bugs encontrados
- Pipeline CI/CD configurado
- README com instruções do projeto

---

## Responsável

Douglas Sampaio  
QA Junior