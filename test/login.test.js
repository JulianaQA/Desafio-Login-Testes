// test/login.test.js
const fazerLogin = require('../src/realizarLogin');
const { expect } = require('chai');

describe('Testes da função fazerLogin', () => {
  
  // Teste 1: Sucesso no login
  it('Deve retornar sucesso quando email e senha estão corretos e não expirados', () => {
    const resultado = fazerLogin('joao@email.com', 'senha123');
    expect(resultado).to.equal('Login realizado com sucesso');
  });
  
  // Teste 2: Credencial expirada
  it('Deve solicitar renovação quando a credencial está expirada', () => {
    const resultado = fazerLogin('carlos@email.com', 'carlos789');
    expect(resultado).to.equal('Renove suas credenciais');
  });
  
  // Teste 3: Usuário não encontrado
  it('Deve informar credenciais incorretas quando email não existe', () => {
    const resultado = fazerLogin('inexistente@email.com', 'qualquer123');
    expect(resultado).to.equal('Credenciais incorretas');
  });
  
  // Teste 4: Senha incorreta para o usuário encontrado
  it('Deve informar credenciais incorretas quando a senha está errada', () => {
    const resultado = fazerLogin('maria@email.com', 'senhaErrada');
    expect(resultado).to.equal('Credenciais incorretas');
  });
});