package br.inatel.cdg.test;

import java.util.ArrayList;
import br.inatel.cdg.AtendimentoService;

public class MockAtendimentoService implements AtendimentoService {

    @Override
    public String obterInfosAtendimento(String nomeProfessor) {

        if (nomeProfessor == "Yvo"){
            return AtendimentoConst.YVO;
        }else if (nomeProfessor == "Chris"){
            return AtendimentoConst.CHRIS;
        }else if (nomeProfessor == "Renzo"){
            return AtendimentoConst.RENZO;
        }else if(nomeProfessor == "Samuel"){
            return AtendimentoConst.SAMUEL;
        }else if(nomeProfessor == "Marcelo"){
            return AtendimentoConst.MARCELO;
        }else{
            return AtendimentoConst.INEXISTENTE;
        }
    }

    @Override
    public boolean atendimentoExistente(String nomeProfessor) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Yvo");
        list.add("Chris");
        list.add("Renzo");
        list.add("Samuel");
        list.add("Marcelo");

        for (int i=0; i < list.size(); i++){
            if (list.get(i).equals(nomeProfessor) || list.get(i).equals(nomeProfessor)){
                return true;
            }else{
                return false;
            }
        }

        return false;
    }
}
