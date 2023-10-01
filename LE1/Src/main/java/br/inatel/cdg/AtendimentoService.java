package br.inatel.cdg;

public interface AtendimentoService {

    //MÉTODO PRINCIPAL (que obtém  informações do atendimento externamente - "servidor")
    public String obterInfosAtendimento(String nomeProfessor);

    public boolean atendimentoExistente(String nomeProfessor);

}
