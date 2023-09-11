import { Injectable } from '@angular/core';
import { Exercicio } from '../entities/Exercicio';

@Injectable({
  providedIn: 'root'
})
export class ExerciciosService {
  public listaDeExercicios : Exercicio [] = [];

  constructor() {
    let ex1 : Exercicio = new Exercicio("Pernas","Agachamento");
    ex1.series = 4;
    ex1.repeticoes = 12;
    let ex2 : Exercicio = new Exercicio("Pernas","Cadeira Flexora");
    ex2.series = 4;
    ex2.repeticoes = 8;
    let ex3 : Exercicio = new Exercicio("Pernas","Terra Sumô");
    ex3.series = 3;
    ex3.repeticoes = 10;
    let ex4 : Exercicio = new Exercicio("Costas","Puxada Alta");
    ex4.series = 4;
    ex4.repeticoes = 12;
    let ex5 : Exercicio = new Exercicio("Costas","Remada Baixa");
    ex5.series = 4;
    ex5.repeticoes = 8;
    let ex6 : Exercicio = new Exercicio("Costas","Remada Cavalinho");
    ex6.series = 3;
    ex6.repeticoes = 10;
    let ex7 : Exercicio = new Exercicio("Peito","Supino Reto");
    ex7.series = 4;
    ex7.repeticoes = 12;
    let ex8 : Exercicio = new Exercicio("Peito","Supino Inclinado");
    ex8.series = 4;
    ex8.repeticoes = 8;
    let ex9 : Exercicio = new Exercicio("Peito","Crucifixo");
    ex9.series = 3;
    ex9.repeticoes = 10;
    let ex10 : Exercicio = new Exercicio("Braço","Desenvolvimento");
    ex10.series = 4;
    ex10.repeticoes = 12;
    let ex11 : Exercicio = new Exercicio("Braço","Rosca Direta");
    ex11.series = 4;
    ex11.repeticoes = 10;
    let ex12 : Exercicio = new Exercicio("Braço","Tríceps Corda");
    ex12.series = 3;
    ex12.repeticoes = 8;
    this.listaDeExercicios.push(ex1);
    this.listaDeExercicios.push(ex2);
    this.listaDeExercicios.push(ex3);
    this.listaDeExercicios.push(ex4);
    this.listaDeExercicios.push(ex5);
    this.listaDeExercicios.push(ex6);
    this.listaDeExercicios.push(ex7);
    this.listaDeExercicios.push(ex8);
    this.listaDeExercicios.push(ex9);
    this.listaDeExercicios.push(ex10);
    this.listaDeExercicios.push(ex11);
    this.listaDeExercicios.push(ex12);
  }

  mostrarTodos() : Exercicio[]{
    return this.listaDeExercicios;
  }

}
