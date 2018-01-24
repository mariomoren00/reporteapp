webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportformeditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reports_reports__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ReportformeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportformeditPage = (function () {
    function ReportformeditPage(navCtrl, navParams, camera, reporsproviders, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.reporsproviders = reporsproviders;
        this.events = events;
        this.report = {};
        this.todo = {
            id: '',
            titulo: '',
            descripcion: ''
        };
        this.index = 0;
        this.photo = '';
        this.img = {};
        this.options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        console.log(navParams.get('id'));
        this.index = navParams.get('index');
        this.todo.id = navParams.get('id');
        this.todo.titulo = navParams.get('titulo');
        this.todo.descripcion = navParams.get('descripcion');
        this.photo = navParams.get('imagen');
    }
    ReportformeditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportformeditPage');
    };
    ReportformeditPage.prototype.takePhoto = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photo = base64Image;
            _this.img = { 'imagen': _this.photo };
        }, function (err) {
            console.log(err);
        });
    };
    ReportformeditPage.prototype.logForm = function () {
        var _this = this;
        console.log(this.todo);
        this.report = Object.assign(this.todo, this.img);
        console.log(this.report);
        this.reporsproviders.update(this.report).then(function (result) {
            console.log(result);
            _this.reporsproviders.getById(_this.todo.id).then(function (response) {
                _this.events.publish('listUpdate', response, _this.index);
                _this.navCtrl.pop();
            }).catch(function (error) {
                console.log(error);
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    ReportformeditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reportformedit',template:/*ion-inline-start:"/Users/mariomoreno/Desktop/curso/proyecto/reporteapp/src/pages/reportformedit/reportformedit.html"*/'<!--\n  Generated template for the ReportformeditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Editar reporte</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>  \n\n      <ion-item>\n        <ion-label stacked>Reporte</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.titulo" placeholder="Reporte"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Descripción</ion-label>\n        <ion-textarea [(ngModel)]="todo.descripcion" placeholder="Descripción"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button full block (click)="takePhoto()">\n          <ion-icon name="camera"></ion-icon>\n        </button>          \n      </ion-item>\n\n      <ion-item>\n        <img [src]="photo" *ngIf="photo"/>  \n      </ion-item>\n\n      <ion-item>\n          <button ion-button full block (click)="logForm()">Editar</button>          \n      </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mariomoreno/Desktop/curso/proyecto/reporteapp/src/pages/reportformedit/reportformedit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_reports_reports__["a" /* ReportsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ReportformeditPage);
    return ReportformeditPage;
}());

//# sourceMappingURL=reportformedit.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reports_reports__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ReportformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportformPage = (function () {
    function ReportformPage(navCtrl, navParams, camera, events, reportsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.events = events;
        this.reportsProvider = reportsProvider;
        this.todo = {};
        this.report = {};
        this.img = {};
        this.photo = "";
        this.options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
    }
    ReportformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportformPage');
    };
    ReportformPage.prototype.takePhoto = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photo = base64Image;
            _this.img = { 'imagen': _this.photo };
        }, function (err) {
            console.log(err);
        });
    };
    ReportformPage.prototype.logForm = function () {
        var _this = this;
        console.log(this.todo);
        this.report = Object.assign(this.todo, this.img);
        console.log(this.report);
        this.reportsProvider.create(this.report).then(function (response) {
            console.log(response.insertId);
            _this.reportsProvider.getById(response.insertId).then(function (response) {
                _this.events.publish('listadd', response);
                _this.navCtrl.pop();
            }).catch(function (error) {
                console.log(error);
            });
        }).catch(function (error) {
            console.error(error);
        });
    };
    ReportformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reportform',template:/*ion-inline-start:"/Users/mariomoreno/Desktop/curso/proyecto/reporteapp/src/pages/reportform/reportform.html"*/'<!--\n  Generated template for the ReportformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Crear reporte</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>  \n      <ion-item>\n        <ion-label stacked>Reporte</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.titulo" name="titulo" placeholder="Reporte"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Descripción</ion-label>\n        <ion-textarea [(ngModel)]="todo.descripcion" name="descripcion" placeholder="Descripción"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button full block (click)="takePhoto()">\n          <ion-icon name="camera"></ion-icon>\n        </button>          \n      </ion-item>\n\n      <ion-item>\n        <img [src]="photo" *ngIf="photo"/>  \n      </ion-item>\n\n      <ion-item>\n          <button ion-button full block (click)="logForm()">Guardar</button>          \n      </ion-item>\n    </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/mariomoreno/Desktop/curso/proyecto/reporteapp/src/pages/reportform/reportform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_reports_reports__["a" /* ReportsProvider */]])
    ], ReportformPage);
    return ReportformPage;
}());

//# sourceMappingURL=reportform.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/reportform/reportform.module": [
		277,
		1
	],
	"../pages/reportformedit/reportformedit.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportform_reportform__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reportformedit_reportformedit__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reports_reports__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(platform, actionSheetCtrl, navCtrl, events, reportsProvider) {
        var _this = this;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.events = events;
        this.reportsProvider = reportsProvider;
        this.reports = [];
        console.log('Constructor');
        this.getAllReports();
        events.subscribe('listadd', function (reports) {
            console.log('Events:');
            console.log(reports);
            _this.reports = _this.reports.concat(reports);
            console.log(_this.reports);
        });
        events.subscribe('listUpdate', function (reports, index) {
            console.log('Events:');
            console.log(reports);
            console.log('index:', index);
            _this.reports.splice(index, 1);
            _this.reports = _this.reports.concat(reports);
            console.log(_this.reports);
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad");
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter");
    };
    HomePage.prototype.getAllReports = function () {
        var _this = this;
        console.log('getAll');
        this.reportsProvider.getAll().then(function (reports) {
            _this.reports = reports;
            console.log(_this.reports);
        }).catch(function (error) {
            console.error(error);
        });
    };
    HomePage.prototype.create = function () {
        console.log('Create');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reportform_reportform__["a" /* ReportformPage */]);
    };
    HomePage.prototype.action = function (item, index) {
        var _this = this;
        console.log(item);
        console.log(index);
        console.log('Action');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Reporte',
            buttons: [
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                        _this.reportsProvider.delete(item).then(function (response) {
                            console.log(response);
                            _this.reports.splice(index, 1);
                            //this.getAllReports();                  
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
                }, {
                    text: 'Editar',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reportformedit_reportformedit__["a" /* ReportformeditPage */], {
                            'index': index,
                            'id': item.id,
                            'titulo': item.titulo,
                            'descripcion': item.descripcion,
                            'imagen': item.imagen
                        });
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mariomoreno/Desktop/curso/proyecto/reporteapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Reportes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item *ngIf="reports.length == 0"> \n    Sin datos\n  </ion-item>\n\n  <ion-card *ngFor="let item of reports; let i = index">\n    <div class="card-img">\n      <img [src]="item.imagen" *ngIf="item.imagen"/>        \n      <ion-fab left top>\n        <button ion-fab color="primary" (click)="action(item, i)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n    <ion-card-content>\n      <ion-card-title>\n        {{item.titulo}}\n      </ion-card-title>\n      <p>\n        {{item.descripcion}}\n      </p>\n    </ion-card-content>\n    <ion-item actions>\n      <span ion-text item-end color="danger">02/12/17</span>\n    </ion-item>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="danger" (click)="create()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/mariomoreno/Desktop/curso/proyecto/reporteapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_reports_reports__["a" /* ReportsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_reportform_reportform__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reportformedit_reportformedit__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_reports_reports__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_reportform_reportform__["a" /* ReportformPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reportformedit_reportformedit__["a" /* ReportformeditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/reportformedit/reportformedit.module#ReportformeditPageModule', name: 'ReportformeditPage', segment: 'reportformedit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reportform/reportform.module#ReportformPageModule', name: 'ReportformPage', segment: 'reportform', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_reportform_reportform__["a" /* ReportformPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reportformedit_reportformedit__["a" /* ReportformeditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_11__providers_reports_reports__["a" /* ReportsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_reports_reports__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, reportsProvider, sqlite) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.reportsProvider = reportsProvider;
        this.sqlite = sqlite;
        // Componente raíz de navegación
        this.rootPage = null;
        this.platform.ready().then(function () {
            console.log('Ready');
            _this.statusBar.styleDefault();
            // Llamamos al método para crear nuestra base de datos.
            _this.createDatabase();
        });
    }
    // Creamos un método para crear nuestra base de datos
    MyApp.prototype.createDatabase = function () {
        var _this = this;
        console.log('Create database method');
        this.sqlite.create({
            name: 'reports.db',
            location: 'default'
        }).then(function (db) {
            console.log('Base de datos creado.');
            _this.reportsProvider.setDatabase(db);
            return _this.reportsProvider.createTable();
        }).then(function () {
            console.log('Iniciamos el home principal de root');
            _this.splashScreen.hide();
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }).catch(function (error) {
            console.log('error');
            console.error(error);
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mariomoreno/Desktop/curso/proyecto/reporteapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mariomoreno/Desktop/curso/proyecto/reporteapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_reports_reports__["a" /* ReportsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ReportsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReportsProvider = (function () {
    function ReportsProvider() {
        // Objeto tipo SQLITE
        this.db = null;
        console.log('Hello ReportsProvider Provider');
    }
    // Método de verificación de base de datos
    ReportsProvider.prototype.setDatabase = function (db) {
        console.log(db);
        if (this.db === null) {
            console.log('null');
            this.db = db;
        }
    };
    ReportsProvider.prototype.createTable = function () {
        console.log('creando tabla');
        var sql = 'CREATE TABLE IF NOT EXISTS reports(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, descripcion TEXT, imagen TEXT)';
        return this.db.executeSql(sql, []);
    };
    ReportsProvider.prototype.getAll = function () {
        console.log('obtener reportes');
        var sql = 'SELECT * FROM reports';
        return this.db.executeSql(sql, [])
            .then(function (response) {
            console.log('Objeto');
            console.log(response);
            var reports = [];
            for (var index = 0; index < response.rows.length; index++) {
                reports.push(response.rows.item(index));
            }
            return Promise.resolve(reports);
        })
            .catch(function (error) { return Promise.reject(error); });
    };
    ReportsProvider.prototype.getById = function (id) {
        console.log('obtener reportes id');
        var sql = 'SELECT * FROM reports WHERE id=?';
        return this.db.executeSql(sql, [id])
            .then(function (response) {
            console.log(response);
            var reports = [];
            for (var index = 0; index < response.rows.length; index++) {
                reports.push(response.rows.item(index));
            }
            return Promise.resolve(reports);
        })
            .catch(function (error) { return Promise.reject(error); });
    };
    ReportsProvider.prototype.create = function (reports) {
        console.log('create:');
        console.log(reports);
        var sql = 'INSERT INTO reports(titulo, descripcion, imagen) VALUES(?,?,?)';
        return this.db.executeSql(sql, [reports.titulo, reports.descripcion, reports.imagen]);
    };
    ReportsProvider.prototype.update = function (reports) {
        var sql = 'UPDATE reports SET titulo=?, descripcion=?, imagen=? WHERE id=?';
        return this.db.executeSql(sql, [reports.titulo, reports.descripcion, reports.imagen, reports.id]);
    };
    ReportsProvider.prototype.delete = function (reports) {
        var sql = 'DELETE FROM reports WHERE id=?';
        return this.db.executeSql(sql, [reports.id]);
    };
    ReportsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ReportsProvider);
    return ReportsProvider;
}());

//# sourceMappingURL=reports.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map