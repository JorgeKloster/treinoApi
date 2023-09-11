import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Treino } from 'src/app/model/entities/Treino';
import { TreinoService } from 'src/app/model/services/treino.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  indice! : number;
  grupoMusc! : string;
  diaSemana! : string;
  horario! : string;
  duracao! : string;
  treino! : Treino;

  constructor(
    private actRoute : ActivatedRoute,
    private treinoService : TreinoService,
    private alertController : AlertController,
    private router : Router) { }

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
  }

  editar(){
    let novo : Treino = new Treino(this.grupoMusc, this.diaSemana);
    novo.horario = this.horario;
    novo.duracao = this.duracao;
    this.treinoService.atualizar(this.indice, novo);
    this.router.navigate(["/home"]);
  }

  excluir(){
    this.presentConfirmAlert("Atenção!", "Deseja excuir esse treino da lista?");
  }

  excluirTreino(){
    this.treinoService.deletar(this.indice);
    this.router.navigate(["/home"]);
  }

  async presentConfirmAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Lista de Treinos',
      subHeader: subHeader,
      message: message,
      buttons: [
        {text:'Cancelar', role: 'cancelar', handler: ()=>{console.log("Cancelou")}},
        {text:'Confirmar', role: 'confirmar', handler: (acao)=>{this.excluirTreino()}}
      ],
    });
    await alert.present();
  }
  
}
