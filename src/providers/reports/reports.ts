import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the ReportsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportsProvider {

  // Objeto tipo SQLITE
  db: SQLiteObject = null;
      
  constructor() {
    console.log('Hello ReportsProvider Provider');
  }

  // Método de verificación de base de datos
  setDatabase(db: SQLiteObject){
    console.log(db);
    if(this.db === null){
      console.log('null');
      this.db = db;
    }
  }

  createTable(){
    console.log('creando tabla');
    let sql = 'CREATE TABLE IF NOT EXISTS reports(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, descripcion TEXT, imagen TEXT)';
    return this.db.executeSql(sql, []);
  }
  
  getAll(){
    console.log('obtener reportes');
    let sql = 'SELECT * FROM reports';
    return this.db.executeSql(sql, [])
    .then(response => {
      console.log('Objeto');
      console.log(response);
      let reports = [];
      for (let index = 0; index < response.rows.length; index++) {
        reports.push( response.rows.item(index) );
      }
      return Promise.resolve( reports );
    })
    .catch(error => Promise.reject(error));
  }

  getById(id){
    console.log('obtener reportes id');
    let sql = 'SELECT * FROM reports WHERE id=?';
    return this.db.executeSql(sql, [id])    
    .then(response => {
      console.log(response);
      let reports = [];
      for (let index = 0; index < response.rows.length; index++) {
        reports.push( response.rows.item(index) );
      }
      return Promise.resolve( reports );
    })
    .catch(error => Promise.reject(error));
  }

  create(reports: any){
    console.log('create:');
    console.log(reports);
    let sql = 'INSERT INTO reports(titulo, descripcion, imagen) VALUES(?,?,?)';
    return this.db.executeSql(sql, [reports.titulo, reports.descripcion, reports.imagen]);
  }

  update(reports: any){
    let sql = 'UPDATE reports SET titulo=?, descripcion=?, imagen=? WHERE id=?';
    return this.db.executeSql(sql, [reports.titulo, reports.descripcion, reports.imagen, reports.id]);
  }

  delete(reports: any){
    let sql = 'DELETE FROM reports WHERE id=?';
    return this.db.executeSql(sql, [reports.id]);
  }

}
