import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Events } from 'ionic-angular';

import { ReportsProvider } from '../../providers/reports/reports';

/**
 * Generated class for the ReportformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportform',
  templateUrl: 'reportform.html',
})
export class ReportformPage {

  todo = {};
  report = {};
  img = {};
  photo : string = "";
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    public events: Events,        
    private reportsProvider: ReportsProvider) {
  }

  options : CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    saveToPhotoAlbum: true
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportformPage');
  }

  takePhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo = base64Image;
      this.img = { 'imagen': this.photo };
    }, (err) => {
        console.log(err);
      }
    );
  }

  logForm() {
    console.log(this.todo)
    this.report = Object.assign(this.todo, this.img);
    console.log(this.report)
    this.reportsProvider.create(this.report).then(response => {
      console.log(response.insertId);
      this.reportsProvider.getById(response.insertId).then(response =>{
        this.events.publish('listadd', response);      
        this.navCtrl.pop();
      }).catch(error =>{
        console.log(error);
      });
    }).catch( error => {
      console.error( error );
    })
  }
}
