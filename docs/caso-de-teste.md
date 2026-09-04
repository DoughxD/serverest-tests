# Casos de Teste — Serverest

---
## UI — Cadastro

### TC-UI-001 — Cadastro com sucesso (Administrador)

**Pré-condição:** Usuário administrador deve ser cadastrado no banco de dados.

**Dados:**
- nome: Fulano da Silva  
- Email: admin@qa.com  
- Senha: teste123  

**Passos:**  
1. Acessar a página de Cadastro
2. Inserir um nome de usuário no campo "Digite seu nome"  
3. Inserir o email no campo "Digite seu Email"  
4. Inserir a senha no campo "Digite seu Senha"
5. Marcar a check-box como administrador
6. Clicar no botão "Cadastrar"

**Resultado esperado:** cadastro efetuado com sucesso. Usuário redirecionado para a tela de administração e mensagem de boas-vindas exibida.

### TC-UI-002 — Cadastro com sucesso (Usuário)

**Pré-condição:** o Administrador deve ser cadastrado no banco de dados.

**Dados:**  
- nome: Fulano da Silva 
- Email: user@qa.com  
- Senha: teste123  

**Passos:**  
1. Acessar a página de Cadastro
2. Inserir um nome de usuário no campo "Digite seu nome"  
3. Inserir o email no campo "Digite seu Email"  
4. Inserir a senha no campo "Digite seu Senha"
5. Clicar no botão "Cadastrar"

**Resultado esperado:** cadastro efetuado com sucesso. Usuário redirecionado para a Home Page / Vitrine de Produtos e mensagem de boas-vindas exibida.

## UI — Login

### TC-UI-003 — Login com sucesso (Administrador)

**Pré-condição:** Usuário administrador cadastrado no banco de dados.

**Dados:**  
- Email: admin@qa.com  
- Senha: teste123  

**Passos:**  
1. Acessar a página de login  
2. Inserir o email no campo "Email"  
3. Inserir a senha no campo "Senha"  
4. Clicar no botão "Entrar"  

**Resultado esperado:** Login efetuado com sucesso. Usuário redirecionado para o Dashboard Administrativo e mensagem de boas-vindas exibida.

---

### TC-UI-004 — Login com sucesso (Usuário comum)

**Pré-condição:** Usuário comum cadastrado no banco de dados.

**Dados:**  
- Email: user@qa.com  
- Senha: teste123  

**Passos:**  
1. Acessar a página de login  
2. Inserir o email no campo "Email"  
3. Inserir a senha no campo "Senha"  
4. Clicar no botão "Entrar"  

**Resultado esperado:** Login efetuado com sucesso. Usuário redirecionado para a Home Page / Vitrine de Produtos e mensagem de boas-vindas exibida.

---

### TC-UI-005 — Falha no login — Credenciais inválidas

**Pré-condição:** Nenhuma.

**Dados:**  
- Email: errado@qa.com  
- Senha: senhaerrada  

**Passos:**  
1. Acessar a página de login  
2. Inserir o email  
3. Inserir a senha  
4. Clicar em "Entrar"  

**Resultado esperado:** Login não realizado. Sistema permanece na tela de login e exibe a mensagem "Email e/ou senha inválidos".

---

### TC-UI-006 — Validação de campos obrigatórios vazios

**Pré-condição:** Nenhuma.

**Dados:**  
- Email: (vazio)  
- Senha: (vazio)  

**Passos:**  
1. Acessar a página de login  
2. Deixar os campos "Email" e "Senha" em branco  
3. Clicar no botão "Entrar"  

**Resultado esperado:** Login não realizado. Sistema exibe as mensagens "Email é obrigatório" e "Password é obrigatório".

---

## API — Login

### TC-API-001 — Autenticação com sucesso (Status 200)

**Pré-condição:** Usuário válido cadastrado no sistema.

**Payload:**  
```json
{
  "email": "valido@qa.com",
  "password": "123"
}

#teste CI