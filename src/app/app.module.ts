import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from '../pages/lugar/lugar';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { TerceraPage } from '../pages/tercera/tercera';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { LugaresService } from '../services/lugaresServices';

export const firebaseConfig = {
  apiKey: "AIzaSyAt6vUSXSsMcUCXQ2jA8tTEYfYOeDC9GM4",
  authDomain: "ionicproject-6f2eb.firebaseapp.com",
  projectId: "ionicproject-6f2eb",
  storageBucket: "ionicproject-6f2eb.appspot.com",
  messagingSenderId: "355423996419",
  appId: "1:355423996419:web:2a7db1f170c5e5aedd9c36"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage, 
    TerceraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage, 
    TerceraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresService
  ]
})
export class AppModule {}
