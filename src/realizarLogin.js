// src/realizarLogin.js

// Array de usuários
const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    senha: "senha123",
    expirado: false
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria@email.com",
    senha: "maria456",
    expirado: false
  },
  {
    id: 3,
    nome: "Carlos Santos",
    email: "carlos@email.com",
    senha: "carlos789",
    expirado: true
  },
  {
    id: 4,
    nome: "Ana Paula",
    email: "ana@email.com",
    senha: "ana123",
    expirado: false
  }
];

// Função de login
function fazerLogin(email, senha) {
  // Busca o usuário pelo email
  const usuario = usuarios.find(user => user.email === email);
  
  // Caso 1: Usuário não encontrado
  if (!usuario) {
    return "Credenciais incorretas";
  }
  
  // Caso 2: Credencial expirada
  if (usuario.expirado === true) {
    return "Renove suas credenciais";
  }
  
  // Caso 3: Senha incorreta
  if (usuario.senha !== senha) {
    return "Credenciais incorretas";
  }
  
  // Caso 4: Sucesso no login
  return "Login realizado com sucesso";
}

// Exporta a função
module.exports = fazerLogin;