import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { LugaresService } from '../../services/lugaresServices';
import { LugarPage } from '../lugar/lugar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any = [];
  constructor(public navCtrl: NavController, public lugaresService:LugaresService,
    public alertCtrl:AlertController, public loadingCtrl:LoadingController) {
    this.lugaresService.getLugares().valueChanges()
    .subscribe((lugaresFB)=>{
      this.lugares= lugaresFB;
    });
  }
  IrAVistaDetalle(){
    this.navCtrl.push(LugarPage, {nombre:{}});
  }
  IrVistaDetalleExistente(lugar){
    this.navCtrl.push(LugarPage, {lugar:lugar});
  }
  deleteLugar(lugar){
    const confirm = this.alertCtrl.create({
      title: 'Eliminar lugar',
      message: '¿Estás seguro de eliminar este lugar?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Eliminar clicked');
            this.lugaresService.deleteLugar(lugar)
            .then(() => {
              this.presentLoading();
            });
          }
        }
      ]
    });
    confirm.present();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Por favor, espera...",
      duration: 1000
    });
    loader.present();
  
  }

}
