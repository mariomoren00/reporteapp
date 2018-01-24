import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Events } from 'ionic-angular';


import { ReportformPage } from '../reportform/reportform';
import { ReportformeditPage } from '../reportformedit/reportformedit';

import { ReportsProvider } from '../../providers/reports/reports';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  reports = [];

  constructor(
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public events: Events,    
    private reportsProvider: ReportsProvider  ) {
      console.log('Constructor');
      this.getAllReports();    
      events.subscribe('listadd', (reports) => {
        console.log('Events:');
        console.log(reports);
        this.reports = this.reports.concat(reports);
        console.log(this.reports);
      });
      
      events.subscribe('listUpdate', (reports, index) => {
        console.log('Events:');
        console.log(reports);

        console.log('index:',index);
        this.reports.splice(index, 1);
        this.reports = this.reports.concat(reports);
        console.log(this.reports);
      });
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }
  
  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  getAllReports(){
    console.log('getAll');    
    this.reportsProvider.getAll().then(reports => {
      this.reports = reports;
      console.log(this.reports);
    }).catch( error => {
      console.error( error );
    });
  }

  create(){
    console.log('Create');
    this.navCtrl.push(ReportformPage);
  }

  action(item: any, index){
    console.log(item);
    console.log(index);
    console.log('Action');
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Reporte',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.reportsProvider.delete(item).then(response => {
              console.log(response);
              this.reports.splice(index, 1);              
              //this.getAllReports();                  
            }).catch(error => {
              console.log(error);
            })
          }
        },{
          text: 'Editar',
          handler: () => {
            console.log('Archive clicked');
            this.navCtrl.push(ReportformeditPage, {
              'index': index, 
              'id':item.id, 
              'titulo':item.titulo, 
              'descripcion':item.descripcion, 
              'imagen':item.imagen
            });
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
