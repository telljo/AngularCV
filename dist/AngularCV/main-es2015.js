(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n        <header>\r\n            <nav>\r\n                <a class=\"navLink\" routerLink=\"/pages/home\" routerLinkActive=\"active-link\">Home</a>\r\n                <a class=\"navLink\" routerLink=\"/pages/experience\" routerLinkActive=\"active-link\">Experience</a>\r\n                <a class=\"navLink\" routerLink=\"/pages/skills\" routerLinkActive=\"active-link\">Skills</a>\r\n                <a class=\"navLink\" routerLink=\"/pages/contact\" routerLinkActive=\"active-link\">Contact</a>\r\n              </nav>\r\n        </header>\r\n      \r\n      <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-wrapper\">\r\n\r\n    <div id=\"animateRoute\" [@routeAnimations]=\"prepareRoute(outlet)\">\r\n      <router-outlet (activate)=\"onActivate($event)\" id=\"outlet1\" #outlet=\"outlet\"></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <script type=\"text/javascript\" src=\"./../../../assets/scripts/smtp.js\"></script>\r\n<div id=\"contactform\">\r\n    \r\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\r\n        <input name=\"first\" ngModel required #first=\"ngModel\">\r\n        <input name=\"last\" ngModel>\r\n        <button>Submit</button>\r\n      </form>\r\n\r\n</div>\r\n\r\n    \r\n\r\n    <footer>\r\n        <h2>ME ON SOCIAL</h2>\r\n        <div id=\"socials\">\r\n            <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a>\r\n            <a href=\"https://www.facebook.com/josh.tell.5\" target=\"_blank\" class=\"fa1 fa fa-facebook\"></a>\r\n            <a href=\"https://github.com/jtell1997\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\r\n        </div>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/experience/experience.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/experience/experience.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n\r\n    <section class=\"intro\">\r\n            \r\n        <div id=\"container\">\r\n            <h2 class=\"title\">ABOUT ME</h2>\r\n            <hr class=\"breakLine\">\r\n        <div id=\"main\">\r\n            <div id=\"col1\">\r\n                    <p>\r\n                            I'm a {{CalculateAge()}} year old computer science graduate from the <a class=\"inText\" href=\"https://www.otago.ac.nz/\" target=\"_blank\">University of Otago.</a> \r\n                            I am currently working as an application developer at <a class=\"inText\" href=\"https://www.dxc.technology/\" target=\"_blank\">DXC Technology</a>\r\n                            After finishing my undergraduate degree in 2017, I immediately began my journey in the IT industry.\r\n                            \r\n                        </p>\r\n            </div>\r\n            <div id=\"col2\">\r\n                    <p>\r\n                            I have two years of experience in full stack software development. In my current role, I work closely with a team of highly experienced senior developers programming\r\n                             mainly in C# and using the .NET framework.\r\n                        </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </section>\r\n\r\n<div id=\"bottomsection\">\r\n    <section id=\"secondintro\">\r\n        \r\n        <h2 class=\"title\">WORK EXPERIENCE</h2>\r\n        <hr class=\"breakLine2\">\r\n        <!-- <button class=\"fa1 fa fa-chevron-down\" (click)=\"scroll(target)\"></button>   -->\r\n    </section>\r\n      \r\n      <section class=\"timeline\">\r\n        <div class=\"container\">\r\n      \r\n          <div class=\"timeline-img\"></div>\r\n\r\n          <div class=\"timeline-item\">           \r\n      \r\n            <div class=\"timeline-content timeline-card\">\r\n              <div class=\"timeline-img-header\">\r\n                <h2>Associate Application Developer</h2>\r\n              </div>\r\n              <div class=\"date\">11 FEB 2019 - PRESENT</div>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>\r\n              <a class=\"bnt-more\" href=\"javascript:void(0)\">More</a>\r\n            </div>\r\n      \r\n          </div>   \r\n          <div></div>\r\n      \r\n          <div class=\"timeline-img\"></div>\r\n          <div class=\"timeline-item\">\r\n      \r\n            \r\n      \r\n            <div class=\"timeline-content timeline-card\">\r\n              <div class=\"timeline-img-header\">\r\n                <h2>Global Mobility Services Engineer</h2>\r\n              </div>\r\n              <div class=\"date\">20 APRIL 2018 - 15 JAN 2019</div>\r\n              <p>Designed and developed 3 tier web application hosted in Azure. I used software which included ASP.NET Development in Microsoft Visual Studio, Azure SQL Database, and Azure Active Directory. Gained valuable real-world experience in developing a commercial website</p>\r\n              <a class=\"bnt-more\" href=\"javascript:void(0)\">More</a>\r\n            </div>\r\n      \r\n          </div>   \r\n\r\n          <div></div>\r\n\r\n          <div class=\"timeline-img\"></div>\r\n\r\n          <div class=\"timeline-item\">           \r\n      \r\n            <div class=\"timeline-content timeline-card\">\r\n              <div class=\"timeline-img-header\">\r\n                <h2>Card Title</h2>\r\n              </div>\r\n              <div class=\"date\">25 MAY 2016</div>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>\r\n              <a class=\"bnt-more\" href=\"javascript:void(0)\">More</a>\r\n            </div>\r\n      \r\n          </div>   \r\n\r\n          <div></div>\r\n          <div class=\"timeline-img\"></div>\r\n\r\n          <div class=\"timeline-item\">\r\n           \r\n            <div class=\"timeline-content timeline-card\">\r\n              <div class=\"timeline-img-header\">\r\n                <h2>Card Title</h2>\r\n              </div>\r\n              <div class=\"date\">25 MAY 2016</div>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>\r\n              <a class=\"bnt-more\" href=\"javascript:void(0)\">More</a>\r\n            </div>      \r\n          </div>       \r\n        </div>\r\n      </section>\r\n\r\n</div>\r\n\r\n    <footer>\r\n        <h2>ME ON SOCIAL</h2>\r\n        <div id=\"socials\">\r\n            <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a>\r\n            <a href=\"https://www.facebook.com/josh.tell.5\" target=\"_blank\" class=\"fa1 fa fa-facebook\"></a>\r\n            <a href=\"https://github.com/jtell1997\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\r\n        </div>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"content\">\r\n\r\n\r\n    <div class=\"main\">\r\n        <div class=\"topsection\">\r\n        <section>\r\n                <h2 style=\"cursor: default;\" class=\"name\">josh</h2>\r\n                <h2 style=\"cursor: default;\" class=\"name1\">TELL</h2>\r\n        </section>\r\n\r\n\r\n                <img src=\"../../../assets/Images/profile2.jpg\" height=\"200\" width=\"200\">\r\n\r\n        </div>\r\n\r\n\r\n            <h1>FULL-STACK APPLICATION DEVELOPER</h1>\r\n            \r\n            <div class=\"button_cont\" align=\"center\"><a class=\"example_c\" routerLink=\"/pages/experience\" routerLinkActive=\"active-link\"><span>View my work</span></a></div>\r\n    </div>\r\n\r\n\r\n    <footer>     \r\n        <h2>ME ON SOCIAL</h2>     \r\n        <div id=\"socials\">\r\n            <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a>\r\n            <a href=\"https://www.facebook.com/josh.tell.5\" target=\"_blank\" class=\"fa1 fa fa-facebook\"></a>\r\n            <a href=\"https://github.com/jtell1997\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\r\n        </div>\r\n      </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pages.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pages-gallery></pages-gallery>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/skills/skills.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/skills/skills.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n\r\n    <h2>SKILLS</h2>\r\n    \r\n    </div>  "

/***/ }),

/***/ "./src/animations/slide-in-out.ts":
/*!****************************************!*\
  !*** ./src/animations/slide-in-out.ts ***!
  \****************************************/
/*! exports provided: SlideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInOutAnimation", function() { return SlideInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const SlideInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Contact => *,  * => Home, Skills => Experience', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => Contact, Home => *,Experience => Skills', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/skills/skills.component */ "./src/app/pages/skills/skills.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/pages/experience/experience.component.ts");








const routes = [
    {
        path: 'pages',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_6__["PagesComponent"],
        children: [
            {
                path: 'home',
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                data: { animation: 'Home' }
            },
            {
                path: 'experience',
                component: _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                data: { animation: 'Experience' }
            },
            {
                path: 'skills',
                component: _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"],
                data: { animation: 'Skills' }
            },
            {
                path: 'contact',
                component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
                data: { animation: 'Contact' }
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'pages/home',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  height: 100%;\n}\nheader {\n  width: 100%;\n  position: fixed;\n  z-index: 10;\n  background-color: #2c3e50;\n  height: 60px;\n}\nnav {\n  width: 500px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 60px;\n}\n.navLink {\n  text-decoration: none;\n  height: 100%;\n  width: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font: 13px/1.4 Helvetica, arial, freesans, clean, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 700;\n}\n.active-link {\n  background-color: #1a242f;\n}\n.navLink:hover {\n  color: #007bb5;\n}\np a,\np a:visited {\n  line-height: inherit;\n}\n/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQU87QUNDWDtBRENBO0VBQ0ksV0FBTTtFQUNOLGVBQVM7RUFDVCxXQUFRO0VBQ1IseUJBQWlCO0VBQ2pCLFlBQU87QUNDWDtBREFBO0VBQ0ksWUFBTztFQUNQLFlBQU87RUFDUCxvQkFBUTtFQUFSLGFBQVE7RUFDUiw4QkFBZ0I7VUFBaEIsNkJBQWdCO0VBQ2hCLHlCQUFZO1VBQVosbUJBQVk7RUFDWixZQUFPO0FDRVg7QUREQTtFQUNHLHFCQUFnQjtFQUNoQixZQUFPO0VBQ1AsWUFBTTtFQUNOLG9CQUFRO0VBQVIsYUFBUTtFQUNSLHdCQUFnQjtVQUFoQix1QkFBZ0I7RUFDaEIseUJBQVk7VUFBWixtQkFBWTtFQUNaLFdBQU07RUFDTix5QkFBZTtFQUNmLG1CQUFlO0VBQ2YsaUdBQXdCO0VBQ3hCLGdCQUFZO0FDR2Y7QUREQTtFQUNJLHlCQUFtQjtBQ0d2QjtBRERBO0VBQ0ksY0FBTTtBQ0dWO0FEREE7O0VBQ0ksb0JBQVk7QUNJaEI7QUFDQSxvREFBb0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciBcclxuICAgIGhlaWdodCAxMDAlXHJcblxyXG5oZWFkZXIgXHJcbiAgICB3aWR0aCAxMDAlXHJcbiAgICBwb3NpdGlvbiBmaXhlZFxyXG4gICAgei1pbmRleCAxMFxyXG4gICAgYmFja2dyb3VuZC1jb2xvciAjMmMzZTUwXHJcbiAgICBoZWlnaHQgNjBweFxyXG5uYXZcclxuICAgIHdpZHRoOiA1MDBweFxyXG4gICAgbWFyZ2luIGF1dG9cclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50IHNwYWNlLWV2ZW5seVxyXG4gICAgYWxpZ24taXRlbXMgY2VudGVyXHJcbiAgICBoZWlnaHQgNjBweFxyXG4ubmF2TGlua1xyXG4gICB0ZXh0LWRlY29yYXRpb24gbm9uZVxyXG4gICBoZWlnaHQgMTAwJVxyXG4gICB3aWR0aCAxMjBweFxyXG4gICBkaXNwbGF5IGZsZXhcclxuICAganVzdGlmeS1jb250ZW50IGNlbnRlclxyXG4gICBhbGlnbi1pdGVtcyBjZW50ZXJcclxuICAgY29sb3IgI2ZmZmZmZlxyXG4gICB0ZXh0LXRyYW5zZm9ybSB1cHBlcmNhc2U7XHJcbiAgIGxldHRlci1zcGFjaW5nIDFweDtcclxuICAgZm9udDogMTNweC8xLjQgSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgIGZvbnQtd2VpZ2h0IDcwMFxyXG5cclxuLmFjdGl2ZS1saW5rXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzFhMjQyZlxyXG5cclxuLm5hdkxpbms6aG92ZXJcclxuICAgIGNvbG9yICMwMDdiYjVcclxuXHJcbnAgYSwgcCBhOnZpc2l0ZWQgIFxyXG4gICAgbGluZS1oZWlnaHQgaW5oZXJpdFxyXG5cclxuIiwiI3dyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxubmF2IHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubmF2TGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udDogMTNweC8xLjQgSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uYWN0aXZlLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNDJmO1xufVxuLm5hdkxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwN2JiNTtcbn1cbnAgYSxcbnAgYTp2aXNpdGVkIHtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AngularCV';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/skills/skills.component */ "./src/app/pages/skills/skills.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/pages/experience/experience.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
            _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"],
            _pages_pages_component__WEBPACK_IMPORTED_MODULE_12__["PagesComponent"],
            _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/gallery/gallery.component.styl":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery-wrapper {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n#animateRoute {\n  height: 100%;\n  background-color: #008f95;\n}\n/*# sourceMappingURL=src/app/gallery/gallery.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBTTtFQUNOLFlBQU87RUFDUCxvQkFBUTtFQUFSLGFBQVE7RUFDUiw0QkFBZTtFQUFmLDZCQUFlO1VBQWYsc0JBQWU7QUNBbkI7QURFQTtFQUNJLFlBQU87RUFDUCx5QkFBa0I7QUNBdEI7QUFDQSxnRUFBZ0UiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ZlZWwgZnJlZSB0byBtZXNzIGFyb3VuZCB3aXRoIHRoaXMgb25lXHJcbi5nYWxsZXJ5LXdyYXBwZXJcclxuICAgIHdpZHRoIDEwMCVcclxuICAgIGhlaWdodCAxMDAlXHJcbiAgICBkaXNwbGF5IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxyXG5cclxuI2FuaW1hdGVSb3V0ZVxyXG4gICAgaGVpZ2h0IDEwMCVcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhmOTU7IiwiLmdhbGxlcnktd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jYW5pbWF0ZVJvdXRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Zjk1O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _animations_slide_in_out__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/slide-in-out */ "./src/animations/slide-in-out.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let GalleryComponent = class GalleryComponent {
    constructor(router) {
        this.router = router;
        this.subs = [];
    }
    ngOnInit() {
    }
    switchState(pageDestination) {
        if (window.pageYOffset > 0) {
            let scrollToTop = window.setInterval(() => {
                let pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop);
                }
            }, 20);
        }
        setTimeout(() => {
            if (window.pageYOffset > 0) {
                this.switchState(pageDestination);
            }
        }, 20);
        this.router.navigate(['./pages/' + pageDestination]);
    }
    prepareRoute(outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animation']);
    }
    onActivate(event) {
        if (window.pageYOffset > 0) {
            let scrollToTop = window.setInterval(() => {
                let pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop);
                }
            }, 20);
        }
        setTimeout(() => {
            if (window.pageYOffset > 0) {
                this.onActivate(event);
            }
        }, 20);
    }
};
GalleryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pages-gallery',
        template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('switchState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('pay', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    width: '14.9rem',
                    marginLeft: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('transfer', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    width: '18.8rem',
                    marginLeft: '26.7%'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('dispute', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    width: '17.1rem',
                    marginLeft: '53.7%'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('help', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    width: '13.8rem',
                    marginLeft: '80.2%'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.35s')])
            ]),
            _animations_slide_in_out__WEBPACK_IMPORTED_MODULE_3__["SlideInOutAnimation"]
        ],
        styles: [__webpack_require__(/*! ./gallery.component.styl */ "./src/app/gallery/gallery.component.styl")]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/pages/contact/contact.component.styl":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.styl ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  background-color: #008f95;\n  text-align: center;\n  min-height: 100%;\n}\n#contactform {\n  height: 1000px;\n  margin-top: 200px;\n}\n/*# sourceMappingURL=src/app/pages/contact/contact.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVE7RUFBUixhQUFRO0VBQ1IsNEJBQWU7RUFBZiw2QkFBZTtVQUFmLHNCQUFlO0VBQ2YsWUFBTztFQUNQLHlCQUFpQjtFQUNqQixrQkFBVztFQUNYLGdCQUFXO0FDQ2Y7QURDQTtFQUNJLGNBQU87RUFDUCxpQkFBVztBQ0NmO0FBQ0Esc0VBQXNFIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnRcclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXHJcbiAgICBtYXJnaW4gYXV0b1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciAjMDA4Zjk1XHJcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxyXG4gICAgbWluLWhlaWdodCAxMDAlXHJcblxyXG4jY29udGFjdGZvcm1cclxuICAgIGhlaWdodCAxMDAwcHhcclxuICAgIG1hcmdpbi10b3AgMjAwcHgiLCIjY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGY5NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuI2NvbnRhY3Rmb3JtIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_scripts_smtp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../assets/scripts/smtp.js */ "./src/assets/scripts/smtp.js");
/* harmony import */ var _assets_scripts_smtp_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_smtp_js__WEBPACK_IMPORTED_MODULE_2__);


 //file path may change → 
let ContactComponent = class ContactComponent {
    constructor() {
    }
    ngOnInit() {
    }
    onSubmit(f) {
        Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'jtell1997@gmail.com',
            Password: 'B346AD7B68FC87769A8AECF4765141085C05',
            To: 'jtell1997@gmail.com',
            From: 'jtell1997@gmail.com',
            Subject: 'subject',
            Body: `
    <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${f.value} <br /> <b>Email: </b>    <br /> <b>Subject: </b>    <br /> <b>Message:</b> <br />     <br><br> <b>~End of Message.~</b> `
        }).then(message => { alert(message); f.resetForm(); });
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.styl */ "./src/app/pages/contact/contact.component.styl")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/pages/experience/experience.component.styl":
/*!************************************************************!*\
  !*** ./src/app/pages/experience/experience.component.styl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  background-color: #008f95;\n  text-align: center;\n  min-height: 100%;\n}\n*,\n*::before,\n*::after {\n  margin: 0;\n  box-sizing: border-box;\n}\n.fa1 {\n  width: 54px;\n}\nbody {\n  font: normal 16px/1.5 \"Helvetica Neue\", sans-serif;\n  background: #48b379;\n  color: #fff;\n  overflow-x: hidden;\n  padding-bottom: 50px;\n}\n/* INTRO SECTION\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.intro {\n  background: #2a4494;\n  height: 721px;\n  padding-top: 60px;\n}\n#container {\n  margin-top: 170px;\n}\n#secondintro {\n  padding-top: 100px;\n}\n.container {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\nh1 {\n  font-weight: 100 !important;\n  text-transform: capitalize;\n  font-size: 55px;\n  color: #fff;\n  margin-bottom: 20px;\n}\n.logo {\n  float: left;\n}\nh2 {\n  color: #fff;\n  font-size: 25px;\n}\nh3 {\n  font-family: 'museo-sans', sans-serif;\n  text-transform: uppercase;\n  font-size: 30px;\n  font-weight: 900;\n  color: #fff;\n}\np {\n  font-family: 'ff-tisa-web-pro', serif;\n  font-weight: 400;\n  font-size: 20px;\n  color: #fff;\n  line-height: 1.5;\n  text-align: justify;\n  text-justify: auto;\n}\n.inText {\n  font-family: 'ff-tisa-web-pro', serif;\n  font-weight: 400;\n  font-style: italic;\n  font-size: 20px;\n  color: #fff;\n  line-height: 1.5;\n}\na:hover {\n  color: #008f95;\n}\n.title {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 80px;\n  margin: 0px;\n  margin-top: 20px;\n  color: #fff;\n}\n#main {\n  width: 1050px;\n  margin: auto;\n  margin-top: 30px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.breakLine {\n  margin: 25px auto 30px;\n  padding: 0;\n  max-width: 300px;\n  border: 0;\n  border-top: solid 5px;\n  border-color: #fff;\n  text-align: center;\n}\n.breakLine2 {\n  margin: 25px auto 30px;\n  padding: 0;\n  max-width: 540px;\n  border: 0;\n  border-top: solid 5px;\n  border-color: #fff;\n  text-align: center;\n}\n#col1 {\n  width: 450px;\n}\n#col2 {\n  width: 450px;\n}\n#bottomsection {\n  background: #7ec8ed;\n}\nsection {\n  padding: 40px 0;\n}\nhtml,\nbody {\n  overflow-x: hidden;\n}\nbody {\n  font-family: 'Roboto';\n  font-size: 17px;\n  font-weight: 400;\n  background-color: #eee;\n}\nh1 {\n  font-size: 200%;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-weight: 400;\n}\nheader {\n  background: #3f51b5;\n  color: #fff;\n  padding: 150px 0;\n}\nheader p {\n  font-family: 'Allura';\n  color: rgba(255,255,255,0.2);\n  margin-bottom: 0;\n  font-size: 60px;\n  margin-top: -30px;\n}\n.timeline {\n  position: relative;\n}\n.timeline::before {\n  content: '';\n  background: #c5cae9;\n  width: 5px;\n  height: 95%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.timeline-item {\n  width: 100%;\n  margin-bottom: 70px;\n}\n.timeline-item:nth-child(even) .timeline-content {\n  float: right;\n  padding: 40px 30px 10px 30px;\n}\n.timeline-item:nth-child(even) .timeline-content .date {\n  right: auto;\n  left: 0;\n}\n.timeline-item:nth-child(even) .timeline-content::after {\n  content: '';\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  left: -15px;\n  border-width: 10px 15px 10px 0;\n  border-color: transparent #c5cae9 transparent transparent;\n}\n.timeline-item:nth-child(odd) .timeline-content {\n  float: left;\n  padding: 40px 30px 10px 30px;\n}\n.timeline-item:nth-child(odd) .timeline-content .date {\n  right: auto;\n  left: 0;\n}\n.timeline-item:nth-child(odd) .timeline-content::after {\n  content: '';\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  right: -15px;\n  border-width: 10px 0 10px 15px;\n  border-color: transparent transparent transparent #c5cae9;\n}\n.timeline-item::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.timeline-content {\n  position: relative;\n  width: 45%;\n  padding: 10px 30px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 20px 25px -15px rgba(0,0,0,0.3);\n}\n.timeline-content::after {\n  content: '';\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  right: -15px;\n  border-width: 10px 0 10px 15px;\n  border-color: transparent transparent transparent #c5cae9;\n}\n.timeline-img {\n  width: 30px;\n  height: 30px;\n  background: #3f51b5;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  margin-top: 25px;\n  margin-left: -15px;\n}\n.bnt-more {\n  background: #3f51b5;\n  color: #fff;\n  padding: 8px 20px;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 10px;\n  display: inline-block;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px -1px rgba(0,0,0,0.6);\n}\n.bnt-more:hover,\n.bnt-more:active,\n.bnt-more:focus {\n  background: #3949a3;\n  color: #fff;\n  text-decoration: none;\n}\n.timeline-card {\n  padding: 0 !important;\n}\n.timeline-card p {\n  padding: 0 20px;\n  color: #000;\n  background-color: #fff;\n}\n.timeline-card a {\n  margin-left: 20px;\n}\n.timeline-item:nth-child(2) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('dxc_logo.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('dxc_logo.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-item:nth-child(5) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('anzLogo.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('anzLogo.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-item:nth-child(8) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('gocloudpng.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('gocloudpng.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-item:nth-child(11) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('dxc_logo.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('dxc_logo.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-img-header {\n  height: 200px;\n  position: relative;\n  margin-bottom: 20px;\n}\n.timeline-img-header h2 {\n  color: #fff;\n  position: absolute;\n  bottom: 5px;\n  left: 20px;\n}\nblockquote {\n  margin-top: 30px;\n  color: #757575;\n  border-left-color: #3f51b5;\n  padding: 0 20px;\n}\n.date {\n  background: #1d3461;\n  display: inline-block;\n  color: #fff;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n/* EFFECTS\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.timeline-item {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n.timeline-item:nth-child(odd) {\n  -webkit-transform: translate3d(-200px, 0, 0);\n          transform: translate3d(-200px, 0, 0);\n}\n.timeline-item:nth-child(even) {\n  -webkit-transform: translate3d(200px, 0, 0);\n          transform: translate3d(200px, 0, 0);\n}\n.timeline-item.in-view {\n  -webkit-transform: none;\n          transform: none;\n  visibility: visible;\n  opacity: 1;\n}\n@media screen and (max-width: 768px) {\n  .timeline::before {\n    left: 50px;\n  }\n  .timeline .timeline-img {\n    left: 50px;\n  }\n  .timeline .timeline-content {\n    max-width: 100%;\n    width: auto;\n    margin-left: 70px;\n  }\n  .timeline .timeline-item:nth-child(even) .timeline-content {\n    float: none;\n  }\n  .timeline .timeline-item:nth-child(odd) .timeline-content::after {\n    content: '';\n    position: absolute;\n    border-style: solid;\n    width: 0;\n    height: 0;\n    top: 30px;\n    left: -15px;\n    border-width: 10px 15px 10px 0;\n    border-color: transparent #f5f5f5 transparent transparent;\n  }\n}\n/*# sourceMappingURL=src/app/pages/experience/experience.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9zcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVE7RUFBUixhQUFRO0VBQ1IsNEJBQWU7RUFBZiw2QkFBZTtVQUFmLHNCQUFlO0VBQ2YsWUFBTztFQUNQLHlCQUFpQjtFQUNqQixrQkFBVztFQUNYLGdCQUFXO0FDQ2Y7QURBQTs7O0VBR0UsU0FBUTtFQUNSLHNCQUFZO0FDRWQ7QURDQTtFQUVFLFdBQU87QUNBVDtBREdBO0VBQ0Usa0RBQXNDO0VBQ3RDLG1CQUFZO0VBQ1osV0FBTztFQUNQLGtCQUFZO0VBQ1osb0JBQWdCO0FDRGxCO0FERUc7b0RDQWlEO0FER3BEO0VBQ0UsbUJBQVk7RUFDWixhQUFPO0VBQ1AsaUJBQVk7QUNEZDtBRElBO0VBQ0UsaUJBQVc7QUNGYjtBRElBO0VBQ0Usa0JBQVk7QUNGZDtBREtBO0VBQ0UsVUFBTztFQUNQLGlCQUFXO0VBQ1gsY0FBUTtFQUNSLGtCQUFZO0FDSGQ7QURNQTtFQUNJLDJCQUFhO0VBQ2IsMEJBQWdCO0VBQ2hCLGVBQVc7RUFDWCxXQUFNO0VBQ04sbUJBQWU7QUNKbkI7QURPQTtFQUNJLFdBQU07QUNMVjtBRE9BO0VBQ0UsV0FBTztFQUNQLGVBQVc7QUNMYjtBRE9BO0VBQ0kscUNBQXlCO0VBQ3pCLHlCQUFnQjtFQUNoQixlQUFXO0VBQ1gsZ0JBQWE7RUFDYixXQUFNO0FDTFY7QURPQTtFQUNFLHFDQUE4QjtFQUM5QixnQkFBYTtFQUNiLGVBQVc7RUFDWCxXQUFNO0VBQ04sZ0JBQWE7RUFDYixtQkFBWTtFQUNaLGtCQUFjO0FDTGhCO0FET0E7RUFDRSxxQ0FBOEI7RUFDOUIsZ0JBQWE7RUFDYixrQkFBWTtFQUNaLGVBQVc7RUFDWCxXQUFNO0VBQ04sZ0JBQWE7QUNMZjtBRE9BO0VBQ0UsY0FBTTtBQ0xSO0FET0E7RUFDSSwyQ0FBc0I7RUFDdEIsa0JBQVk7RUFDWixnQkFBYTtFQUNiLGVBQVU7RUFDVixXQUFRO0VBQ1IsZ0JBQVc7RUFDWCxXQUFNO0FDTFY7QURPQTtFQUNFLGFBQU07RUFDTixZQUFPO0VBQ1AsZ0JBQVc7RUFDWCxrQkFBWTtFQUNaLG9CQUFRO0VBQVIsYUFBUTtFQUNSLDhCQUFnQjtFQUFoQiw2QkFBZ0I7VUFBaEIsbUJBQWdCO0VBQ2hCLDhCQUFpQjtVQUFqQiw2QkFBaUI7QUNMbkI7QURPQTtFQUNJLHNCQUFRO0VBQ1IsVUFBUztFQUNULGdCQUFXO0VBQ1gsU0FBUTtFQUNSLHFCQUFZO0VBQ1osa0JBQWM7RUFDZCxrQkFBWTtBQ0xoQjtBRE9BO0VBQ0ksc0JBQVE7RUFDUixVQUFTO0VBQ1QsZ0JBQVc7RUFDWCxTQUFRO0VBQ1IscUJBQVk7RUFDWixrQkFBYztFQUNkLGtCQUFZO0FDTGhCO0FET0E7RUFDSSxZQUFNO0FDTFY7QURPQTtFQUNJLFlBQU07QUNMVjtBRE9BO0VBQ0UsbUJBQVc7QUNMYjtBRFNBO0VBQ0UsZUFBUztBQ1BYO0FEVUE7O0VBQ0Usa0JBQVk7QUNQZDtBRFVBO0VBQ0UscUJBQWE7RUFDYixlQUFXO0VBQ1gsZ0JBQWE7RUFDYixzQkFBa0I7QUNScEI7QURXQTtFQUNFLGVBQVc7RUFDWCx5QkFBZ0I7RUFDaEIsbUJBQWdCO0VBQ2hCLGdCQUFhO0FDVGY7QURZQTtFQUNDLG1CQUFZO0VBQ1osV0FBTztFQUNQLGdCQUFTO0FDVlY7QURZQztFQUNDLHFCQUFhO0VBQ2IsNEJBQTZCO0VBQzdCLGdCQUFlO0VBQ2YsZUFBVztFQUNYLGlCQUFZO0FDVmQ7QURlQTtFQUVDLGtCQUFVO0FDZFg7QURnQkM7RUFDQyxXQUFTO0VBQ1QsbUJBQVk7RUFDWixVQUFPO0VBQ1AsV0FBUTtFQUNSLGtCQUFVO0VBQ1YsU0FBTTtFQUNOLG1DQUEwQjtVQUExQiwyQkFBMEI7QUNkNUI7QURrQkE7RUFDQyxXQUFPO0VBQ1AsbUJBQWU7QUNoQmhCO0FEb0JFO0VBQ0MsWUFBTztFQUNQLDRCQUFTO0FDbEJaO0FEb0JHO0VBQ0MsV0FBTztFQUNQLE9BQU07QUNsQlY7QURxQkc7RUFDQyxXQUFTO0VBQ1Qsa0JBQVU7RUFDVixtQkFBYztFQUNkLFFBQU87RUFDUCxTQUFRO0VBQ1IsU0FBSztFQUNMLFdBQU07RUFDTiw4QkFBYztFQUNkLHlEQUFjO0FDbkJsQjtBRHlCRTtFQUNDLFdBQU87RUFDUCw0QkFBUztBQ3ZCWjtBRHlCRztFQUNDLFdBQU87RUFDUCxPQUFNO0FDdkJWO0FEMEJHO0VBQ0MsV0FBUztFQUNQLGtCQUFVO0VBQ1YsbUJBQWM7RUFDZCxRQUFPO0VBQ1AsU0FBUTtFQUNSLFNBQUs7RUFDTCxZQUFPO0VBQ1AsOEJBQWM7RUFDZCx5REFBYztBQ3hCcEI7QUQ2QkM7RUFDQyxXQUFTO0VBQ1QsY0FBUztFQUNULFdBQU87QUMzQlQ7QURnQ0E7RUFDQyxrQkFBVTtFQUNWLFVBQU87RUFDUCxrQkFBUztFQUNULGtCQUFlO0VBQ2YsZ0JBQVk7RUFDWiw2Q0FBWTtBQzlCYjtBRGdDQztFQUNDLFdBQVM7RUFDVCxrQkFBVTtFQUNWLG1CQUFjO0VBQ2QsUUFBTztFQUNQLFNBQVE7RUFDUixTQUFLO0VBQ0wsWUFBTztFQUNQLDhCQUFjO0VBQ2QseURBQWM7QUM5QmhCO0FEa0NBO0VBQ0MsV0FBTztFQUNQLFlBQVE7RUFDUixtQkFBWTtFQUNaLGtCQUFlO0VBQ2Ysa0JBQVU7RUFDVixTQUFNO0VBQ04sZ0JBQVk7RUFDWixrQkFBYTtBQ2hDZDtBRG1DQTtFQUNDLG1CQUFZO0VBQ1osV0FBTztFQUNQLGlCQUFTO0VBQ1QseUJBQWdCO0VBQ2hCLGVBQVc7RUFDWCxtQkFBZTtFQUNmLGdCQUFZO0VBQ1oscUJBQVM7RUFDVCxrQkFBZTtFQUNmLDBDQUFZO0FDakNiO0FEbUNDOzs7RUFDQyxtQkFBK0I7RUFDL0IsV0FBTztFQUNQLHFCQUFpQjtBQy9CbkI7QURvQ0E7RUFDQyxxQkFBUztBQ2xDVjtBRG9DQztFQUNDLGVBQVM7RUFDUCxXQUFPO0VBQ1Asc0JBQWlCO0FDbENyQjtBRHFDQztFQUNDLGlCQUFhO0FDbkNmO0FEd0NFO0VBQ0Msa0pBQTJEO0VBQTNELHdHQUEyRDtFQUMzRCx3QkFBaUI7QUN0Q3BCO0FEMENFO0VBQ0MsaUpBQTJEO0VBQTNELHVHQUEyRDtFQUMzRCx3QkFBaUI7QUN4Q3BCO0FENENFO0VBQ0Msb0pBQTJEO0VBQTNELDBHQUEyRDtFQUMzRCx3QkFBaUI7QUMxQ3BCO0FEOENFO0VBQ0Msa0pBQTJEO0VBQTNELHdHQUEyRDtFQUMzRCx3QkFBaUI7QUM1Q3BCO0FEZ0RBO0VBRUMsYUFBUTtFQUNSLGtCQUFVO0VBQ1YsbUJBQWU7QUMvQ2hCO0FEaURDO0VBQ0MsV0FBTztFQUNQLGtCQUFVO0VBQ1YsV0FBUTtFQUNSLFVBQU07QUMvQ1I7QURtREE7RUFDQyxnQkFBWTtFQUNaLGNBQU87RUFDUCwwQkFBbUI7RUFDbkIsZUFBUztBQ2pEVjtBRG9EQTtFQUNDLG1CQUFZO0VBQ1oscUJBQVM7RUFDVCxXQUFPO0VBQ1AsYUFBUztFQUNULGtCQUFVO0VBQ1YsTUFBSztFQUNMLFFBQU87QUNsRFI7QURxREE7b0RDbkRvRDtBRHNEcEQ7RUFDRSxrQkFBWTtFQUNaLFVBQVM7RUFDVCx3Q0FBWTtFQUFaLGdDQUFZO0FDcERkO0FEdURBO0VBQ0UsNENBQW1DO1VBQW5DLG9DQUFtQztBQ3JEckM7QUR3REE7RUFDRSwyQ0FBa0M7VUFBbEMsbUNBQWtDO0FDdERwQztBRHlEQTtFQUNFLHVCQUFXO1VBQVgsZUFBVztFQUNYLG1CQUFZO0VBQ1osVUFBUztBQ3ZEWDtBRDBEbUM7RUFJakM7SUFDQyxVQUFNO0VDM0RQO0VEOERBO0lBQ0MsVUFBTTtFQzVEUDtFRCtEQTtJQUNDLGVBQVc7SUFDWCxXQUFPO0lBQ1AsaUJBQWE7RUM3RGQ7RURvRUU7SUFDQyxXQUFPO0VDbEVWO0VEMkVHO0lBQ0MsV0FBUztJQUNULGtCQUFVO0lBQ1YsbUJBQWM7SUFDZCxRQUFPO0lBQ1AsU0FBUTtJQUNSLFNBQUs7SUFDTCxXQUFNO0lBQ04sOEJBQWM7SUFDZCx5REFBYztFQ3pFbEI7QUFDRjtBQUNBLDRFQUE0RSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50XHJcbiAgICBkaXNwbGF5IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxyXG4gICAgbWFyZ2luIGF1dG9cclxuICAgIGJhY2tncm91bmQtY29sb3IgIzAwOGY5NVxyXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcclxuICAgIG1pbi1oZWlnaHQgMTAwJVxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZhMVxyXG5cclxuICB3aWR0aDogNTRweFxyXG5cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQ6IG5vcm1hbCAxNnB4LzEuNSBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogIzQ4YjM3OVxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufSAgLyogSU5UUk8gU0VDVElPTlxyXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuXHJcbi5pbnRybyB7XHJcbiAgYmFja2dyb3VuZDogIzJBNDQ5NFxyXG4gIGhlaWdodCA3MjFweDtcclxuICBwYWRkaW5nLXRvcCA2MHB4XHJcbn1cclxuXHJcbiNjb250YWluZXIgXHJcbiAgbWFyZ2luLXRvcCAxNzBweFxyXG5cclxuI3NlY29uZGludHJvIHtcclxuICBwYWRkaW5nLXRvcCAxMDBweFxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICBjb2xvciB3aGl0ZVxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxvZ28gXHJcbiAgICBmbG9hdCBsZWZ0XHJcblxyXG5oMlxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbmgzXHJcbiAgICBmb250LWZhbWlseTogJ211c2VvLXNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDBcclxuICAgIGNvbG9yIHdoaXRlXHJcblxyXG5wXHJcbiAgZm9udC1mYW1pbHk6ICdmZi10aXNhLXdlYi1wcm8nLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvciB3aGl0ZVxyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB0ZXh0LWp1c3RpZnk6IGF1dG87XHJcblxyXG4uaW5UZXh0XHJcbiAgZm9udC1mYW1pbHk6ICdmZi10aXNhLXdlYi1wcm8nLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3Igd2hpdGVcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG5cclxuYTpob3ZlciBcclxuICBjb2xvciAjMDA4Zjk1XHJcblxyXG4udGl0bGVcclxuICAgIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7ICBcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemUgODBweFxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wIDIwcHhcclxuICAgIGNvbG9yIHdoaXRlXHJcblxyXG4jbWFpbiBcclxuICB3aWR0aCAxMDUwcHhcclxuICBtYXJnaW4gYXV0b1xyXG4gIG1hcmdpbi10b3AgMzBweFxyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG4gIGRpc3BsYXkgZmxleFxyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seVxyXG5cclxuLmJyZWFrTGluZVxyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4uYnJlYWtMaW5lMlxyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZVxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuI2NvbDEgXHJcbiAgICB3aWR0aCA0NTBweFxyXG5cclxuI2NvbDJcclxuICAgIHdpZHRoIDQ1MHB4XHJcblxyXG4jYm90dG9tc2VjdGlvblxyXG4gIGJhY2tncm91bmQgIzdlYzhlZFxyXG5cclxuLy8gVGltZWxpbmVcclxuXHJcbnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDQwcHggMDtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjAwJTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjM0Y1MUI1O1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdHBhZGRpbmc6IDE1MHB4IDA7XHJcblxyXG5cdHAge1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdBbGx1cmEnO1xyXG5cdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdGZvbnQtc2l6ZTogNjBweDtcclxuXHRcdG1hcmdpbi10b3A6IC0zMHB4O1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbi50aW1lbGluZSB7XHJcblxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0Jjo6YmVmb3JlIHtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0YmFja2dyb3VuZDogI0M1Q0FFOTtcclxuXHRcdHdpZHRoOiA1cHg7XHJcblx0XHRoZWlnaHQ6IDk1JTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHR9XHJcbn1cclxuXHJcbi50aW1lbGluZS1pdGVtIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG5cclxuXHQmOm50aC1jaGlsZChldmVuKSB7XHJcblxyXG5cdFx0LnRpbWVsaW5lLWNvbnRlbnQge1xyXG5cdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdHBhZGRpbmc6IDQwcHggMzBweCAxMHB4IDMwcHg7XHJcblxyXG5cdFx0XHQuZGF0ZSB7XHJcblx0XHRcdFx0cmlnaHQ6IGF1dG87XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Jjo6YWZ0ZXIge1xyXG5cdFx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0XHRcdHdpZHRoOiAwO1xyXG5cdFx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0XHR0b3A6IDMwcHg7XHJcblx0XHRcdFx0bGVmdDogLTE1cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAxMHB4IDE1cHggMTBweCAwO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2M1Y2FlOSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuICAmOm50aC1jaGlsZChvZGQpIHtcclxuXHJcblx0XHQudGltZWxpbmUtY29udGVudCB7XHJcblx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRwYWRkaW5nOiA0MHB4IDMwcHggMTBweCAzMHB4O1xyXG5cclxuXHRcdFx0LmRhdGUge1xyXG5cdFx0XHRcdHJpZ2h0OiBhdXRvO1xyXG5cdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCY6OmFmdGVyIHtcclxuXHRcdFx0XHRjb250ZW50OiAnJztcclxuXHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICBcdCAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdCAgICB3aWR0aDogMDtcclxuXHRcdCAgICBoZWlnaHQ6IDA7XHJcblx0XHQgICAgdG9wOiAzMHB4O1xyXG5cdFx0ICAgIHJpZ2h0OiAtMTVweDtcclxuXHRcdCAgICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDE1cHg7XHJcblx0XHQgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYzVjYWU5O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmOjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLnRpbWVsaW5lLWNvbnRlbnQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogNDUlO1xyXG5cdHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0Ym94LXNoYWRvdzogMCAyMHB4IDI1cHggLTE1cHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcblxyXG5cdCY6OmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0dG9wOiAzMHB4O1xyXG5cdFx0cmlnaHQ6IC0xNXB4O1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxNXB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYzVjYWU5O1xyXG5cdH1cclxufVxyXG5cclxuLnRpbWVsaW5lLWltZyB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJhY2tncm91bmQ6ICMzRjUxQjU7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLXRvcDogMjVweDtcclxuXHRtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuXHJcbi5ibnQtbW9yZSB7XHJcblx0YmFja2dyb3VuZDogIzNGNTFCNTtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRwYWRkaW5nOiA4cHggMjBweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRib3gtc2hhZG93OiAwIDFweCAzcHggLTFweCByZ2JhKDAsIDAsIDAsIC42KTtcclxuXHJcblx0Jjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xyXG5cdFx0YmFja2dyb3VuZDogZGFya2VuKCMzRjUxQjUsIDEwJSk7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR9XHJcblxyXG59XHJcblxyXG4udGltZWxpbmUtY2FyZCB7XHJcblx0cGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcblxyXG5cdHAge1xyXG5cdFx0cGFkZGluZzogMCAyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuXHR9XHJcblxyXG5cdGEge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0fVxyXG59XHJcblxyXG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoMikge1xyXG4gIC50aW1lbGluZS1pbWctaGVhZGVyIHtcclxuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsIC40KSksIHVybCgnc3JjXFxhc3NldHNcXEltYWdlc1xcZHhjX2xvZ28ucG5nJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRcdH1cclxufVxyXG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoNSkge1xyXG4gIC50aW1lbGluZS1pbWctaGVhZGVyIHtcclxuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsIC40KSksIHVybCgnc3JjXFxhc3NldHNcXEltYWdlc1xcYW56TG9nby5wbmcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuXHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cdFx0fVxyXG59XHJcbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZCg4KSB7XHJcbiAgLnRpbWVsaW5lLWltZy1oZWFkZXIge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwgLjQpKSwgdXJsKCdzcmNcXGFzc2V0c1xcSW1hZ2VzXFxnb2Nsb3VkcG5nLnBuZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0XHR9XHJcbn1cclxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKDExKSB7XHJcbiAgLnRpbWVsaW5lLWltZy1oZWFkZXIge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwgLjQpKSwgdXJsKCdzcmNcXGFzc2V0c1xcSW1hZ2VzXFxkeGNfbG9nby5wbmcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuXHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cdFx0fVxyXG59XHJcblxyXG4udGltZWxpbmUtaW1nLWhlYWRlciB7XHJcblxyXG5cdGhlaWdodDogMjAwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG5cdGgyIHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiA1cHg7XHJcblx0XHRsZWZ0OiAyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuYmxvY2txdW90ZSB7XHJcblx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRjb2xvcjogIzc1NzU3NTtcclxuXHRib3JkZXItbGVmdC1jb2xvcjogIzNGNTFCNTtcclxuXHRwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuXHRiYWNrZ3JvdW5kOiAjMUQzNDYxO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIEVGRkVDVFNcclxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcblxyXG4udGltZWxpbmUtaXRlbSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKG9kZCkge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMHB4LCAwLCAwKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMHB4LCAwLCAwKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW0uaW4tdmlldyB7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcblx0LnRpbWVsaW5lIHtcclxuXHJcblx0XHQmOjpiZWZvcmUge1xyXG5cdFx0XHRsZWZ0OiA1MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC50aW1lbGluZS1pbWcge1xyXG5cdFx0XHRsZWZ0OiA1MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC50aW1lbGluZS1jb250ZW50IHtcclxuXHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdFx0XHR3aWR0aDogYXV0bztcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDcwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRpbWVsaW5lLWl0ZW0ge1xyXG5cclxuXHRcdFx0JjpudGgtY2hpbGQoZXZlbikge1xyXG5cclxuXHRcdFx0XHQudGltZWxpbmUtY29udGVudCB7XHJcblx0XHRcdFx0XHRmbG9hdDogbm9uZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmOm50aC1jaGlsZChvZGQpIHtcclxuXHJcblx0XHRcdFx0LnRpbWVsaW5lLWNvbnRlbnQge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQmOjphZnRlciB7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAwO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdHRvcDogMzBweDtcclxuXHRcdFx0XHRcdFx0bGVmdDogLTE1cHg7XHJcblx0XHRcdFx0XHRcdGJvcmRlci13aWR0aDogMTBweCAxNXB4IDEwcHggMDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjVmNWY1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn1cclxuIiwiI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhmOTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5mYTEge1xuICB3aWR0aDogNTRweDtcbn1cbmJvZHkge1xuICBmb250OiBub3JtYWwgMTZweC8xLjUgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjNDhiMzc5O1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi8qIElOVFJPIFNFQ1RJT05cbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLmludHJvIHtcbiAgYmFja2dyb3VuZDogIzJhNDQ5NDtcbiAgaGVpZ2h0OiA3MjFweDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG4jY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTcwcHg7XG59XG4jc2Vjb25kaW50cm8ge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuaDIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuaDMge1xuICBmb250LWZhbWlseTogJ211c2VvLXNhbnMnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxucCB7XG4gIGZvbnQtZmFtaWx5OiAnZmYtdGlzYS13ZWItcHJvJywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtanVzdGlmeTogYXV0bztcbn1cbi5pblRleHQge1xuICBmb250LWZhbWlseTogJ2ZmLXRpc2Etd2ViLXBybycsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICMwMDhmOTU7XG59XG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuI21haW4ge1xuICB3aWR0aDogMTA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uYnJlYWtMaW5lIHtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMzBweDtcbiAgcGFkZGluZzogMDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiBzb2xpZCA1cHg7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJyZWFrTGluZTIge1xuICBtYXJnaW46IDI1cHggYXV0byAzMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXgtd2lkdGg6IDU0MHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IHNvbGlkIDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jY29sMSB7XG4gIHdpZHRoOiA0NTBweDtcbn1cbiNjb2wyIHtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuI2JvdHRvbXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjN2VjOGVkO1xufVxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cbmh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuaDEge1xuICBmb250LXNpemU6IDIwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTUwcHggMDtcbn1cbmhlYWRlciBwIHtcbiAgZm9udC1mYW1pbHk6ICdBbGx1cmEnO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDYwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuLnRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpbWVsaW5lOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZDogI2M1Y2FlOTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA5NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4udGltZWxpbmUtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA0MHB4IDMwcHggMTBweCAzMHB4O1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50IC5kYXRlIHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQ6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAtMTVweDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDE1cHggMTBweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNjNWNhZTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA0MHB4IDMwcHggMTBweCAzMHB4O1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKG9kZCkgLnRpbWVsaW5lLWNvbnRlbnQgLmRhdGUge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogMDtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIC50aW1lbGluZS1jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IC0xNXB4O1xuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2M1Y2FlOTtcbn1cbi50aW1lbGluZS1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG4udGltZWxpbmUtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMjBweCAyNXB4IC0xNXB4IHJnYmEoMCwwLDAsMC4zKTtcbn1cbi50aW1lbGluZS1jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IC0xNXB4O1xuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2M1Y2FlOTtcbn1cbi50aW1lbGluZS1pbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4uYm50LW1vcmUge1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAtMXB4IHJnYmEoMCwwLDAsMC42KTtcbn1cbi5ibnQtbW9yZTpob3Zlcixcbi5ibnQtbW9yZTphY3RpdmUsXG4uYm50LW1vcmU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMzk0OWEzO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRpbWVsaW5lLWNhcmQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUtY2FyZCBwIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi50aW1lbGluZS1jYXJkIGEge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZCgyKSAudGltZWxpbmUtaW1nLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuNCkpLCB1cmwoXCJzcmNcXGFzc2V0c1xcSW1hZ2VzXFxkeGNfbG9nby5wbmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZCg1KSAudGltZWxpbmUtaW1nLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuNCkpLCB1cmwoXCJzcmNcXGFzc2V0c1xcSW1hZ2VzXFxhbnpMb2dvLnBuZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKDgpIC50aW1lbGluZS1pbWctaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC40KSksIHVybChcInNyY1xcYXNzZXRzXFxJbWFnZXNcXGdvY2xvdWRwbmcucG5nXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoMTEpIC50aW1lbGluZS1pbWctaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC40KSksIHVybChcInNyY1xcYXNzZXRzXFxJbWFnZXNcXGR4Y19sb2dvLnBuZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnRpbWVsaW5lLWltZy1oZWFkZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGltZWxpbmUtaW1nLWhlYWRlciBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiAyMHB4O1xufVxuYmxvY2txdW90ZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBib3JkZXItbGVmdC1jb2xvcjogIzNmNTFiNTtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmRhdGUge1xuICBiYWNrZ3JvdW5kOiAjMWQzNDYxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG4vKiBFRkZFQ1RTXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi50aW1lbGluZS1pdGVtIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwcHgsIDAsIDApO1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDBweCwgMCwgMCk7XG59XG4udGltZWxpbmUtaXRlbS5pbi12aWV3IHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRpbWVsaW5lOjpiZWZvcmUge1xuICAgIGxlZnQ6IDUwcHg7XG4gIH1cbiAgLnRpbWVsaW5lIC50aW1lbGluZS1pbWcge1xuICAgIGxlZnQ6IDUwcHg7XG4gIH1cbiAgLnRpbWVsaW5lIC50aW1lbGluZS1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIH1cbiAgLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIC50aW1lbGluZS1jb250ZW50OjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRvcDogMzBweDtcbiAgICBsZWZ0OiAtMTVweDtcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTVweCAxMHB4IDA7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjVmNWY1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB9XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/experience/experience.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/experience/experience.component.ts ***!
  \**********************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienceComponent = class ExperienceComponent {
    constructor() {
        this.birthdate = new Date("1997-01-30");
    }
    CalculateAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthdate.getFullYear();
        const m = today.getMonth() - this.birthdate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birthdate.getDate())) {
            age--;
        }
        return age.toString();
    }
    ngOnInit() {
        this.loadScript();
    }
    /*   scroll(el: HTMLElement) {
    
    
          let scrollToElement = window.setInterval(() => {
          let elRect = el.getBoundingClientRect();
          let bodyRect = document.body.getBoundingClientRect();
          let offset = elRect.top - bodyRect.top;
          let pos = window.pageYOffset;
            if (pos <= offset) {
              window.scrollTo(0, pos + 20); // how far to scroll on each step
            } else {
              window.clearInterval(scrollToElement);
            }
          }, 5);
    } */
    loadScript() {
        (function () {
            'use strict';
            // define variables
            var items = document.querySelectorAll(".timeline-item");
            var cards = document.querySelectorAll(".timeline-img");
            setTimeout(function () {
                for (var i = 0; i < cards.length; i++) {
                    if (isElementInViewport(cards[i])) {
                        items[i].classList.add("in-view");
                    }
                }
            }, 750);
            // check if an element is in viewport
            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.top + 100 <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth));
            }
            function callbackFunc() {
                for (var i = 0; i < cards.length; i++) {
                    if (isElementInViewport(cards[i])) {
                        items[i].classList.add("in-view");
                    }
                }
            }
            // listen for events
            window.addEventListener("resize", callbackFunc);
            window.addEventListener("scroll", callbackFunc);
        })();
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: __webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/experience/experience.component.html"),
        styles: [__webpack_require__(/*! ./experience.component.styl */ "./src/app/pages/experience/experience.component.styl")]
    })
], ExperienceComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.styl":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  background-color: #008f95;\n  text-align: center;\n  min-height: 100%;\n}\n.main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  text-align: center;\n  height: 100% -120px;\n}\nimg {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  margin-top: 20px;\n}\nh1 {\n  margin-top: 0;\n}\n.name {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 120px;\n  margin: 0px;\n  color: #28afb0;\n}\n.name1 {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  letter-spacing: 5px;\n  font-weight: 300;\n  font-size: 120px;\n  margin: 0px;\n  color: #2c3e50;\n}\n.topsection {\n  display: -webkit-box;\n  display: flex;\n  padding: 15px;\n  margin: auto;\n  width: 550px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\nsection {\n  margin-top: 10px;\n}\n.example_c {\n  width: 160px;\n  margin-top: 15px;\n  color: #acfcd9 !important;\n  font-family: Andale Mono, monospace;\n  font-style: bold;\n  text-transform: uppercase;\n  text-decoration: none;\n  background: #008f95;\n  padding: 20px;\n  border: 4px solid #acfcd9 !important;\n  display: inline-block;\n  -webkit-transition: all 0.4s ease 0s;\n  transition: all 0.4s ease 0s;\n}\n.example_c:hover {\n  color: #acfcd9 !important;\n  background: #28afb0;\n  border-color: #28afb0 !important;\n  -webkit-transition: all 0.4s ease 0s;\n  transition: all 0.4s ease 0s;\n}\n.button_cont span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.button_cont {\n  width: 200px;\n  margin: auto;\n}\n.button_cont span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.button_cont:hover span {\n  padding-right: 15px;\n}\n.button_cont:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n/*# sourceMappingURL=src/app/pages/home/home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVE7RUFBUixhQUFRO0VBQ1IsNEJBQWU7RUFBZiw2QkFBZTtVQUFmLHNCQUFlO0VBQ2YsWUFBTztFQUNQLHlCQUFpQjtFQUNqQixrQkFBVztFQUNYLGdCQUFXO0FDQ2Y7QURDQTtFQUNJLG9CQUFRO0VBQVIsYUFBUTtFQUNSLDRCQUFlO0VBQWYsNkJBQWU7VUFBZixzQkFBZTtFQUNmLFlBQU87RUFDUCxrQkFBVztFQUNYLG1CQUFPO0FDQ1g7QURDQTtFQUNJLGtCQUFjO0VBQ2QsWUFBTTtFQUNOLGFBQU87RUFDUCxnQkFBVztBQ0NmO0FEQ0U7RUFDRSxhQUFXO0FDQ2Y7QURDQTtFQUNJLDJDQUFzQjtFQUN0QixrQkFBWTtFQUNaLGdCQUFhO0VBQ2IsZ0JBQVU7RUFDVixXQUFRO0VBQ1IsY0FBTTtBQ0NWO0FEQ0E7RUFDSSwyQ0FBc0I7RUFDdEIsa0JBQVk7RUFDWixtQkFBZ0I7RUFDaEIsZ0JBQWE7RUFDYixnQkFBVTtFQUNWLFdBQVE7RUFDUixjQUFNO0FDQ1Y7QURDQTtFQUNJLG9CQUFRO0VBQVIsYUFBUTtFQUNSLGFBQVE7RUFDUixZQUFPO0VBQ1AsWUFBTTtFQUNOLDhCQUFlO0VBQWYsNkJBQWU7VUFBZixtQkFBZTtFQUNmLDhCQUFpQjtVQUFqQiw2QkFBaUI7QUNDckI7QURDQTtFQUNJLGdCQUFXO0FDQ2Y7QURDQTtFQUNJLFlBQU07RUFDTixnQkFBVztFQUNYLHlCQUFNO0VBQ04sbUNBQXVCO0VBQ3ZCLGdCQUFXO0VBQ1gseUJBQWU7RUFDZixxQkFBZ0I7RUFDaEIsbUJBQVc7RUFDWCxhQUFRO0VBQ1Isb0NBQU87RUFDUCxxQkFBUTtFQUNSLG9DQUFXO0VBQVgsNEJBQVc7QUNDZjtBRENBO0VBQ0kseUJBQU07RUFDTixtQkFBVztFQUNYLGdDQUFhO0VBQ2Isb0NBQVc7RUFBWCw0QkFBVztBQ0NmO0FEQ0E7RUFDRSxlQUFRO0VBQ1IscUJBQVM7RUFDVCxrQkFBVTtFQUNWLHdCQUFZO0VBQVosZ0JBQVk7QUNDZDtBREVBO0VBQ0ksWUFBTTtFQUNOLFlBQU87QUNBWDtBREVBO0VBQ0UsZ0JBQVM7RUFDVCxrQkFBVTtFQUNWLFVBQVM7RUFDVCxNQUFLO0VBQ0wsWUFBTztFQUNQLHdCQUFZO0VBQVosZ0JBQVk7QUNBZDtBREdBO0VBQ0UsbUJBQWU7QUNEakI7QURJQTtFQUNFLFVBQVM7RUFDVCxRQUFPO0FDRlQ7QUFDQSxnRUFBZ0UiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudFxyXG4gICAgZGlzcGxheSBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cclxuICAgIG1hcmdpbiBhdXRvXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yICMwMDhmOTVcclxuICAgIHRleHQtYWxpZ24gY2VudGVyXHJcbiAgICBtaW4taGVpZ2h0IDEwMCVcclxuXHJcbi5tYWluXHJcbiAgICBkaXNwbGF5IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxyXG4gICAgbWFyZ2luIGF1dG9cclxuICAgIHRleHQtYWxpZ24gY2VudGVyXHJcbiAgICBoZWlnaHQgMTAwJS0xMjBweFxyXG5cclxuaW1nIFxyXG4gICAgYm9yZGVyLXJhZGl1cyA1MCVcclxuICAgIHdpZHRoIDIwMHB4XHJcbiAgICBoZWlnaHQgMjAwcHhcclxuICAgIG1hcmdpbi10b3AgMjBweFxyXG5cclxuICBoMSBcclxuICAgIG1hcmdpbi10b3AgMFxyXG5cclxuLm5hbWVcclxuICAgIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplIDEyMHB4XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yICMyOEFGQjBcclxuXHJcbi5uYW1lMVxyXG4gICAgZm9udC1mYW1pbHk6ICdkZWFkamltJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHhcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemUgMTIwcHhcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3IgIzJjM2U1MFxyXG5cclxuLnRvcHNlY3Rpb25cclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgcGFkZGluZyAxNXB4XHJcbiAgICBtYXJnaW4gYXV0b1xyXG4gICAgd2lkdGggNTUwcHhcclxuICAgIGZsZXgtZGlyZWN0aW9uIHJvd1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHlcclxuXHJcbnNlY3Rpb24gXHJcbiAgICBtYXJnaW4tdG9wIDEwcHg7XHJcblxyXG4uZXhhbXBsZV9jXHJcbiAgICB3aWR0aCAxNjBweFxyXG4gICAgbWFyZ2luLXRvcCAxNXB4XHJcbiAgICBjb2xvciAjQUNGQ0Q5IWltcG9ydGFudFxyXG4gICAgZm9udC1mYW1pbHkgQW5kYWxlIE1vbm8sIG1vbm9zcGFjZVxyXG4gICAgZm9udC1zdHlsZSBib2xkXHJcbiAgICB0ZXh0LXRyYW5zZm9ybSB1cHBlcmNhc2VcclxuICAgIHRleHQtZGVjb3JhdGlvbiBub25lXHJcbiAgICBiYWNrZ3JvdW5kICMwMDhmOTVcclxuICAgIHBhZGRpbmcgMjBweFxyXG4gICAgYm9yZGVyIDRweCBzb2xpZCAjQUNGQ0Q5ICFpbXBvcnRhbnRcclxuICAgIGRpc3BsYXkgaW5saW5lLWJsb2NrXHJcbiAgICB0cmFuc2l0aW9uIGFsbCAwLjRzIGVhc2UgMHNcclxuXHJcbi5leGFtcGxlX2M6aG92ZXJcclxuICAgIGNvbG9yICNBQ0ZDRDkgIWltcG9ydGFudFxyXG4gICAgYmFja2dyb3VuZCAjMjhhZmIwXHJcbiAgICBib3JkZXItY29sb3IgIzI4YWZiMCAhaW1wb3J0YW50XHJcbiAgICB0cmFuc2l0aW9uIGFsbCAwLjRzIGVhc2UgMHNcclxuXHJcbi5idXR0b25fY29udCBzcGFuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYnV0dG9uX2NvbnRcclxuICAgIHdpZHRoIDIwMHB4XHJcbiAgICBtYXJnaW4gYXV0b1xyXG5cclxuLmJ1dHRvbl9jb250IHNwYW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogLTIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJ1dHRvbl9jb250OmhvdmVyIHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5idXR0b25fY29udDpob3ZlciBzcGFuOmFmdGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHJpZ2h0OiAwO1xyXG59IiwiI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhmOTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJSAtMTIwcHg7XG59XG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmgxIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdkZWFkamltJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEyMHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICMyOGFmYjA7XG59XG4ubmFtZTEge1xuICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTIwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzJjM2U1MDtcbn1cbi50b3BzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTUwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZXhhbXBsZV9jIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogI2FjZmNkOSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQW5kYWxlIE1vbm8sIG1vbm9zcGFjZTtcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMDA4Zjk1O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjYWNmY2Q5ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbn1cbi5leGFtcGxlX2M6aG92ZXIge1xuICBjb2xvcjogI2FjZmNkOSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMjhhZmIwO1xuICBib3JkZXItY29sb3I6ICMyOGFmYjAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcbn1cbi5idXR0b25fY29udCBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5idXR0b25fY29udCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJ1dHRvbl9jb250IHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiAnXFwwMGJiJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5idXR0b25fY29udDpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5idXR0b25fY29udDpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.styl */ "./src/app/pages/home/home.component.styl")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/pages.component.styl":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/pages/pages.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNERBQTREIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnN0eWwifQ== */"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagesComponent = class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pages',
        template: __webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html"),
        styles: [__webpack_require__(/*! ./pages.component.styl */ "./src/app/pages/pages.component.styl")]
    })
], PagesComponent);



/***/ }),

/***/ "./src/app/pages/skills/skills.component.styl":
/*!****************************************************!*\
  !*** ./src/app/pages/skills/skills.component.styl ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  margin: auto;\n  margin-top: 10px;\n  width: 50rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n}\n/*# sourceMappingURL=src/app/pages/skills/skills.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQU87RUFDUCxnQkFBVztFQUNYLFlBQU07RUFDTixvQkFBUTtFQUFSLGFBQVE7RUFDUiw0QkFBZTtFQUFmLDZCQUFlO1VBQWYsc0JBQWU7RUFDZixrQkFBVztBQ0NmO0FBQ0Esb0VBQW9FIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50XHJcbiAgICBtYXJnaW4gYXV0b1xyXG4gICAgbWFyZ2luLXRvcCAxMHB4XHJcbiAgICB3aWR0aCA1MHJlbVxyXG4gICAgZGlzcGxheSBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cclxuICAgIHRleHQtYWxpZ24gY2VudGVyXHJcblxyXG4iLCIjY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDUwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/pages/skills/skills.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/skills/skills.component.ts ***!
  \**************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skils',
        template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/skills/skills.component.html"),
        styles: [__webpack_require__(/*! ./skills.component.styl */ "./src/app/pages/skills/skills.component.styl")]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/assets/scripts/smtp.js":
/*!************************************!*\
  !*** ./src/assets/scripts/smtp.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jtell\source\repos\AngularCV\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map