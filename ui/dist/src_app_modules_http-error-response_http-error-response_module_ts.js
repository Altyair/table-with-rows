(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["src_app_modules_http-error-response_http-error-response_module_ts"],{

/***/ 9120:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/http-error-response/http-error-response-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpErrorResponseRoutingModule: () => (/* binding */ HttpErrorResponseRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _http_error_response_http_error_response_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-error-response/http-error-response.component */ 2600);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _http_error_response_http_error_response_component__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponseComponent
  }]
}];
let HttpErrorResponseRoutingModule = class HttpErrorResponseRoutingModule {};
HttpErrorResponseRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HttpErrorResponseRoutingModule);


/***/ }),

/***/ 6337:
/*!***************************************************************************!*\
  !*** ./src/app/modules/http-error-response/http-error-response.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpErrorResponseModule: () => (/* binding */ HttpErrorResponseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _http_error_response_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-error-response-routing.module */ 9120);
/* harmony import */ var _http_error_response_http_error_response_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-error-response/http-error-response.component */ 2600);





let HttpErrorResponseModule = class HttpErrorResponseModule {};
HttpErrorResponseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_http_error_response_http_error_response_component__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponseComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _http_error_response_routing_module__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponseRoutingModule]
})], HttpErrorResponseModule);


/***/ }),

/***/ 2600:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/http-error-response/http-error-response/http-error-response.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpErrorResponseComponent: () => (/* binding */ HttpErrorResponseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _http_error_response_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-error-response.component.html?ngResource */ 8180);
/* harmony import */ var _http_error_response_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-error-response.component.scss?ngResource */ 1086);
/* harmony import */ var _http_error_response_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_http_error_response_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);





let HttpErrorResponseComponent = class HttpErrorResponseComponent {
  titleService;
  constructor(titleService) {
    this.titleService = titleService;
  }
  ngOnInit() {
    this.titleService.setTitle('Ошибка');
  }
  static ctorParameters = () => [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title
  }];
};
HttpErrorResponseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'sfs-http-error-response',
  template: _http_error_response_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_http_error_response_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HttpErrorResponseComponent);


/***/ }),

/***/ 1086:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/http-error-response/http-error-response/http-error-response.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/** 1600 и выше */
/** 1280 – 1599 */
/** 1024 – 1279 */
/** 768 – 1023 */
/** 360 – 767 */
.http-error__wrapper {
  width: 600px;
  height: 200px;
  margin: 200px auto auto auto;
  font-size: 18px;
}
.http-error__title {
  width: 50%;
  color: #808080;
  margin: 0 auto 32px auto;
}`, "",{"version":3,"sources":["webpack://./../../../my%20projects/table-with-rows/ui/src/app/modules/http-error-response/http-error-response/http-error-response.component.scss","webpack://./src/scss/variables.scss","webpack://./src/app/modules/http-error-response/http-error-response/http-error-response.component.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACoBhB,iBAAA;AAEA,iBAAA;AAEA,iBAAA;AAEA,gBAAA;AAEA,eAAA;ACzBI;EACI,YAAA;EACA,aAAA;EACA,4BAAA;EACA,eAAA;AFIR;AEFI;EACI,UAAA;EACA,cDVM;ECWN,wBAAA;AFIR","sourcesContent":["@charset \"UTF-8\";\n/** 1600 и выше */\n/** 1280 – 1599 */\n/** 1024 – 1279 */\n/** 768 – 1023 */\n/** 360 – 767 */\n.http-error__wrapper {\n  width: 600px;\n  height: 200px;\n  margin: 200px auto auto auto;\n  font-size: 18px;\n}\n.http-error__title {\n  width: 50%;\n  color: #808080;\n  margin: 0 auto 32px auto;\n}","$dark-color: #494949;\r\n$light-color: #808080;\r\n$primary-color: #008e1f;\r\n$warn-color: #f44336;\r\n$block-color: #d9001b;\r\n$accent-color: #fcd703;\r\n$border-color: #d8d8d8;\r\n\r\n//grid\r\n$grid-breakpoint-xl: 1600px;\r\n$grid-breakpoint-lgx: 1350px;\r\n$grid-breakpoint-lg: 1280px;\r\n$grid-breakpoint-md: 1024px;\r\n$grid-breakpoint-sm: 768px;\r\n$grid-breakpoint-xs: 360px;\r\n$grid-breakpoint-lg-max: 1599px;\r\n$grid-breakpoint-md-max: 1279px;\r\n$grid-breakpoint-sm-max: 1023px;\r\n$grid-breakpoint-xs-max: 767px;\r\n\r\n/** 1600 и выше */\r\n$grid-gutter-xl: 12px;\r\n/** 1280 – 1599 */\r\n$grid-gutter-lg: 12px;\r\n/** 1024 – 1279 */\r\n$grid-gutter-md: 12px;\r\n/** 768 – 1023 */\r\n$grid-gutter-sm: 12px;\r\n/** 360 – 767 */\r\n$grid-gutter-xs: 12px;\r\n\r\n$container-padding-xl: 12px;\r\n$container-width-xl: 1480px + $container-padding-xl * 2;\r\n$container-padding-lg: 24px;\r\n$container-padding-md: 24px;\r\n$container-padding-sm: 20px;\r\n$container-padding-xs: 16px;\r\n","@import 'src/scss/variables';\r\n\r\n.http-error {\r\n    &__wrapper {\r\n        width: 600px;\r\n        height: 200px;\r\n        margin: 200px auto auto auto;\r\n        font-size: 18px;\r\n    }\r\n    &__title {\r\n        width: 50%;\r\n        color: $light-color;\r\n        margin: 0 auto 32px auto;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8180:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/http-error-response/http-error-response/http-error-response.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"http-error__wrapper\">\r\n    <div class=\"http-error__title\">Список пользователей</div>\r\n    <div>Запрашиваемая вами страница не найдена или у вас нет к ней доступа.</div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_http-error-response_http-error-response_module_ts.js.map