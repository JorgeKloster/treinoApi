import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Treino } from 'src/app/model/entities/Treino';
import { FirebaseService } from 'src/app/model/services/firebase.service';

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
    private firebase : FirebaseService,
    private alertController : AlertController) { }

  ngOnInit() {
  }

  incluir() {
    let novo : Treino = new Treino(this.grupoMusc, this.diaSemana);
    novo.horario = this.horario;
    novo.duracao = this.duracao;
    this.firebase.incluir(novo)
    .then(()=> this.router.navigate(["/home"]))
    .catch((error) => {
      console.log(error);
      this.presentAlert("erro", "Grupo Muscular e Dia da Semana são campos obrigatórios");
    })
    this.router.navigate(["/home"]);
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
