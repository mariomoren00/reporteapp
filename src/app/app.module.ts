import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReportformPage } from '../pages/reportform/reportform';
import { ReportformeditPage } from '../pages/reportformedit/reportformedit';

import { ReportsProvider } from '../providers/reports/reports';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReportformPage,
    ReportformeditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReportformPage,
    ReportformeditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    SQLite,    
    ReportsProvider    
  ]
})
export class AppModule {}
