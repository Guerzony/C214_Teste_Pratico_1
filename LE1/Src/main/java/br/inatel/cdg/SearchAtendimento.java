package br.inatel.cdg;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class SearchAtendimento {

    AtendimentoService atendimentoService;

    public SearchAtendimento(AtendimentoService atendimentoService) {
        this.atendimentoService = atendimentoService;
    }

    public Atendimento obterInfosAtendimento(String nomeProfessor){
        //id = 10 -> buscando informações do atendimento de id 10
        //atendimentoJSON É UMA STRING QUE RETORNOU DO SERVIDOR!
        String atendimentoJSON = atendimentoService.obterInfosAtendimento(nomeProfessor);

        //jsonObject é um objeto JSON feito A PARTIR DA STRING DE RETORNO
        JsonObject jsonObject = JsonParser.parseString(atendimentoJSON).getAsJsonObject();

        return new Atendimento(jsonObject.get("nomeDoProfessor").getAsString(),
                jsonObject.get("horarioDeAtendimento").getAsString(),
                jsonObject.get("periodo").getAsString(),
                jsonObject.get("sala").getAsInt());
        //jsonObject.get("predio").getAsInt());
    }

    public boolean verificarArrayListExistente(String nomeProfessor){
        boolean atendimentoExistente = atendimentoService.atendimentoExistente(nomeProfessor);

        if (atendimentoExistente){
            return true;
        }
        else{
            return false;
        }
    }
}
