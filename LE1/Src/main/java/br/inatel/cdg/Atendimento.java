package br.inatel.cdg;

public class Atendimento {

    private String nomePROFESSOR;
    private String HORARIO;
    private String PERIODO;
    private int SALA;
    //private int[] PREDIO;

    public Atendimento(String nomePROFESSOR, String HORARIO, String PERIODO, int SALA) {
        this.nomePROFESSOR = nomePROFESSOR;
        this.HORARIO = HORARIO;
        this.PERIODO = PERIODO;
        this.SALA = SALA;
    }

    public String getNomePROFESSOR() {
        return nomePROFESSOR;
    }

    public String getHORARIO() {
        return HORARIO;
    }

    public String getPERIODO() {
        return PERIODO;
    }

    public int getSALA() {
        return SALA;
    }

    //MÉTODO QUE CALCULA E RETORNA O PRÉDIO ONDE O ATENDIMENTO OCORRE
    public int getPREDIO(int sala) {
        int predio;
        if( sala >= 1 && sala <= 5 ){
            predio = 1;
            return predio;
        }
        else if( sala >= 6 && sala <= 10 ){
            predio = 2;
            return predio;
        }
        else if( sala >= 11 && sala <= 15 ){
            predio = 3;
            return predio;
        }
        else if( sala >= 16 && sala <= 20 ){
            predio = 4;
            return predio;
        }
        else if( sala >= 21 && sala <= 25 ){
            predio = 5;
            return predio;
        }
        else{
            predio = 6;
            return predio;
        }
    }
}
