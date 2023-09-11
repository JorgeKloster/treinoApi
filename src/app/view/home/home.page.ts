import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Treino } from 'src/app/model/entities/Treino';
import { TreinoService } from 'src/app/model/services/treino.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaDeTreinos : Treino[] = []

  constructor(
    private treinoService : TreinoService,
    private router : Router
    ) {
    this.listaDeTreinos = this.treinoService.mostrarTodos();
  }

  irParaIncluir(){
    this.router.navigate(["/incluir"]);
  }

  detalhar(indice : number){
    this.router.navigate(["/detalhar", indice]);
  }

}
