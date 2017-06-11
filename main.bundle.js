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
exports.push([module.i, ".bg-container {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 40px;\r\n    box-sizing: border-box;\r\n    z-index: -2;\r\n}\r\n\r\n.bg {\r\n    height: 100%;\r\n    width: 100%;\r\n    /*background-color: #eee;*/\r\n    overflow: hidden;\r\n}\r\n\r\n.content-container {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 5000px;\r\n    padding: 80px;\r\n    box-sizing: border-box;\r\n    z-index: -1;\r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    opacity: 0.7;\r\n}\r\n\r\n.menubar {\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    /*margin-top: 400px;*/\r\n    /*left: 0%;*/\r\n    /*width: 1000px;\t*/\r\n    margin-left: 45px;\r\n    -webkit-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n    -webkit-transform-origin: left top 0;\r\n    transform-origin: left top 0;\r\n}\r\n\r\n.menubar ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-left: 40px;\r\n}\r\n\r\n.menubar ul li {\r\n    display: inline-block;\r\n}\r\n\r\n.menubar ul li span {\r\n    display: block;\r\n    line-height: 20px;\r\n    padding: 10px;\r\n    font-family: 'Poiret One', cursive;\r\n    color: #171717;\r\n    transition: 1000ms ease; \r\n    border-bottom: 5px solid rgb(255,255,255);\r\n    cursor: pointer;\r\n}\r\n\r\n.menubar ul li span:hover {\r\n    border-bottom-color:#888;\r\n    color: #888;\r\n}\r\n\r\n.menubar ul li span.home-btn {\r\n    font-family: 'Bungee Hairline', cursive;\r\n    background-color: #888;\r\n    color:#fff;\r\n}\r\n\r\n.menubar ul li span.home-btn:hover {\r\n    border-bottom-color: #888;\r\n}\r\n\r\n#canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.name-container {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 80px;\r\n}\r\n\r\n.name-container #name {\r\n    font-size: 60px;\r\n    font-family: 'Bungee Hairline', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"menubar\">\n  <ul>\n    <!-- about -->\n    <li>\n      <span class=\"home-btn\" (click)=\"redirect(0)\">JZ</span>\n    </li>\n    <!-- about -->\n    <li>\n      <span (click)=\"redirect(1)\">ABOUT</span>\n    </li>\n\n    <!--education-->\n    <li>\n      <span (click)=\"redirect(2)\">EDUCATION</span>\n    </li>\n    <!--working-->\n    <li>\n      <span (click)=\"redirect(3)\">WORKING</span>\n    </li>\n    <!--skill-->\n    <li>\n      <span (click)=\"redirect(4)\">SKILL</span>\n    </li>\n  </ul>\n</nav>\n\n<div class=\"content-container\">\n  <div class=\"content\"></div>\n</div>\n\n<div class=\"bg-container\">\n  <div #canvasParent class=\"bg\">\n    <!--<img src=\"./assets/img/triangle.jpg\" />-->\n    <canvas #canvas id=\"canvas\"></canvas>\n  </div>\n</div>\n\n<div class=\"name-container\">\n  <span id=\"name\">JIANAN ZHENG</span>\n</div>"

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
        this.minAlpha = 0.5;
        this.sectionHeight = 1000;
    }
    AppComponent.prototype.ngOnInit = function () {
        var canvas = this.canvasRef.nativeElement;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        var ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'overlay';
        // Draw the clip path that will mask everything else
        this.getTriangles();
        this.makeTriangles(1);
    };
    AppComponent.prototype.redirect = function (i) {
        var y = this.sectionHeight * i;
        this.scrollToY(y, Math.abs(y - window.pageYOffset) / 2, 1);
    };
    AppComponent.prototype.scrollToY = function (y, half, increment) {
        var _this = this;
        var diff = window.pageYOffset - y;
        var cdiff = Math.abs(diff);
        if (cdiff !== 0) {
            // const inc = Math.min(cdiff, increment);
            var sign_1 = diff > 0 ? -1 : 1;
            setTimeout(function () {
                window.scrollTo(0, window.pageYOffset + increment * sign_1);
                if (cdiff < half)
                    _this.scrollToY(y, half, Math.max(increment - 1, 1));
                else
                    _this.scrollToY(y, half, increment + 1);
            }, 20);
        }
    };
    AppComponent.prototype.onScrollEvent = function ($event) {
        var canvas = this.canvasRef.nativeElement;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var alpha = Math.max((window.outerHeight - window.pageYOffset) / window.outerHeight, this.minAlpha);
        this.makeTriangles(alpha);
    };
    AppComponent.prototype.makeTriangles = function (alpha) {
        for (var i = 0; i < this.triangles.length; i++) {
            this.makeTriangle(this.triangles[i], alpha);
        }
    };
    AppComponent.prototype.makeTriangle = function (triangle, alpha) {
        var canvas = this.canvasRef.nativeElement;
        var ctx = canvas.getContext('2d');
        ctx.globalAlpha = alpha;
        ctx.fillStyle = triangle.color;
        ctx.beginPath();
        ctx.moveTo(triangle.vs[0].x, triangle.vs[0].y);
        for (var i = 1; i < triangle.vs.length; i++) {
            ctx.lineTo(triangle.vs[i].x, triangle.vs[i].y);
        }
        ctx.lineTo(triangle.vs[0].x, triangle.vs[0].y);
        ctx.closePath();
        ctx.fill();
    };
    AppComponent.prototype.getTriangles = function () {
        this.triangles = new Array();
        var amount = 100;
        for (var i = 0; i < amount; i++) {
            var tri = this.getTriangle();
            this.triangles.push(tri);
        }
    };
    AppComponent.prototype.getTriangle = function () {
        var tri = new Triangle();
        var canvas = this.canvasRef.nativeElement;
        var stepw = Math.max(canvas.width, canvas.height) / 5;
        var steph = stepw;
        var coordinate = new Vertex(Math.floor((Math.random() * canvas.width) + 1), Math.floor((Math.random() * canvas.height) + 1));
        tri.vs.push(coordinate);
        tri.vs.push(new Vertex(coordinate.x + this.randomInt(0, stepw), coordinate.y + this.randomInt(0, steph)));
        tri.vs.push(new Vertex(coordinate.x + this.randomInt(0, stepw), coordinate.y + this.randomInt(0, steph)));
        // const colors = ['rgb(214, 144, 239)', 'rgb(119, 197, 219)'];
        var colors = ['rgb(240,240,240)', 'rgb(235,235,235)', 'rgb(230,230,230)', 'rgb(225,225,225)'];
        tri.color = colors[this.randomInt(0, colors.length - 1)];
        return tri;
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
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onScrollEvent", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

var Triangle = (function () {
    function Triangle() {
        this.vs = new Array();
    }
    return Triangle;
}());
var Vertex = (function () {
    function Vertex(x, y) {
        this.x = x;
        this.y = y;
    }
    return Vertex;
}());
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