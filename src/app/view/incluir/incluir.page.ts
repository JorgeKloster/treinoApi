import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Treino } from 'src/app/model/entities/Treino';
import { TreinoService } from 'src/app/model/services/treino.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.page.html',
  styleUrls: ['./incluir.page.scss'],
})
export class IncluirPage implements OnInit {

  public grupoMusc! : string;
  public diaSemana! : string;
  public horario! : string;
  public duracao! : string;

  constructor(private router : Router,
    private treinoService : TreinoService) { }

  ngOnInit() {
  }

  incluir() {
    let novo : Treino = new Treino(this.grupoMusc, this.diaSemana);
    novo.horario = this.horario;
    novo.duracao = this.duracao;
    this.treinoService.incluir(novo);
    this.router.navigate(["/home"]);
  }

}
