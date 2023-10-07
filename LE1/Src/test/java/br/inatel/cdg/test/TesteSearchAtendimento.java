//TESTE MANUAL
package br.inatel.cdg.test;

import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;

import br.inatel.cdg.Atendimento;
import br.inatel.cdg.SearchAtendimento;
import br.inatel.cdg.AtendimentoService;

public class TesteSearchAtendimento {

    AtendimentoService atendimentoService;
    SearchAtendimento searchAtendimento;

    @Before
    public void setup(){
        //Criando o contexo do meu teste com o MOCK (SERVIÇO MOCK)
        atendimentoService = new MockAtendimentoService();
        searchAtendimento = new SearchAtendimento(atendimentoService);
    }



}
