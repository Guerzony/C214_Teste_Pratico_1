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
    /**************[TESTES P/ CENÁRIOS DE SUCESSO]**************/
    @Test
    public void testeSearchYvo(){
        Atendimento yvo = searchAtendimento.obterInfosAtendimento("Yvo");
        assertEquals("Yvo", yvo.getNomePROFESSOR());
        assertEquals("20h00", yvo.getHORARIO());
        assertEquals("Noturno", yvo.getPERIODO());
        assertEquals(20, yvo.getSALA());
        assertEquals(4, yvo.getPREDIO(yvo.getSALA()));
    }

    @Test
    public void testeSearchChris(){
        Atendimento chris = searchAtendimento.obterInfosAtendimento("Chris");
        assertEquals("Chris", chris.getNomePROFESSOR());
        assertEquals("19h00", chris.getHORARIO());
        assertEquals("Noturno", chris.getPERIODO());
        assertEquals(19, chris.getSALA());
        assertEquals(4, chris.getPREDIO(chris.getSALA()));
    }

    @Test
    public void testeSearchRenzo(){
        Atendimento renzo = searchAtendimento.obterInfosAtendimento("Renzo");
        assertEquals("Renzo", renzo.getNomePROFESSOR());
        assertEquals("18h00", renzo.getHORARIO());
        assertEquals("Noturno", renzo.getPERIODO());
        assertEquals(18, renzo.getSALA());
        assertEquals(4, renzo.getPREDIO(renzo.getSALA()));
    }

    @Test
    public void testeSearchSamuel(){
        Atendimento samuel = searchAtendimento.obterInfosAtendimento("Samuel");
        assertEquals("Samuel", samuel.getNomePROFESSOR());
        assertEquals("13h00", samuel.getHORARIO());
        assertEquals("Integral", samuel.getPERIODO());
        assertEquals(13, samuel.getSALA());
        assertEquals(3, samuel.getPREDIO(samuel.getSALA()));
    }

    @Test
    public void testeSearchMarcelo(){
        Atendimento marcelo = searchAtendimento.obterInfosAtendimento("Marcelo");
        assertEquals("Marcelo", marcelo.getNomePROFESSOR());
        assertEquals("10h00", marcelo.getHORARIO());
        assertEquals("Integral", marcelo.getPERIODO());
        assertEquals(10, marcelo.getSALA());
        assertEquals(2, marcelo.getPREDIO(marcelo.getSALA()));
    }

    @Test
    public void testeSearchInexistente(){
        Atendimento inexistente = searchAtendimento.obterInfosAtendimento("Inexistente");
        assertEquals("Inexistente", inexistente.getNomePROFESSOR());
        assertEquals("NULL", inexistente.getHORARIO());
        assertEquals("NULL", inexistente.getPERIODO());
        assertEquals(0, inexistente.getSALA());
        assertEquals(0, inexistente.getPREDIO(inexistente.getSALA()));
    }

    @Test
    public void testeSALAMarcelo() {
        Atendimento marcelo = searchAtendimento.obterInfosAtendimento("Marcelo");
        assertEquals(2, marcelo.getPREDIO(marcelo.getSALA()));

    }

    @Test
    public void testeSALAChris() {
        Atendimento chris = searchAtendimento.obterInfosAtendimento("Chris");
        assertEquals(4, chris.getPREDIO(chris.getSALA()));

    }

    @Test
    public void testeSALAYvo() {
        Atendimento yvo = searchAtendimento.obterInfosAtendimento("Yvo");
        assertEquals(4, yvo.getPREDIO(yvo.getSALA()));
    }

    @Test
    public void testeSALARenzo() {
        Atendimento renzo = searchAtendimento.obterInfosAtendimento("Renzo");
        assertEquals(4, renzo.getPREDIO(renzo.getSALA()));
    }


    /**************[TESTES P/ CENÁRIOS DE FALHAS]**************/

    @Test
    public void testeSearchPhyll(){
        Atendimento phyll = searchAtendimento.obterInfosAtendimento("Phyll");
        assertEquals("Phyll", phyll.getNomePROFESSOR());
    }

    @Test
    public void testeSearchSoned(){
        Atendimento soned = searchAtendimento.obterInfosAtendimento("Soned");
        assertEquals("Soned", soned.getNomePROFESSOR());
    }

    @Test
    public void testeSearchSAMUEL(){
        Atendimento gustavo = searchAtendimento.obterInfosAtendimento("SAMUEL");
        assertEquals("SAMUEL", gustavo.getNomePROFESSOR());
    }

    @Test
    public void testeSearchMARCELO(){
        Atendimento gustavo = searchAtendimento.obterInfosAtendimento("MARCELO");
        assertEquals("MARCELO", gustavo.getNomePROFESSOR());
    }

    @Test
    public void testeSearchGustavo(){
        Atendimento gustavo = searchAtendimento.obterInfosAtendimento("Gustavo");
        assertEquals("Gustavo", gustavo.getNomePROFESSOR());
    }

    @Test
    public void testeSALA20noPREDIO1() {
        Atendimento yvo = searchAtendimento.obterInfosAtendimento("Yvo");
        assertEquals(1, yvo.getPREDIO(yvo.getSALA()));
        //expected 1, mas o prédio é 4 -> SALA YVO = 20
    }

    @Test
    public void testeSALA18noPREDIO3() {
        Atendimento renzo = searchAtendimento.obterInfosAtendimento("Renzo");
        assertEquals(3, renzo.getPREDIO(renzo.getSALA()));
        //expected 3, mas o prédio é 4 -> SALA RENZO = 18
    }

    @Test
    public void testeSALA30noPREDIO1() {
        Atendimento renzo = searchAtendimento.obterInfosAtendimento("Renzo");
        assertEquals(1, renzo.getPREDIO(renzo.getSALA()));
        //expected 3, mas o prédio é 4 -> SALA RENZO = 18
    }
}
