webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 40px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.inner-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #eee;\r\n    overflow: hidden;\r\n}\r\n\r\n.container img {\r\n    opacity: 0.2;\r\n    width: 100%;\r\n}\r\n\r\n.right-sidebar {\r\n    position: absolute;\r\n    /*background: red;*/\r\n    top: 0;\r\n    left: 0%;\r\n    width: 100%;\r\n    /*transform-origin: left top;\r\n    -moz-transform-origin: left top;\r\n    -o-transform-origin: left top;\r\n    -ms-transform-origin: left top;\r\n     transform: rotate(90deg); \r\n    -moz-transform: rotate(90deg);\r\n    -o-transform: rotate(90deg);\r\n    -ms-transform: rotate(90deg);*/\r\n}\r\n\r\n.right-sidebar ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-left: 40px;\r\n    /*text-align: center;*/\r\n}\r\n\r\n.right-sidebar ul li {\r\n    display: inline-block;\r\n    /*float: left;\r\n    transform: rotate(90deg);\r\n\ttransform-origin: left top 0;*/\r\n}\r\n\r\n.right-sidebar ul li span {\r\n    display: block;\r\n    line-height: 20px;\r\n    padding: 10px;\r\n    font-family: 'Poiret One', cursive;\r\n    color: #171717;\r\n}\r\n\r\n#canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#name {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 80px;\r\n    font-size: 30px;\r\n    font-family: 'Bungee Hairline', cursive;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"right-sidebar\">\n  <ul>\n    <li>\n      <span>ABOUT</span>\n    </li>\n    <li>\n      <span>EDUCATION</span>\n    </li>\n    <li>\n      <span>WORKING</span>\n    </li>\n    <li>\n      <span>SKILL</span>\n    </li>\n  </ul>\n</nav>\n<div id=\"name\">\n  <span>JIANAN ZHENG</span>\n</div>\n<div class=\"container\">\n  <div #canvasParent class=\"inner-container\">\n    <!--<img src=\"./assets/img/triangle.jpg\" />-->\n    <canvas #canvas id=\"canvas\" width=\"1000px\" height=\"500px\"></canvas>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var canvas = this.canvasRef.nativeElement;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        var ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'overlay';
        // var colors = ['rgb(214, 144, 239)', 'rgb(119, 197, 219)']
        var colors = ['rgb(240,240,240)', 'rgb(235,235,235)', 'rgb(230,230,230)', 'rgb(225,225,225)'];
        // will make a feasable amount of triangles to fit the screen
        var amount = Math.floor((canvas.width * canvas.height) / 25000);
        // Draw the clip path that will mask everything else
        for (var i = 0; i < amount; i++) {
            this.makeTriangle(canvas, ctx, colors[this.randomInt(0, colors.length - 1)]);
        }
    };
    AppComponent.prototype.makeTriangle = function (canvas, ctx, fillColor) {
        var coordinates = this.getStart(canvas);
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        this.drawLines(canvas, ctx, coordinates);
        ctx.closePath();
        ctx.fill();
    };
    AppComponent.prototype.getStart = function (canvas) {
        var startArray = {};
        startArray["x"] = Math.floor((Math.random() * canvas.width) + 1);
        startArray["y"] = Math.floor((Math.random() * canvas.height) + 1);
        return startArray;
    };
    AppComponent.prototype.drawLines = function (canvas, ctx, coordinates) {
        var step = Math.floor(canvas.width / 4);
        ctx.moveTo(coordinates.x, coordinates.y);
        ctx.lineTo(coordinates.x + this.randomInt(-step, step), coordinates.y + this.randomInt(-step, step));
        ctx.lineTo(coordinates.x + this.randomInt(-step, step), coordinates.y + this.randomInt(-step, step));
        ctx.lineTo(coordinates.x, coordinates.y);
    };
    AppComponent.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "canvasRef", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map