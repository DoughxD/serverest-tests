# Postman — Serverest API

Coleção de testes da API Serverest exportada do Postman.

## Arquivos

- `serverest.postman.json` — todas as requisições

## Como usar

1. Abra o Postman
2. Clique em **Import**
3. Selecione o arquivo `.json`
4. A coleção vai aparecer na barra lateral

## Variáveis

A collection já vem com as variáveis internas:
- `user_token` — token gerado no login
- `user_id` — ID do usuário criado
- `product_id` — ID do produto criado
- `cart_id` — ID do carrinho criado

## Ordem dos testes

1. Login → pega o token
2. Usuários → cria um e pega o ID
3. Produtos → cria um e pega o ID
4. Carrinhos → testa fluxo de compra

## Documentação

- [Serverest API](https://serverest.dev)