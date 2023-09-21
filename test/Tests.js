import pkg from 'supertest';
const request = pkg;
import app from '../backend/src/server.js';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { verificaName } from '../backend/controllers/infoProfController.js';
import { verificaPeriodo } from '../backend/controllers/infoProfController.js';
import { verificaPredio } from '../backend/controllers/infoProfController.js';

chai.use(chaiHttp);
chai.should(); // Configura should para poder ser usado

describe('Testes das rotas e Informacoes dos Professores:', function() {
  //Teste de busca das tasks
  let id;
  this.timeout(5000);
  it('Teste nome igual: ',() => {
    const nome1 = 'Jose Ataliba'; 
    const nome2 = 'Jose Ataliba';
    const respostaVerificacao = verificaName(nome1, nome2);
    expect(respostaVerificacao).to.equal(true);
})

it('Teste nome diferente: ',() => {
    const nome1 = 'Jose Ataliba'; 
    const nome2 = 'Jose Candido';
    const respostaVerificacao = verificaName(nome1, nome2);
    expect(respostaVerificacao).to.equal(false);
})
it('Teste periodo Integral: ',() => {
    const periodo = 'Integral'; 
    const respostaVerificacao = verificaPeriodo(periodo);
    expect(respostaVerificacao).to.equal(true);
})
it('Teste periodo Noturno: ',() => {
    const periodo = 'Noturno'; 
    const respostaVerificacao = verificaPeriodo(periodo);
    expect(respostaVerificacao).to.equal(true);
})
it('Teste periodo incorreto: ',() => {
    const periodo = 'Matutino'; 
    const respostaVerificacao = verificaPeriodo(periodo);
    expect(respostaVerificacao).to.equal(false);
})
it('Teste numero do predio 2: ',() => {
    const sala = 6; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(2);
})
it('Teste numero do predio 3: ',() => {
    const sala = 15; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(3);
})
it('Teste numero do predio 4: ',() => {
    const sala = 20; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(4);
})
it('Teste numero do predio 5: ',() => {
    const sala = 25; 
    const respostaVerificacao = verificaPredio(sala);
    expect(respostaVerificacao).to.equal(5);
})
  it('/GET', async () => { 
  try{
    const infos = [];
    const response = await request(app)
    .get('/info');
    response.should.have.status(200);
    expect(infos).to.eql(response.body);
  }catch(err) {
    console.log("Erro: " + err);
  }
  });

  //Teste de criação de tarefa
  it('/POST', async () => {
    const newTarefa = {
      "nomeDoProfessor": "Joao Cleber Nino",
      "horadioDeAtendimento": "10:30",
      "periodo": "Integral",
      "sala": 1,
      "predio": [1,2,3,4,5]
    }; 
    try{
    const response = await request(app)
    .post('/info')
    .send(newTarefa)
    id = response.body["_id"];
    response.should.have.status(201);
    expect(newTarefa["nomeDoProfessor"]).to.eql(response.body["nomeDoProfessor"]);
    }catch(err) {
    console.log("Erro: " + err);
    id = response.body["_id"];
    }
  });

  //Teste de update de tarefa
  it('/PUT', async () => { 
    let infoUpdate = {
        "horadioDeAtendimento": "9:00",
    }
    const resposta = "Info atualizada com sucesso!";
    try{  
      const response = await request(app)
      .put(`/info/${id}`)
      .send(infoUpdate)
      response.should.have.status(200);
      expect(resposta).to.eql(response.text);
    }catch(error){
      console.log("Erro:" + error);
    }
  });

  //Teste de delete de tarefa
  it('/DELETE', async () => {
    let infoDelete = {
      "nomeDoProfessor": "Joao Cleber Nino",
  }
  const resposta = 'Informacao  excluida com sucesso!';
  try{
  const response = await request(app)
  .delete(`/info/${id}`)
  .send(infoDelete)  
  response.should.have.status(200);
  expect(resposta).to.eql(response.text);
  }catch(error){
    console.log("Erro:" + error);
  }
})
});