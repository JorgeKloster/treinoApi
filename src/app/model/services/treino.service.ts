import { Injectable } from '@angular/core';
import { Treino } from '../entities/Treino';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {
  public listaDeTreinos : Treino [] = [];

  constructor() {
    let t1 : Treino = new Treino("Pernas","Segunda-Feira");
    t1.horario = "2019-04-22T08:45:00";
    t1.duracao = "2019-04-22T02:30:00";
    let t2 : Treino = new Treino("Costas","Terça-Feira");
    t2.horario = "2019-04-22T08:45:00";
    t2.duracao = "2019-04-22T02:30:00";
    let t3 : Treino = new Treino("Braço","Quarta-Feira");
    t3.horario = "2019-04-22T08:45:00";
    t3.duracao = "2019-04-22T02:30:00";
    let t4 : Treino = new Treino("Peito","Quinta-Feira");
    t4.horario = "2019-04-22T08:45:00";
    t4.duracao = "2019-04-22T02:30:00";
    this.listaDeTreinos.push(t1);
    this.listaDeTreinos.push(t2);
    this.listaDeTreinos.push(t3);
    this.listaDeTreinos.push(t4);
  }

  incluir(treino: Treino) {
    this.listaDeTreinos.push(treino);
  }
  mostrarTodos() :Treino[]{
    return this.listaDeTreinos;
  }
  mostrarPorIndice(indice : number) : Treino{
    return this.listaDeTreinos[indice];
  }
  atualizar(indice : number , novo: Treino){
    this.listaDeTreinos[indice] = novo;
  }
  deletar(indice : number){
    this.listaDeTreinos.splice(indice,1);
  }

}
