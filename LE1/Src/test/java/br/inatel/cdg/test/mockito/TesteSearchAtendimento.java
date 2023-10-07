package br.inatel.cdg.test.mockito;

import org.junit.Test;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import static org.junit.Assert.*;

import br.inatel.cdg.Atendimento;
import br.inatel.cdg.SearchAtendimento;
import br.inatel.cdg.AtendimentoService;
import br.inatel.cdg.test.AtendimentoConst;
import static org.junit.Assert.assertEquals;


@RunWith(MockitoJUnitRunner.class)
public class TesteSearchAtendimento {

    @Mock
    private AtendimentoService atendimentoService;
    private SearchAtendimento searchAtendimento;

    @Before
    public void setup(){
        searchAtendimento = new SearchAtendimento(atendimentoService);
    }


    /*****************************************[TESTES P/ CENÁRIOS DE SUCESSO]*****************************************/
    @Test
    public void testeSearchYvo(){
        Mockito.when(atendimentoService.obterInfosAtendimento("Yvo")).thenReturn(AtendimentoConst.YVO);
        Atendimento yvo = searchAtendimento.obterInfosAtendimento("Yvo");
        assertEquals("Yvo", yvo.getNomePROFESSOR());
    }


    /*****************************************[TESTES P/ CENÁRIOS DE FALHAS]*****************************************/
    @Test
    public void testeSearchPhyll(){
        Mockito.when(atendimentoService.obterInfosAtendimento("Phyll")).thenReturn(AtendimentoConst.CHRIS);
        Atendimento phyll = searchAtendimento.obterInfosAtendimento("Phyll");
        assertNotEquals("Yvo", phyll.getNomePROFESSOR());

    }

}
