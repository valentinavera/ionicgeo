import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LugaresService } from '../../services/lugaresServices';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  lugar: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public lugaresServices:LugaresService) {
    this.lugar = navParams.data.lugar || {};
  }
  guardarLugar(){
    if(!this.lugar.id){
      this.lugar.id = Date.now();
    }
    this.lugaresServices.createLugar(this.lugar);
    console.log(this.lugar);
    alert('lugar guardado con éxito');
    this.navCtrl.pop();
  }
}
