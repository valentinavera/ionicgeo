import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class LugaresService{
    constructor(public afDB:AngularFireDatabase){

    }
    public getLugares(){
        return this.afDB.list('/lugares/');
    }
    public getLugar(id: any){
        return this.afDB.object('/lugares/' + id);
    }
    public createLugar(lugar:any){
        return this.afDB.database.ref('/lugares/' + lugar.id).set(lugar);
    }
    public editLugar(lugar:any){
        return this.afDB.database.ref('/lugares/' + lugar.id).set(lugar);
    }
    public deleteLugar(lugar:any){
        return this.afDB.database.ref('/lugares/' + lugar.id).remove();
    }
}