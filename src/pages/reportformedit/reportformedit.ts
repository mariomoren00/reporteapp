import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Events } from 'ionic-angular';

import { ReportsProvider } from '../../providers/reports/reports';


/**
 * Generated class for the ReportformeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportformedit',
  templateUrl: 'reportformedit.html',
})
export class ReportformeditPage {

  report = {};
  todo = {
    id: '',
    titulo : '',
    descripcion : ''
  };

  index = 0;
  photo = '';  
  img = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    private reporsproviders: ReportsProvider,
    private events: Events
  ) {
    console.log(navParams.get('id'));

    this.index = navParams.get('index');
    this.todo.id = navParams.get('id');
    this.todo.titulo = navParams.get('titulo');
    this.todo.descripcion = navParams.get('descripcion');
    this.photo = navParams.get('imagen');
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
    console.log('ionViewDidLoad ReportformeditPage');
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
    console.log(this.report);
    this.reporsproviders.update(this.report).then(result => {
      console.log(result);
      
      this.reporsproviders.getById(this.todo.id).then(response => {
        this.events.publish('listUpdate', response, this.index);
        this.navCtrl.pop();
      }).catch(error => {
        console.log(error);
      })
      
    }).catch(error => {
      console.log(error);
    });
  }

}
