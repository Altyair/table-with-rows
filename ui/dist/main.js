(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/navigation.service */ 7664);
/* harmony import */ var _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layout/layout.component */ 5404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: '',
  component: _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/users/users.module */ 5673)).then(m => m.UsersModule),
  canActivate: []
}, {
  path: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.FirstLevelMenuLink.BadGateway,
  component: _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_http-error-response_http-error-response_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/http-error-response/http-error-response.module */ 6337)).then(m => m.HttpErrorResponseModule),
  canActivate: []
}, {
  path: '**',
  component: _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_http-error-response_http-error-response_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/http-error-response/http-error-response.module */ 6337)).then(m => m.HttpErrorResponseModule),
  canActivate: []
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    canceledNavigationResolution: 'computed'
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let AppComponent = class AppComponent {
  constructor() {}
  static ctorParameters = () => [];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})], AppComponent);


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.module */ 8423);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/ru */ 7566);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);










(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_4__["default"], 'ru-RU');
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 8423:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 3887);
/* harmony import */ var _modules_http_error_response_http_error_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/http-error-response/http-error-link.service */ 5677);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-interceptor */ 6052);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ 5404);
/* harmony import */ var _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/menu/menu.component */ 8201);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-import-guard */ 418);
/* harmony import */ var _global_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-error-handling-service */ 9200);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 2587);













let CoreModule = class CoreModule {
  constructor(parentModule) {
    (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_5__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
  }
  static ctorParameters = () => [{
    type: CoreModule,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.SkipSelf
    }]
  }];
};
CoreModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent],
  declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, _layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent],
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule],
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID,
    useValue: 'ru-RU'
  }, _modules_http_error_response_http_error_link_service__WEBPACK_IMPORTED_MODULE_1__.HttpErrorLinkService, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ErrorHandler,
    useClass: _global_error_handling_service__WEBPACK_IMPORTED_MODULE_6__.GlobalErrorHandler
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
    useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor,
    deps: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router, _modules_http_error_response_http_error_link_service__WEBPACK_IMPORTED_MODULE_1__.HttpErrorLinkService, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog],
    multi: true
  }]
})], CoreModule);


/***/ }),

/***/ 6052:
/*!*******************************************!*\
  !*** ./src/app/core/error-interceptor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _modules_http_error_response_http_error_link_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/http-error-response/http-error-link.service */ 5677);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/snack-bar/snack-bar.service */ 9581);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);









var ResponseStatus;
(function (ResponseStatus) {
  ResponseStatus[ResponseStatus["Unauthorized"] = 401] = "Unauthorized";
  ResponseStatus[ResponseStatus["Forbidden"] = 403] = "Forbidden";
  ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
  ResponseStatus[ResponseStatus["InternalServerError"] = 500] = "InternalServerError";
  ResponseStatus[ResponseStatus["GatewayTimeout"] = 504] = "GatewayTimeout";
})(ResponseStatus || (ResponseStatus = {}));
let ErrorInterceptor = class ErrorInterceptor {
  router;
  httpErrorLinkService;
  snackBarService;
  dialog;
  constructor(router, httpErrorLinkService, snackBarService, dialog) {
    this.router = router;
    this.httpErrorLinkService = httpErrorLinkService;
    this.snackBarService = snackBarService;
    this.dialog = dialog;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(errorResponse => this.handleBlobError(errorResponse))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(errorResponse => this.handleError(errorResponse)));
  }
  handleBlobError(errorResponse) {
    if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse && errorResponse.error instanceof Blob && errorResponse.error.type.indexOf('application/json') !== -1) {
      // https://github.com/angular/angular/issues/19888
      // When request of type Blob, the error is also in Blob instead of object of the json data
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(new Promise((_, reject) => {
        const reader = new FileReader();
        reader.onload = event => {
          try {
            reject(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse({
              error: JSON.parse(event.target.result),
              headers: errorResponse.headers,
              status: errorResponse.status,
              statusText: errorResponse.statusText,
              url: errorResponse.url
            }));
          } catch (e) {
            reject(errorResponse);
          }
        };
        reader.onerror = () => {
          reject(errorResponse);
        };
        reader.readAsText(errorResponse.error);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => errorResponse);
  }
  handleError(errorResponse) {
    if (errorResponse.status === ResponseStatus.Unauthorized) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => errorResponse.error);
    }
    if (errorResponse.status === ResponseStatus.Forbidden || errorResponse.status === ResponseStatus.NotFound) {
      this.dialog.closeAll();
      this.router.navigate(this.httpErrorLinkService.badGateway());
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => errorResponse.error);
    }
    if (errorResponse.status === ResponseStatus.GatewayTimeout) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => errorResponse.error);
    }
    if (errorResponse.status >= ResponseStatus.InternalServerError) {
      if (errorResponse.error.id) {
        this.snackBarService.unexpectedError('ID ошибки: ' + errorResponse.error.id);
      } else {
        this.snackBarService.unexpectedError('Код ошибки: ' + errorResponse.status.toString());
      }
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => errorResponse.error);
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _modules_http_error_response_http_error_link_service__WEBPACK_IMPORTED_MODULE_0__.HttpErrorLinkService
  }, {
    type: _shared_components_snack_bar_snack_bar_service__WEBPACK_IMPORTED_MODULE_1__.SnackBarService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog
  }];
};
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)()], ErrorInterceptor);


/***/ }),

/***/ 9200:
/*!*******************************************************!*\
  !*** ./src/app/core/global-error-handling-service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalErrorHandler: () => (/* binding */ GlobalErrorHandler)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let GlobalErrorHandler = class GlobalErrorHandler {
  constructor() {}
  handleError(error) {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    if (chunkFailedMessage.test(error.message)) {
      window.location.reload();
    }
    console.error(error);
  }
  static ctorParameters = () => [];
};
GlobalErrorHandler = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], GlobalErrorHandler);


/***/ }),

/***/ 5404:
/*!*************************************************!*\
  !*** ./src/app/core/layout/layout.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component.html?ngResource */ 3032);
/* harmony import */ var _layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component.scss?ngResource */ 6904);
/* harmony import */ var _layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _core_layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/layout/menu/menu.component */ 8201);






let LayoutComponent = class LayoutComponent {
  menuComponent;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static propDecorators = {
    menuComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
      args: [_core_layout_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent]
    }]
  };
};
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-layout',
  template: _layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [],
  styles: [(_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LayoutComponent);


/***/ }),

/***/ 8201:
/*!****************************************************!*\
  !*** ./src/app/core/layout/menu/menu.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 1203);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss?ngResource */ 8813);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_menu_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../scss/menu.scss?ngResource */ 2242);
/* harmony import */ var _scss_menu_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_menu_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/navigation.service */ 7664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);






let MenuComponent = class MenuComponent {
  navigationService;
  menuItems = [];
  constructor(navigationService) {
    this.navigationService = navigationService;
  }
  ngOnInit() {
    this.menuItems = [{
      name: 'Пользователи',
      url: this.navigationService.rootLink()
    }];
  }
  static ctorParameters = () => [{
    type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService
  }];
};
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-menu',
  template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_scss_menu_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MenuComponent);


/***/ }),

/***/ 418:
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throwIfAlreadyLoaded: () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}

/***/ }),

/***/ 5677:
/*!************************************************************************!*\
  !*** ./src/app/modules/http-error-response/http-error-link.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpErrorLinkService: () => (/* binding */ HttpErrorLinkService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/navigation.service */ 7664);



let HttpErrorLinkService = class HttpErrorLinkService {
  constructor() {}
  badGateway() {
    return [_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.FirstLevelMenuLink.BadGateway];
  }
  static ctorParameters = () => [];
};
HttpErrorLinkService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], HttpErrorLinkService);


/***/ }),

/***/ 3683:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/custom-input/custom-input.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomInputComponent: () => (/* binding */ CustomInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _custom_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-input.component.html?ngResource */ 3053);
/* harmony import */ var _custom_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-input.component.scss?ngResource */ 4159);
/* harmony import */ var _custom_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants */ 951);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _shared_services_filter_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/filter-activity.service */ 5750);








let CustomInputComponent = class CustomInputComponent {
  filterActivityService;
  _cdr;
  // Для полей ввода в качестве десятичного разделителя используем запятую, точка работает не корректно при переходе в редактирование.
  maskDecimalMarker = _shared_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.decimalMarker;
  label = null;
  type = 'text';
  formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null);
  maxlength = null;
  minlength = null;
  inputRestriction = undefined;
  maxlengthError = '';
  minlengthError = '';
  requiredError = '';
  patternError = '';
  patternErrorDisable = false;
  maxError = '';
  minError = '';
  suffix = null;
  tooltipText = '';
  tooltipDisabled = true;
  showClearBtn = false;
  prefixText = '';
  search = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  blurInput = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  // maskOptions$ - параметры для маски ввода. Для маски используется плагин https://github.com/JsDaddy/ngx-mask
  maskOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
  set maskOptions(options) {
    this.maskOptions$.next(options);
  }
  constructor(filterActivityService, _cdr) {
    this.filterActivityService = filterActivityService;
    this._cdr = _cdr;
  }
  ngDoCheck() {
    if (this.formControl?.invalid && this.formControl.touched) {
      this._cdr.markForCheck();
    }
  }
  searchItems() {
    this.search.emit();
  }
  resetControl(formControl) {
    this.filterActivityService.resetControl(formControl);
    this.onClear.emit();
  }
  blur() {
    this.blurInput.emit(this.formControl.value);
  }
  onChange = () => {};
  onTouched = () => {};
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
    this._cdr.markForCheck();
  }
  writeValue() {
    this._cdr.markForCheck();
  }
  checkEmptyString() {
    if (this.formControl.value === '') {
      this.formControl.patchValue(null);
    }
  }
  isValuePresent() {
    if (typeof this.formControl.value === 'number') {
      return !!this.formControl.value || this.formControl.value === 0;
    } else {
      return !!this.formControl.value;
    }
  }
  static ctorParameters = () => [{
    type: _shared_services_filter_activity_service__WEBPACK_IMPORTED_MODULE_3__.FilterActivityService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }];
  static propDecorators = {
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    formControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    maxlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    minlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    inputRestriction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    maxlengthError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    minlengthError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    requiredError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    patternError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    patternErrorDisable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    maxError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    minError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    tooltipText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    tooltipDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    showClearBtn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    prefixText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    search: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    blurInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    onClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
    }],
    maskOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
CustomInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'sfs-input',
  template: _custom_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CustomInputComponent),
    multi: true
  }],
  styles: [(_custom_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CustomInputComponent);


/***/ }),

/***/ 4907:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/form-buttons/form-buttons.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormButtonsComponent: () => (/* binding */ FormButtonsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _form_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-buttons.component.html?ngResource */ 3813);
/* harmony import */ var _form_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-buttons.component.scss?ngResource */ 491);
/* harmony import */ var _form_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




let FormButtonsComponent = class FormButtonsComponent {
  mainButtonDisabled = false;
  secondaryButtonDisabled = false;
  mainButtonText = 'Поиск';
  secondaryButtonText = 'Очистить';
  mainButtonDisabledTooltip = 'Некорректные критерии поиска';
  secondaryButtonDisabledTooltip = 'Действие невозможно';
  mainClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  secondaryClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  onMainClick() {
    this.mainClick.emit();
  }
  onSecondaryClick() {
    this.secondaryClick.emit();
  }
  static propDecorators = {
    mainButtonDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    secondaryButtonDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    mainButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    secondaryButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    mainButtonDisabledTooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    secondaryButtonDisabledTooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    mainClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    secondaryClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
FormButtonsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'sfs-form-buttons',
  template: _form_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_form_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormButtonsComponent);


/***/ }),

/***/ 1810:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/form/custom-field/custom-field.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomFieldComponent: () => (/* binding */ CustomFieldComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _custom_field_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-field.component.html?ngResource */ 4838);
/* harmony import */ var _custom_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-field.component.scss?ngResource */ 1782);
/* harmony import */ var _custom_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);





let CustomFieldComponent = class CustomFieldComponent {
  _formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
  set customControl(control) {
    this._formControl = control;
  }
  get customControl() {
    return this._formControl;
  }
  maxlength = null;
  minlength = null;
  maxlengthError = '';
  minlengthError = '';
  requiredError = '';
  patternError = '';
  patternErrorDisable = false;
  maxError = '';
  minError = '';
  errorListStyle = 'error-list';
  constructor() {}
  get errorPattern() {
    return this.customControl.errors && this.customControl.errors['pattern'];
  }
  static ctorParameters = () => [];
  static propDecorators = {
    customControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    maxlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    minlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    maxlengthError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    minlengthError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    requiredError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    patternError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    patternErrorDisable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    maxError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    minError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    errorListStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
CustomFieldComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'sfs-custom-field',
  template: _custom_field_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_custom_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CustomFieldComponent);


/***/ }),

/***/ 9581:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/snack-bar/snack-bar.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackBarService: () => (/* binding */ SnackBarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ 6371);



let SnackBarService = class SnackBarService {
  toastr;
  constructor(toastr) {
    this.toastr = toastr;
  }
  success = (message, submessage) => this.toastr.success(this.messageTemplate(message, submessage));
  warning = (message, submessage) => this.toastr.warning(this.messageTemplate(message, submessage));
  error = (message, submessage) => this.toastr.error(this.messageTemplate(message, submessage));
  unexpectedError(submessage) {
    this.error('Произошла непредвиденная ошибка', submessage);
  }
  messageTemplate(message, submessage) {
    if (!submessage) {
      return `<div class="toast-text-message">${message}</div>`;
    }
    return `<div class="toast-text-message">${message}</div> <div class="toast-text-submessage">${submessage}</div>`;
  }
  static ctorParameters = () => [{
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_0__.ToastrService
  }];
};
SnackBarService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], SnackBarService);


/***/ }),

/***/ 951:
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Constants: () => (/* binding */ Constants)
/* harmony export */ });
class Constants {
  // Для полей ввода в качетве десятичного разделителя используем запятую, точка работает не корректно при переходе в редактирование.
  static decimalMarker = ',';
}

/***/ }),

/***/ 5750:
/*!************************************************************!*\
  !*** ./src/app/shared/services/filter-activity.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterActivityService: () => (/* binding */ FilterActivityService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let FilterActivityService = class FilterActivityService {
  resetControl(formControl) {
    formControl.reset();
  }
};
FilterActivityService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], FilterActivityService);


/***/ }),

/***/ 7664:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirstLevelMenuLink: () => (/* binding */ FirstLevelMenuLink),
/* harmony export */   NavigationService: () => (/* binding */ NavigationService),
/* harmony export */   ROOT_PAGE_TITLE: () => (/* binding */ ROOT_PAGE_TITLE)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


var FirstLevelMenuLink;
(function (FirstLevelMenuLink) {
  FirstLevelMenuLink["Users"] = "users";
  FirstLevelMenuLink["BadGateway"] = "bad-gateway-page";
})(FirstLevelMenuLink || (FirstLevelMenuLink = {}));
const slash = '/';
const ROOT_PAGE_TITLE = 'Список пользователей';
let NavigationService = class NavigationService {
  constructor() {}
  rootLink() {
    return [slash];
  }
  usersLink() {
    return [slash.concat(FirstLevelMenuLink.Users)];
  }
  badGatewayLink() {
    return [slash.concat(FirstLevelMenuLink.BadGateway)];
  }
  badGatewayLinkWithSlash() {
    return slash.concat(FirstLevelMenuLink.BadGateway);
  }
  static ctorParameters = () => [];
};
NavigationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], NavigationService);


/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/form-buttons/form-buttons.component */ 4907);
/* harmony import */ var _components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/custom-input/custom-input.component */ 3683);
/* harmony import */ var _components_form_custom_field_custom_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form/custom-field/custom-field.component */ 1810);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-mask */ 6769);























const reExports = [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule];
const declarationsForExport = [_shared_components_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_0__.FormButtonsComponent, _components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_1__.CustomInputComponent, _components_form_custom_field_custom_field_component__WEBPACK_IMPORTED_MODULE_2__.CustomFieldComponent];
let SharedModule = class SharedModule {};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
  exports: [...reExports, ...declarationsForExport],
  declarations: [...declarationsForExport],
  imports: [...reExports, ngx_mask__WEBPACK_IMPORTED_MODULE_22__.NgxMaskDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_22__.NgxMaskPipe],
  providers: [(0,ngx_mask__WEBPACK_IMPORTED_MODULE_22__.provideNgxMask)()]
})], SharedModule);


/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 95);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6904:
/*!**************************************************************!*\
  !*** ./src/app/core/layout/layout.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/** 1600 и выше */
/** 1280 – 1599 */
/** 1024 – 1279 */
/** 768 – 1023 */
/** 360 – 767 */
.layout-wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

header {
  background: #ffffff;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0px -108px 164px 21px #000000;
  z-index: 1;
  margin-bottom: 30px;
}

.header-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1600px;
  padding: 0 4em;
}
.header-container__links {
  display: flex;
  gap: 15px;
  width: 50%;
  justify-content: space-between;
}

.toolbar-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  height: 100%;
  background-color: #ffffff;
}

.left-toolbar-container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
  height: 100%;
  gap: 33px;
}

main {
  background-color: #ffffff;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  width: 100%;
  margin: auto;
}

.nav-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #636363;
  height: 100%;
  padding: 0;
}

a:hover {
  text-decoration: underline;
  color: #008e1f;
}`, "",{"version":3,"sources":["webpack://./../../../my%20projects/table-with-rows/ui/src/app/core/layout/layout.component.scss","webpack://./src/scss/variables.scss","webpack://./src/app/core/layout/layout.component.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACoBhB,iBAAA;AAEA,iBAAA;AAEA,iBAAA;AAEA,gBAAA;AAEA,eAAA;ACxBA;EACI,gBAAA;EACA,aAAA;EACA,sBAAA;AFGJ;;AEAA;EACI,mBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yCAAA;EACA,UAAA;EACA,mBAAA;AFGJ;;AEAA;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,cAAA;AFGJ;AEDI;EACI,aAAA;EACA,SAAA;EACA,UAAA;EACA,8BAAA;AFGR;;AECA;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,8BAAA;EACA,UAAA;EACA,YAAA;EACA,yBAAA;AFEJ;;AECA;EACI,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;AFEJ;;AECA;EACI,yBAAA;EACA,aAAA;EACA,cAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;AFEJ;;AECA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;EACA,YAAA;EACA,UAAA;AFEJ;;AECA;EACI,0BAAA;EACA,cD/EY;ADiFhB","sourcesContent":["@charset \"UTF-8\";\n/** 1600 и выше */\n/** 1280 – 1599 */\n/** 1024 – 1279 */\n/** 768 – 1023 */\n/** 360 – 767 */\n.layout-wrapper {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  background: #ffffff;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  box-shadow: 0px -108px 164px 21px #000000;\n  z-index: 1;\n  margin-bottom: 30px;\n}\n\n.header-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  max-width: 1600px;\n  padding: 0 4em;\n}\n.header-container__links {\n  display: flex;\n  gap: 15px;\n  width: 50%;\n  justify-content: space-between;\n}\n\n.toolbar-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0;\n  height: 100%;\n  background-color: #ffffff;\n}\n\n.left-toolbar-container {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  position: relative;\n  height: 100%;\n  gap: 33px;\n}\n\nmain {\n  background-color: #ffffff;\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: center;\n  width: 100%;\n  margin: auto;\n}\n\n.nav-button {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #636363;\n  height: 100%;\n  padding: 0;\n}\n\na:hover {\n  text-decoration: underline;\n  color: #008e1f;\n}","$dark-color: #494949;\r\n$light-color: #808080;\r\n$primary-color: #008e1f;\r\n$warn-color: #f44336;\r\n$block-color: #d9001b;\r\n$accent-color: #fcd703;\r\n$border-color: #d8d8d8;\r\n\r\n//grid\r\n$grid-breakpoint-xl: 1600px;\r\n$grid-breakpoint-lgx: 1350px;\r\n$grid-breakpoint-lg: 1280px;\r\n$grid-breakpoint-md: 1024px;\r\n$grid-breakpoint-sm: 768px;\r\n$grid-breakpoint-xs: 360px;\r\n$grid-breakpoint-lg-max: 1599px;\r\n$grid-breakpoint-md-max: 1279px;\r\n$grid-breakpoint-sm-max: 1023px;\r\n$grid-breakpoint-xs-max: 767px;\r\n\r\n/** 1600 и выше */\r\n$grid-gutter-xl: 12px;\r\n/** 1280 – 1599 */\r\n$grid-gutter-lg: 12px;\r\n/** 1024 – 1279 */\r\n$grid-gutter-md: 12px;\r\n/** 768 – 1023 */\r\n$grid-gutter-sm: 12px;\r\n/** 360 – 767 */\r\n$grid-gutter-xs: 12px;\r\n\r\n$container-padding-xl: 12px;\r\n$container-width-xl: 1480px + $container-padding-xl * 2;\r\n$container-padding-lg: 24px;\r\n$container-padding-md: 24px;\r\n$container-padding-sm: 20px;\r\n$container-padding-xs: 16px;\r\n","@import \"../../../scss/variables.scss\";\r\n\r\n$border: 1px solid #f0f0f0;\r\n\r\n.layout-wrapper {\r\n    min-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nheader {\r\n    background: #ffffff;\r\n    height: 64px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    box-shadow: 0px -108px 164px 21px #000000;\r\n    z-index: 1;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.header-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    max-width: 1600px;\r\n    padding: 0 4em;\r\n\r\n    &__links {\r\n        display: flex;\r\n        gap: 15px;\r\n        width: 50%;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n.toolbar-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    height: 100%;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.left-toolbar-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: stretch;\r\n    position: relative;\r\n    height: 100%;\r\n    gap: 33px;\r\n}\r\n\r\nmain {\r\n    background-color: #ffffff;\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n    justify-content: center;\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.nav-button {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    color: #636363;\r\n    height: 100%;\r\n    padding: 0;\r\n}\r\n\r\na:hover {\r\n    text-decoration: underline;\r\n    color: $primary-color;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8813:
/*!*****************************************************************!*\
  !*** ./src/app/core/layout/menu/menu.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.app-icon {
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/app/core/layout/menu/menu.component.scss","webpack://./../../../my%20projects/table-with-rows/ui/src/app/core/layout/menu/menu.component.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;ACCJ","sourcesContent":[".app-icon {\r\n    cursor: pointer;\r\n}\r\n",".app-icon {\n  cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4159:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/custom-input/custom-input.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sfs-mat-form-field {
  width: 100%;
}
.sfs-mat-form-field ::ng-deep .mat-mdc-form-field-text-suffix {
  order: 10;
}

.error {
  padding-bottom: 8px;
}

::ng-deep mat-error {
  padding-bottom: 2px;
  line-height: 1.31;
}`, "",{"version":3,"sources":["webpack://./src/app/shared/components/custom-input/custom-input.component.scss","webpack://./../../../my%20projects/table-with-rows/ui/src/app/shared/components/custom-input/custom-input.component.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;ACCJ;ADEQ;EACI,SAAA;ACAZ;;ADMA;EACI,mBAAA;ACHJ;;ADOI;EACI,mBAAA;EACA,iBAAA;ACJR","sourcesContent":[".sfs-mat-form-field {\r\n    width: 100%;\r\n\r\n    ::ng-deep {\r\n        .mat-mdc-form-field-text-suffix {\r\n            order: 10;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n.error {\r\n    padding-bottom: 8px;\r\n}\r\n\r\n::ng-deep {\r\n    mat-error {\r\n        padding-bottom: 2px;\r\n        line-height: 1.31;\r\n    }\r\n}\r\n",".sfs-mat-form-field {\n  width: 100%;\n}\n.sfs-mat-form-field ::ng-deep .mat-mdc-form-field-text-suffix {\n  order: 10;\n}\n\n.error {\n  padding-bottom: 8px;\n}\n\n::ng-deep mat-error {\n  padding-bottom: 2px;\n  line-height: 1.31;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 491:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/form-buttons/form-buttons.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1782:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/form/custom-field/custom-field.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.error-container {
  min-height: 21px;
}

:host ::ng-deep .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
:host ::ng-deep .ng-select {
  padding-bottom: 0;
}
:host ::ng-deep .ng-dropdown-panel {
  top: 100% !important;
}

::ng-deep .mat-checkbox-form-field {
  padding-bottom: 0;
}
::ng-deep .ng-dropdown-panel {
  margin-top: 0 !important;
}`, "",{"version":3,"sources":["webpack://./src/app/shared/components/form/custom-field/custom-field.component.scss","webpack://./../../../my%20projects/table-with-rows/ui/src/app/shared/components/form/custom-field/custom-field.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;ACCF;;ADII;EACE,aAAA;ACDN;ADGI;EACE,iBAAA;ACDN;ADGI;EACE,oBAAA;ACDN;;ADOE;EACE,iBAAA;ACJJ;ADME;EACE,wBAAA;ACJJ","sourcesContent":[".error-container {\r\n  min-height: 21px;\r\n}\r\n\r\n:host {\r\n  ::ng-deep {\r\n    .mat-mdc-form-field-subscript-wrapper {\r\n      display: none;\r\n    }\r\n    .ng-select {\r\n      padding-bottom: 0;\r\n    }\r\n    .ng-dropdown-panel {\r\n      top: 100% !important;\r\n    }\r\n  }\r\n}\r\n\r\n::ng-deep {\r\n  .mat-checkbox-form-field {\r\n    padding-bottom: 0;\r\n  }\r\n  .ng-dropdown-panel {\r\n    margin-top: 0 !important;\r\n  }\r\n}\r\n\r\n",".error-container {\n  min-height: 21px;\n}\n\n:host ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n:host ::ng-deep .ng-select {\n  padding-bottom: 0;\n}\n:host ::ng-deep .ng-dropdown-panel {\n  top: 100% !important;\n}\n\n::ng-deep .mat-checkbox-form-field {\n  padding-bottom: 0;\n}\n::ng-deep .ng-dropdown-panel {\n  margin-top: 0 !important;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2242:
/*!***************************************!*\
  !*** ./src/scss/menu.scss?ngResource ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nav-container {
  width: 100%;
  left: 0;
  top: 1px;
  background-color: white;
  margin: auto;
  padding: 0 4em;
  position: relative;
  z-index: 1;
}

.wrapper-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  height: 100%;
}

.wrapper-nav--nested {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  height: 64px;
  margin: auto;
  max-width: 1472px;
}

.wrapper-nav--nested .nav-button,
.wrapper-nav .nav-button {
  color: #808080;
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
}
.wrapper-nav--nested .nav-button:hover, .wrapper-nav--nested .nav-button.active-link,
.wrapper-nav .nav-button:hover,
.wrapper-nav .nav-button.active-link {
  opacity: 1;
  color: #333333;
}
.wrapper-nav--nested .nav-button:hover::before, .wrapper-nav--nested .nav-button.active-link::before,
.wrapper-nav .nav-button:hover::before,
.wrapper-nav .nav-button.active-link::before {
  content: "";
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 2px;
  background-color: #333333;
  bottom: -1px;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  -o-border-radius: 2px;
}`, "",{"version":3,"sources":["webpack://./src/scss/menu.scss","webpack://./../../../my%20projects/table-with-rows/ui/src/scss/menu.scss"],"names":[],"mappings":"AAEA;EACI,WAAA;EACA,OAAA;EACA,QAAA;EACA,uBAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;ACDJ;;ADIA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,QAAA;EACA,YAAA;ACDJ;;ADIA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,QAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;ACDJ;;ADIA;;EAEI,cAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;ACDJ;ADGI;;;EAEI,UAAA;EACA,cAAA;ACAR;ADGI;;;EAEI,WAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,0BAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;ACAR","sourcesContent":["$border: 1px solid #f0f0f0;\r\n\r\n.nav-container {\r\n    width: 100%;\r\n    left: 0;\r\n    top: 1px;\r\n    background-color: white;\r\n    margin: auto;\r\n    padding: 0 4em;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.wrapper-nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 1em;\r\n    height: 100%;\r\n}\r\n\r\n.wrapper-nav--nested {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 1em;\r\n    height: 64px;\r\n    margin: auto;\r\n    max-width: 1472px;\r\n}\r\n\r\n.wrapper-nav--nested .nav-button,\r\n.wrapper-nav .nav-button {\r\n    color: #808080;\r\n    position: relative;\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n\r\n    &:hover,\r\n    &.active-link {\r\n        opacity: 1;\r\n        color: #333333;\r\n    }\r\n\r\n    &:hover::before,\r\n    &.active-link::before {\r\n        content: '';\r\n        position: absolute;\r\n        z-index: 1;\r\n        width: 100%;\r\n        height: 2px;\r\n        background-color: #333333;\r\n        bottom: -1px;\r\n        border-radius: 2px;\r\n        -webkit-border-radius: 2px;\r\n        -moz-border-radius: 2px;\r\n        -ms-border-radius: 2px;\r\n        -o-border-radius: 2px;\r\n    }\r\n}\r\n",".nav-container {\n  width: 100%;\n  left: 0;\n  top: 1px;\n  background-color: white;\n  margin: auto;\n  padding: 0 4em;\n  position: relative;\n  z-index: 1;\n}\n\n.wrapper-nav {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 1em;\n  height: 100%;\n}\n\n.wrapper-nav--nested {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 1em;\n  height: 64px;\n  margin: auto;\n  max-width: 1472px;\n}\n\n.wrapper-nav--nested .nav-button,\n.wrapper-nav .nav-button {\n  color: #808080;\n  position: relative;\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n.wrapper-nav--nested .nav-button:hover, .wrapper-nav--nested .nav-button.active-link,\n.wrapper-nav .nav-button:hover,\n.wrapper-nav .nav-button.active-link {\n  opacity: 1;\n  color: #333333;\n}\n.wrapper-nav--nested .nav-button:hover::before, .wrapper-nav--nested .nav-button.active-link::before,\n.wrapper-nav .nav-button:hover::before,\n.wrapper-nav .nav-button.active-link::before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 2px;\n  background-color: #333333;\n  bottom: -1px;\n  border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  -ms-border-radius: 2px;\n  -o-border-radius: 2px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3032:
/*!**************************************************************!*\
  !*** ./src/app/core/layout/layout.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"layout-wrapper\">\r\n    <header>\r\n        <div class=\"header-container\">\r\n            <mat-toolbar class=\"toolbar-container\">\r\n                <div class=\"left-toolbar-container\">\r\n                    <app-menu></app-menu>\r\n                </div>\r\n            </mat-toolbar>\r\n        </div>\r\n    </header>\r\n\r\n    <main>\r\n        <div class=\"main-wrapper\">\r\n            <section class=\"basic-container\">\r\n                <router-outlet></router-outlet>\r\n            </section>\r\n        </div>\r\n    </main>\r\n</section>\r\n";

/***/ }),

/***/ 1203:
/*!*****************************************************************!*\
  !*** ./src/app/core/layout/menu/menu.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav class=\"wrapper-nav\">\r\n    <ng-container>\r\n        <ng-container *ngFor=\"let item of menuItems\">\r\n            <a [routerLink]=\"item.url\" routerLinkActive=\"active-link\" class=\"nav-button\"\r\n                >{{ item.name }}\r\n            </a>\r\n        </ng-container>\r\n    </ng-container>\r\n</nav>\r\n";

/***/ }),

/***/ 3053:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/custom-input/custom-input.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<sfs-custom-field\r\n        [customControl]=\"formControl\"\r\n        [minlength]=\"minlength\"\r\n        [maxlength]=\"maxlength\"\r\n        [maxlengthError]=\"maxlengthError\"\r\n        [minlengthError]=\"minlengthError\"\r\n        [requiredError]=\"requiredError\"\r\n        [maxError]=\"maxError\"\r\n        [minError]=\"minError\"\r\n        [patternError]=\"patternError\"\r\n        [patternErrorDisable]=\"patternErrorDisable\">\r\n    <mat-form-field class=\"sfs-mat-form-field\"\r\n                    [matTooltip]=\"tooltipText\"\r\n                    [matTooltipDisabled]=\"tooltipDisabled\"\r\n                    [floatLabel]=\"formControl.value ? 'always' : 'auto'\">\r\n        <mat-label>{{ label }}</mat-label>\r\n        <input\r\n                matInput\r\n                [type]=\"type\"\r\n                autocomplete=\"autocomplete-off\"\r\n                [formControl]=\"formControl\"\r\n                [maxlength]=\"maxlength\"\r\n                [minlength]=\"minlength\"\r\n                (keydown.enter)=\"searchItems()\"\r\n                (change)=\"checkEmptyString()\"\r\n                (blur)=\"blur()\"\r\n                [mask]=\"(maskOptions$ | async)?.mask!\"\r\n                [decimalMarker]=\"maskDecimalMarker\"\r\n                [separatorLimit]=\"(maskOptions$ | async)?.separatorLimit || null\"\r\n                [allowNegativeNumbers]=\"(maskOptions$ | async)?.allowNegativeNumbers || false\"\r\n                [placeholder]=\"prefixText\"\r\n                [prefix]=\"prefixText\"\r\n        />\r\n        <button\r\n                *ngIf=\"showClearBtn || (isValuePresent() && formControl.enabled)\"\r\n                [tabIndex]=\"-1\"\r\n                matSuffix\r\n                mat-icon-button\r\n                aria-label=\"Очистить\"\r\n                (click)=\"resetControl(formControl)\"\r\n        >\r\n            <mat-icon>close</mat-icon>\r\n        </button>\r\n        <span *ngIf=\"suffix\" matTextSuffix [innerHtml]=\"suffix\"></span>\r\n    </mat-form-field>\r\n</sfs-custom-field>\r\n";

/***/ }),

/***/ 3813:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/form-buttons/form-buttons.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex justify-content-end\">\r\n    <div id=\"secondary-button\" [matTooltip]=\"secondaryButtonDisabledTooltip\"\r\n         [matTooltipDisabled]=\"!secondaryButtonDisabled\">\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"secondaryButtonDisabled\"\r\n                (click)=\"onSecondaryClick()\">\r\n            {{ secondaryButtonText }}\r\n        </button>\r\n    </div>\r\n    <div id=\"main-button\" [matTooltip]=\"mainButtonDisabledTooltip\"\r\n         [matTooltipDisabled]=\"!mainButtonDisabled\">\r\n        <button mat-raised-button\r\n                color=\"primary\"\r\n                [disabled]=\"mainButtonDisabled\"\r\n                (click)=\"onMainClick()\">\r\n            {{ mainButtonText }}\r\n        </button>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 4838:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/form/custom-field/custom-field.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-content></ng-content>\r\n<div *ngIf=\"customControl\" class=\"error-container\">\r\n\r\n    <mat-error *ngIf=\"customControl.hasError('required') && customControl.touched && requiredError.length\">{{ requiredError }} </mat-error>\r\n    <mat-error *ngIf=\"customControl.hasError('maxlength') && maxlengthError.length\">{{ maxlengthError }} </mat-error>\r\n\r\n    <mat-error *ngIf=\"customControl.hasError('minlength') && minlengthError.length\">{{ minlengthError }} </mat-error>\r\n\r\n    <mat-error *ngIf=\"customControl.hasError('max') && maxError\"> {{ maxError }} </mat-error>\r\n\r\n    <mat-error *ngIf=\"customControl.hasError('min') && minError\"> {{ minError }} </mat-error>\r\n\r\n    <mat-error *ngIf=\"customControl.value && errorPattern && !patternErrorDisable\">{{ patternError }} </mat-error>\r\n\r\n    <mat-error *ngIf=\"customControl.hasError('notFound')\" class=\"error\">\r\n        {{ customControl.getError('notFound') }}\r\n    </mat-error>\r\n\r\n    <mat-error *ngIf=\"customControl.hasError('arbitraryError')\" class=\"error\">\r\n        {{ customControl.getError('arbitraryError') }}\r\n    </mat-error>\r\n\r\n    <mat-error *ngIf=\"customControl.hasError('errorFromServer')\">{{ customControl.getError('errorFromServer') }}</mat-error>\r\n    <div [ngClass]=\"[errorListStyle]\">\r\n        <ng-container *ngIf=\"customControl.hasError('errorListFromServer')\" ngProjectAs=\"mat-error\">\r\n            <mat-error *ngFor=\"let error of customControl.getError('errorListFromServer')\">{{ error }}</mat-error>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map