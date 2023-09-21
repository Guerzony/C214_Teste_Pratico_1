import mocha from 'mocha';
import { expect } from 'chai';
import { verificaName } from '../frontend/JS/index.js';
import { verificaPeriodo } from '../frontend/JS/index.js';
import { verificaPredio } from '../frontend/JS/index.js';
describe('Testes no frontend:',() => {

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
    it('Teste numero do predio 3: ',() => {
        const sala = 20; 
        const respostaVerificacao = verificaPredio(sala);
        expect(respostaVerificacao).to.equal(4);
    })

})