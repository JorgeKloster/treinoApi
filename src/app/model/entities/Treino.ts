export class Treino{
    private _grupoMusc: string;
    private _diaSemana: string;
    private _horario!: string;
    private _duracao! : string;

    constructor(grupoMusc: string, diaSemana: string) {
        this._grupoMusc = grupoMusc;
        this._diaSemana = diaSemana;
    }

    public get grupoMusc() : string{
        return this._grupoMusc;
    }

    public set muscGroup(grupoMusc : string){
        this._grupoMusc = grupoMusc;
    }

    public get diaSemana() : string{
        return this._diaSemana;
    }

    public set diaSemana(diaSemana : string){
        this._diaSemana = diaSemana;
    }

    public get horario() : string{
        return this._horario;
    }

    public set horario(horario : string){
        this._horario = horario;
    }

    public get duracao() : string{
        return this._duracao;
    }

    public set duracao(duracao : string){
        this._duracao = duracao;
    }

}