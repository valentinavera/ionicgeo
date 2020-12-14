import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any = [
    {nombre: 'lugar1', direccion:'calle1', categoria:'1'},
    {nombre: 'lugar2', direccion:'calle2', categoria:'2'}
  ];
  constructor(public navCtrl: NavController) {
  }
  IrAVistaDetalle(){
    this.navCtrl.push(LugarPage, {nombre:{}});
  }
  IrVistaDetalleExistente(lugar){
    this.navCtrl.push(LugarPage, {lugar:lugar});
  }

}
