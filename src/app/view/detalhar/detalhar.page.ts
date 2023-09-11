import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercicio } from 'src/app/model/entities/Exercicio';
import { Treino } from 'src/app/model/entities/Treino';
import { ExerciciosService } from 'src/app/model/services/exercicios.service';
import { TreinoService } from 'src/app/model/services/treino.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  indice! : number;
  grupoMusc! : string;
  diaSemana! : string;
  horario! : string;
  duracao! : string;
  treino! : Treino;
  exercicios! : Exercicio;
  exercicio! : string;
  series! : number;
  repeticoes! : number;

  public listaDeExercicios : Exercicio[] = []

  constructor(
    private actRoute : ActivatedRoute,
    private treinoService : TreinoService,
    private router : Router,
    private exerciciosService : ExerciciosService
  ) { }

  ngOnInit() {
    this,this.actRoute.params.subscribe((parametros) => {
      if(parametros["indice"]){
        this.indice = parametros["indice"];
      }
    })
    this.treino = this.treinoService.mostrarPorIndice(this.indice);
    this.grupoMusc = this.treino.grupoMusc;
    this.diaSemana = this.treino.diaSemana;
    this.horario = this.treino.horario;
    this.duracao = this.treino.duracao;
    this.listaDeExercicios = this.exerciciosService.mostrarTodos();
  }

  editarExcluir(){
    this.router.navigate(["/editar", this.indice]);
  }
  
}
