import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Treino } from '../entities/Treino';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATHtreino : string = "treino";
  private PATHexercicios : string = "exercicio";

  constructor(private firestore : AngularFirestore) { }

  incluir(treino: Treino) {
    return this.firestore.collection(this.PATHtreino)
    .add({grupoMusc : treino.grupoMusc, diaSemana : treino.diaSemana,
    horario : treino.horario, duracao : treino.duracao});
  }
  mostrarTodos() {
    return this.firestore.collection(this.PATHtreino).snapshotChanges();
  }
 
  atualizar(treino : Treino , id : string){
    return this.firestore.collection(this.PATHtreino).doc(id)
    .update({grupoMusc : treino.grupoMusc, diaSemana : treino.diaSemana,
      horario : treino.horario, duracao : treino.duracao});
  }
  
  deletar(id : string){
    return this.firestore.collection(this.PATHtreino).doc(id)
    .delete();
  }

  mostrarTodosExercicios() {
    return this.firestore.collection(this.PATHexercicios).snapshotChanges();
  }
}
