import pkg from 'supertest';
const request = pkg;
import app from '../backend/src/server.js';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { verificaName } from '../backend/controllers/infoProfController.js';
import { verificaPeriodo } from '../backend/controllers/infoProfController.js';
import { verificaPredio } from '../backend/controllers/infoProfController.js';
import { verificaHorario } from '../backend/controllers/infoProfController.js';

chai.use(chaiHttp);
chai.should(); // Configura should para poder ser usado

describe('(CENARIO DE SUCESSO) Testes das rotas e Informacoes dos Professores:', function() {
  //Teste de busca das tasks
  this.timeout(5000);

  it('Teste nome diferente',() => {
    const nome1 = 'Jose Ataliba'; 
    const nome2 = 'Jose Candido';
    const respostaVerificacao = verificaName(nome1, nome2);
    expect(respostaVerificacao).to.equal(false);
  });
  
  it('Teste periodo Integral',() => {
    const periodo = 'Integral'; 
    const respostaVerificacao = verificaPeriodo(periodo);
    expect(respostaVerificacao).to.equal(true);
  });
  
  it('Teste periodo Noturno',() => {
    const periodo = 'Noturno'; 
    const respostaVerificacao = verificaPeriodo(periodo);
    expect(respostaVerificacao).to.equal(true);
  });

  it('Teste numero do predio 1',() => {
    const sala = 1; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(1);
  });

  it('Teste numero do predio 2',() => {
    const sala = 6; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(2);
  });

  it('Teste numero do predio 3',() => {
    const sala = 15; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(3);
  });

  it('Teste numero do predio 4',() => {
    const sala = 20; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(4);
  });

  it('Teste numero do predio 5',() => {
    const sala = 25; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(5);
  });

  it('Teste horario de funcionamento correto',() => {
    const hora = 8;
    const minutos = 30;
    const resposta = true;   
    const respostaVerificacao = verificaHorario( hora, minutos );
    expect(respostaVerificacao).to.equal(resposta);
  });
  it('Teste Horario de funcionamento correto',() => {
    const hora = 18;
    const minutos = 59;
    const resposta = true;   
    const respostaVerificacao = verificaHorario( hora, minutos );
    expect(respostaVerificacao).to.equal(resposta);
  });

});

describe('(CENARIO DE FALHA) Testes das rotas e Informacoes dos Professores:', function() {
  it('Teste nome igual',() => {
    const nome1 = 'Jose Ataliba'; 
    const nome2 = 'Jose Ataliba';
    const respostaVerificacao = verificaName(nome1, nome2);
    expect(respostaVerificacao).to.equal(true);
  });

  it ('Teste nome com numero',()=>{
    const nome1 = '1111Nathan';
    const nome2 = 'renan';
    const respostaVerificacao = verificaName(nome1, nome2);
    expect(respostaVerificacao).to.equal(false);
  });

  it('Teste periodo incorreto',() => {
    const periodo = 'Matutino'; 
    const respostaVerificacao = verificaPeriodo(periodo);
    expect(respostaVerificacao).to.equal(false);
  });

  it('Teste numero do predio fora do determinado',() => {
    const sala = 40; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(6);
  });

  it('Teste numero do predio com string',() => {
    const sala = 'Nathan'; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(6);
  });

  it('Teste horario de funcionamento errado',() => {
    const hora = 19;
    const minutos = 30;
    const resposta = false;   
    const respostaVerificacao = verificaHorario( hora, minutos );
    expect(respostaVerificacao).to.equal(resposta);
  });

  it('Teste Horario de funcionamento errado',() => {
    const hora = 6;
    const minutos = 30;
    const resposta = false;   
    const respostaVerificacao = verificaHorario( hora, minutos );
    expect(respostaVerificacao).to.equal(resposta);
  });

  it('Teste Horario de funcionamento errado',() => {
    const hora = 'dezoite';
    const minutos = 'trinta';
    const resposta = false;   
    const respostaVerificacao = verificaHorario( hora, minutos );
    expect(respostaVerificacao).to.equal(resposta);
  });

});