import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Treino } from 'src/app/model/entities/Treino';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  grupoMusc! : string;
  diaSemana! : string;
  horario! : string;
  duracao! : string;
  treino! : Treino;

  constructor(
    private alertController : AlertController,
    private router : Router,
    private firebase : FirebaseService) { }

  ngOnInit() {
    this.treino = history.state.treino;
    this.grupoMusc = this.treino.grupoMusc;
    this.diaSemana = this.treino.diaSemana;
    this.horario = this.treino.horario;
    this.duracao = this.treino.duracao;
    }
 
  editar(){
    let novo : Treino = new Treino(this.grupoMusc, this.diaSemana);
    novo.horario = this.horario;
    novo.duracao = this.duracao;
    this.firebase.atualizar(novo, this.treino.id)
    .then(() => {this.router.navigate(["/home"]);})
    .catch((error) => {
      console.log(error);
      this.presentAlert("Erro", "Grupo Muscular e Dia da Semana são campos obrigatórios!")
    })
    this.router.navigate(["/home"]);
  }

  excluir(){
    this.presentConfirmAlert("Atenção!", "Deseja excuir esse treino da lista?");
  }

  excluirTreino(){
    this.firebase.deletar(this.treino.id)
    .then(() => {this.router.navigate(["/home"]);});
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

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
  
    await alert.present();
  }
  
}
