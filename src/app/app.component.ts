import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';

import { HomePage } from '../pages/home/home';

import { ReportsProvider } from '../providers/reports/reports';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // Componente raíz de navegación
  rootPage: any = null;
  
    constructor(
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public reportsProvider: ReportsProvider,
      public sqlite: SQLite
    ) {
      this.platform.ready().then(() => {
        console.log('Ready');
        this.statusBar.styleDefault();
        // Llamamos al método para crear nuestra base de datos.
        this.createDatabase();
      });
    }
  
    // Creamos un método para crear nuestra base de datos
    private createDatabase(){
      console.log('Create database method');
      this.sqlite.create({
        name: 'reports.db',
        location: 'default' 
      }).then((db) => {
        console.log('Base de datos creado.');
        this.reportsProvider.setDatabase(db);
        return this.reportsProvider.createTable();
      }).then(() =>{
        console.log('Iniciamos el home principal de root');
        this.splashScreen.hide();
        this.rootPage = HomePage;
      }).catch(error =>{
        console.log('error');
        console.error(error);
      });
    }
}

