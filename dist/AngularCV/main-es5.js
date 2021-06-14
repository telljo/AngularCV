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

module.exports = "<div id=\"wrapper\">\r\n        <header>\r\n            <nav>\r\n                <a class=\"navLink\" routerLink=\"\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\r\n                  true}\">Home</a>\r\n                <a class=\"navLink\" routerLink=\"/experience\" routerLinkActive=\"active-link\">Experience</a>\r\n                <a class=\"navLink\" routerLink=\"/skills\" routerLinkActive=\"active-link\">Skills</a>\r\n                <a class=\"navLink\" routerLink=\"/contact\" routerLinkActive=\"active-link\">Contact</a>\r\n              </nav>\r\n        </header>\r\n      \r\n      <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-wrapper\">\n\n    <div id=\"animateRoute\" [@routeAnimations]=\"prepareRoute(outlet)\">\n      <router-outlet (activate)=\"onActivate($event)\" id=\"outlet1\" #outlet=\"outlet\"></router-outlet>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <script type=\"text/javascript\" src=\"./../../../assets/scripts/smtp.js\"></script>\n<div id=\"contactform\">\n    \n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n        <input name=\"first\" ngModel required #first=\"ngModel\">\n        <input name=\"last\" ngModel>\n        <button>Submit</button>\n      </form>\n\n</div>\n\n    \n\n    <footer>\n        <h2>ME ON SOCIAL</h2>\n        <div id=\"socials\">\n            <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a>\n            <a href=\"https://www.facebook.com/josh.tell.5\" target=\"_blank\" class=\"fa1 fa fa-facebook\"></a>\n            <a href=\"https://github.com/jtell1997\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/experience/experience.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/experience/experience.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n\r\n    <section class=\"intro\">\r\n            \r\n        <div id=\"container\">\r\n            <h2 class=\"title\">ABOUT ME</h2>\r\n            <hr class=\"breakLine\">\r\n        <div id=\"main\">\r\n            <div id=\"col1\">\r\n                    <p class=\"introText\">\r\n                            I'm a {{CalculateAge()}} year old application developer from Aotearoa (New Zealand). In Nov 2017 I graduated from the <a class=\"inText\" href=\"https://www.otago.ac.nz/\" target=\"_blank\">University of Otago</a> with a Bsc majoring in Computer Science.\r\n                            After graduating, I immediately embarked on an exciting new journey in the IT industry.\r\n                            \r\n                        </p>\r\n            </div>\r\n            <div id=\"col2\">\r\n                    <p class=\"introText\">\r\n                            I have three years of experience in full stack software development. In my current role as an application developer at <a class=\"inText\" href=\"https://www.dxc.technology/\" target=\"_blank\">DXC Technology</a>, I work closely with a team of experienced senior developers programming\r\n                            in C# and using the .NET framework.\r\n                        </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </section>\r\n\r\n<div id=\"bottomsection\">\r\n    <section id=\"secondintro\">\r\n        \r\n        <h2 class=\"title\">WORK EXPERIENCE</h2>\r\n        <hr class=\"breakLine2\">\r\n        <!-- <button class=\"fa1 fa fa-chevron-down\" (click)=\"scroll(target)\"></button>   -->\r\n    </section>\r\n      \r\n      <section class=\"timeline\">\r\n        <div class=\"container\">\r\n      \r\n          <div class=\"timeline-img\"></div>\r\n\r\n          <div class=\"timeline-item\">           \r\n      \r\n            <div class=\"timeline-content timeline-card\">\r\n              <div class=\"timeline-img-header\">\r\n                <h2>Associate .NET Application Developer</h2>\r\n              </div>\r\n              <div class=\"date\">11 FEB 2019 - PRESENT</div>\r\n              <p>Designing and developing production-level object-oriented applications using the software development lifecycle, including design, coding, testing, and documentation.</p>\r\n              <p><i>C#, .NET, SQL, HTML5, CSS, WCF, Web Services, Angular</i></p>\r\n              <a class=\"bnt-more\" href=\"https://www.dxc.technology/about_us\" target=\"_blank\">More</a>\r\n            </div>\r\n      \r\n          </div>   \r\n          <div></div>\r\n      \r\n          <div class=\"timeline-img\"></div>\r\n          <div class=\"timeline-item\">\r\n      \r\n            \r\n      \r\n            <div class=\"timeline-content timeline-card\">\r\n              <div class=\"timeline-img-header\">\r\n                <h2>Global Mobility Services Engineer</h2>\r\n              </div>\r\n              <div class=\"date\">20 APRIL 2018 - 30 JAN 2019</div>\r\n              <p>Provided level 2 mobile support to 40,0000 users accross ANZ globally. This included device acquisition with vendors, device management/compliance, and tech-support through the phone for ServiceNow ticket resolution.</p>\r\n              <p><i>VMware AirWatch, ServiceNow, Customer Service</i></p>\r\n              <a class=\"bnt-more\" href=\"https://www.anz.co.nz/about-us/our-company/anz-new-zealand/\" target=\"_blank\">More</a>\r\n            </div>\r\n      \r\n          </div>   \r\n\r\n          <div></div>\r\n\r\n          <div class=\"timeline-img\"></div>\r\n\r\n          <div class=\"timeline-item\">           \r\n      \r\n            <div class=\"timeline-content timeline-card\">\r\n              <div class=\"timeline-img-header\">\r\n                <h2>Junior .NET Software Developer</h2>\r\n              </div>\r\n              <div class=\"date\">NOV 2017 - MAR 2018</div>\r\n              <p>Designed and developed a full stack web application which was hosted in the cloud using Azure App Services.</p>\r\n              <p><i>C#, .NET, SQL, HTML5, Azure SQL Database</i></p>\r\n              <a class=\"bnt-more\" href=\"https://gocloud.systems/\" target=\"_blank\">More</a>\r\n            </div>\r\n      \r\n          </div>   \r\n\r\n          <div></div>\r\n          <div class=\"timeline-img\"></div>\r\n\r\n          <div class=\"timeline-item\">\r\n           \r\n            <div class=\"timeline-content timeline-card\">\r\n              <div class=\"timeline-img-header\">\r\n                <h2>BSc - Computer Science</h2>\r\n              </div>\r\n              <div class=\"date\">FEB 2015 - NOV 2017</div>\r\n              <p>During my three years of study at Otago University, some of the papers I took included Web Development, Networking, AI, Database Theory, and Object Oriented Programming.</p>\r\n              <a class=\"bnt-more\" href=\"https://www.otago.ac.nz/\" target=\"_blank\">More</a>\r\n            </div>      \r\n          </div>       \r\n        </div>\r\n      </section>\r\n\r\n</div>\r\n\r\n    <footer>\r\n        <h2>CONNECT WITH ME</h2>\r\n        <div id=\"socials\">\r\n            <a href=\"mailto:\" target=\"_blank\" class=\"fa1 fa fa-envelope\"></a>\r\n            <a href=\"https://github.com/jtell1997\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\r\n            <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a>                 \r\n        </div>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"content\">\r\n\r\n\r\n    <div class=\"main\">\r\n        <div class=\"topsection\">\r\n        <section>\r\n                <h2 style=\"cursor: default;\" class=\"name\">josh</h2>\r\n                <h2 style=\"cursor: default;\" class=\"name1\">TELL</h2>\r\n        </section>\r\n\r\n\r\n                <img src=\"../../../assets/Images/profile2.jpg\" height=\"200\" width=\"200\">\r\n\r\n        </div>\r\n\r\n\r\n            <h1>FULL-STACK APPLICATION DEVELOPER</h1>\r\n            \r\n            <div class=\"button_cont\" align=\"center\"><a class=\"example_c\" routerLink=\"/experience\" routerLinkActive=\"active-link\"><span>View my work</span></a></div>\r\n    </div>\r\n\r\n\r\n    <footer>     \r\n        <h2>ME ON SOCIAL</h2>     \r\n        <div id=\"socials\">\r\n            <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a>\r\n            <a href=\"https://www.facebook.com/josh.tell.5\" target=\"_blank\" class=\"fa1 fa fa-facebook\"></a>\r\n            <a href=\"https://github.com/jtell1997\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\r\n        </div>\r\n      </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pages.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pages-gallery></pages-gallery>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/skills/skills.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/skills/skills.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n\r\n    <div class=\"abovesection\">\r\n\r\n    <div class=\"toptitle\" [ngStyle]=\"{transform:transform2}\">\r\n        <h2 class=\"title\">TECHNICAL SKILLS</h2>\r\n \r\n    </div>\r\n    \r\n    <div class=\"technicalsection\" [ngStyle]=\"{transform:transform1}\">\r\n        \r\n        <div class=\"topsection\">\r\n            <p>I spend most of my time with these...</p>\r\n        </div>\r\n        \r\n        <div class=\"bottomsection\">\r\n\r\n            <div class=\"bar flex\">\r\n                <div class=\"bar fill\" [ngStyle]=\"{width:width90, 'transition-delay':t1}\">\r\n                    <div class=\"tag bold flex\">.NET / C#</div>                   \r\n            </div>\r\n            <span>90%</span>\r\n            </div>           \r\n            <div class=\"bar flex\">\r\n                <div class=\"bar fill\" [ngStyle]=\"{width:width80, 'transition-delay':t3}\">\r\n                    <div class=\"tag bold flex\">HTML5</div>                   \r\n            </div>\r\n            <span>80%</span>\r\n            </div>\r\n            <div class=\"bar flex\">\r\n                <div class=\"bar fill\" [ngStyle]=\"{width:width80, 'transition-delay':t4}\">\r\n                    <div class=\"tag bold flex\">CSS</div>                   \r\n            </div>\r\n            <span>80%</span>\r\n            </div>\r\n            <div class=\"bar flex\">\r\n                <div class=\"bar fill\" [ngStyle]=\"{width:width75, 'transition-delay':t5}\">\r\n                    <div class=\"tag bold flex\">Angular</div>                   \r\n            </div>\r\n            <span>75%</span>\r\n            </div>\r\n            <div class=\"bar flex\">\r\n                <div class=\"bar fill\" [ngStyle]=\"{width:width80, 'transition-delay':t6}\">\r\n                    <div class=\"tag bold flex\">SQL</div>                   \r\n            </div>\r\n            <span>80%</span>\r\n            </div>\r\n          \r\n            \r\n            <div class=\"bar flex\">\r\n                <div class=\"bar fill\" [ngStyle]=\"{width:width65, 'transition-delay':t7}\">\r\n                    <div class=\"tag bold flex\">Azure</div>                   \r\n            </div>\r\n            <span>65%</span>\r\n            </div>\r\n            \r\n            <div class=\"bar flex\">\r\n                <div class=\"bar fill\" [ngStyle]=\"{width:width60, 'transition-delay':t8}\">\r\n                    <div class=\"tag bold flex\">Javascript</div>                   \r\n            </div>\r\n            <span>60%</span>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"belowsection\">\r\n\r\n    \r\n\r\n    <div class=\"bottomtitle\" [ngStyle]=\"{transform:transform2}\">\r\n        <h2 class=\"title2\">MY PORTFOLIO</h2>\r\n    </div>\r\n\r\n    <div class=\"portfolio\">\r\n        <div class=\"card\">\r\n            <div class=\"hiddenblock\">\r\n                <p>I designed and developed my personal portfolio website using Angular5 and HTML/Stylus. After gaining some experience with Angular during a side project at work, I set out to put my new found knowledge to use and this website is the result. This project was a great learning process for me and sparked my interest in front-end web development.</p>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"card\"> \r\n            <div class=\"hiddenblock\">\r\n                <p>Developed using Angular.</p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n    <div class=\"bottompage\">\r\n\r\n        <div class=\"bottomtitle2\" [ngStyle]=\"{transform:transform4}\">\r\n            <h2 class=\"title2\">MY CERTIFICATIONS</h2>\r\n        </div>\r\n    \r\n        <div class=\"certificates\">\r\n            <a class=\"certLink\" href=\"https://www.youracclaim.com/badges/911cde9a-633e-4c09-a4c3-92444f9d46e8/public_url\" target=\"_blank\"></a>\r\n        </div>\r\n            \r\n    </div>\r\n\r\n    <footer>     \r\n        <h2>ME ON SOCIAL</h2>     \r\n        <div id=\"socials\">\r\n            <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a>\r\n            <a href=\"https://www.facebook.com/josh.tell.5\" target=\"_blank\" class=\"fa1 fa fa-facebook\"></a>\r\n            <a href=\"https://github.com/jtell1997\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\r\n        </div>\r\n      </footer>\r\n</div>\r\n"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var SlideInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/skills/skills.component */ "./src/app/pages/skills/skills.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/pages/experience/experience.component.ts");








var routes = [
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_6__["PagesComponent"],
        children: [
            {
                path: '',
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
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularCV';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/skills/skills.component */ "./src/app/pages/skills/skills.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/experience/experience.component */ "./src/app/pages/experience/experience.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations_slide_in_out__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/slide-in-out */ "./src/animations/slide-in-out.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(router) {
        this.router = router;
        this.subs = [];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.switchState = function (pageDestination) {
        var _this = this;
        if (window.pageYOffset > 0) {
            var scrollToTop_1 = window.setInterval(function () {
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop_1);
                }
            }, 20);
        }
        setTimeout(function () {
            if (window.pageYOffset > 0) {
                _this.switchState(pageDestination);
            }
        }, 20);
        this.router.navigate([pageDestination]);
    };
    GalleryComponent.prototype.prepareRoute = function (outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animation']);
    };
    GalleryComponent.prototype.onActivate = function (event) {
        var _this = this;
        if (window.pageYOffset > 0) {
            var scrollToTop_2 = window.setInterval(function () {
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop_2);
                }
            }, 20);
        }
        setTimeout(function () {
            if (window.pageYOffset > 0) {
                _this.onActivate(event);
            }
        }, 20);
    };
    GalleryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
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
    return GalleryComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_scripts_smtp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../assets/scripts/smtp.js */ "./src/assets/scripts/smtp.js");
/* harmony import */ var _assets_scripts_smtp_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_smtp_js__WEBPACK_IMPORTED_MODULE_2__);


 //file path may change → 
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (f) {
        Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'jtell1997@gmail.com',
            Password: 'B346AD7B68FC87769A8AECF4765141085C05',
            To: 'jtell1997@gmail.com',
            From: 'jtell1997@gmail.com',
            Subject: 'subject',
            Body: "\n    <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>" + f.value + " <br /> <b>Email: </b>    <br /> <b>Subject: </b>    <br /> <b>Message:</b> <br />     <br><br> <b>~End of Message.~</b> "
        }).then(function (message) { alert(message); f.resetForm(); });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.styl */ "./src/app/pages/contact/contact.component.styl")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/experience/experience.component.styl":
/*!************************************************************!*\
  !*** ./src/app/pages/experience/experience.component.styl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  background-color: #008f95;\n  text-align: center;\n  min-height: 100%;\n}\n*,\n*::before,\n*::after {\n  margin: 0;\n  box-sizing: border-box;\n}\n.fa1 {\n  width: 54px;\n}\nbody {\n  font: normal 16px/1.5 \"Helvetica Neue\", sans-serif;\n  background: #48b379;\n  color: #fff;\n  overflow-x: hidden;\n  padding-bottom: 50px;\n}\n/* INTRO SECTION\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.intro {\n  background: #2a4494;\n  height: 750px;\n  padding-top: 60px;\n}\n#container {\n  margin-top: 190px;\n}\n#secondintro {\n  padding-top: 100px;\n}\n.container {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\nh1 {\n  font-weight: 100 !important;\n  text-transform: capitalize;\n  font-size: 55px;\n  color: #fff;\n  margin-bottom: 20px;\n}\n.logo {\n  float: left;\n}\nh2 {\n  color: #fff;\n  font-size: 25px;\n}\nh3 {\n  font-family: 'museo-sans', sans-serif;\n  text-transform: uppercase;\n  font-size: 30px;\n  font-weight: 900;\n  color: #fff;\n}\np {\n  font-family: 'ff-tisa-web-pro', serif;\n  font-weight: 400;\n  font-size: 20px;\n  color: #fff;\n  line-height: 1.5;\n  text-align: left;\n  text-justify: auto;\n}\n.introText {\n  text-align: justify;\n  text-justify: auto;\n}\n.inText {\n  font-family: 'ff-tisa-web-pro', serif;\n  font-weight: 400;\n  font-style: italic;\n  font-size: 20px;\n  color: #fff;\n  line-height: 1.5;\n}\na:hover {\n  color: #008f95;\n}\n.title {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 80px;\n  margin: 0px;\n  margin-top: 20px;\n  color: #fff;\n}\n#main {\n  width: 1050px;\n  margin: auto;\n  margin-top: 30px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.breakLine {\n  margin: 25px auto 30px;\n  padding: 0;\n  max-width: 300px;\n  border: 0;\n  border-top: solid 5px;\n  border-color: #fff;\n  text-align: center;\n}\n.breakLine2 {\n  margin: 25px auto 30px;\n  padding: 0;\n  max-width: 540px;\n  border: 0;\n  border-top: solid 5px;\n  border-color: #fff;\n  text-align: center;\n}\n#col1 {\n  width: 450px;\n}\n#col2 {\n  width: 450px;\n}\n#bottomsection {\n  background: #7ec8ed;\n}\nsection {\n  padding: 40px 0;\n}\nhtml,\nbody {\n  overflow-x: hidden;\n}\nbody {\n  font-family: 'Roboto';\n  font-size: 17px;\n  font-weight: 400;\n  background-color: #eee;\n}\nh1 {\n  font-size: 200%;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-weight: 400;\n}\nheader {\n  background: #3f51b5;\n  color: #fff;\n  padding: 150px 0;\n}\nheader p {\n  font-family: 'Allura';\n  color: rgba(255,255,255,0.2);\n  margin-bottom: 0;\n  font-size: 60px;\n  margin-top: -30px;\n}\n.timeline {\n  position: relative;\n}\n.timeline::before {\n  content: '';\n  background: #c5cae9;\n  width: 5px;\n  height: 95%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.timeline-item {\n  width: 100%;\n  margin-bottom: 70px;\n}\n.timeline-item:nth-child(odd) .timeline-content {\n  float: right;\n  padding: 40px 30px 10px 30px;\n}\n.timeline-item:nth-child(odd) .timeline-content .date {\n  right: auto;\n  left: 0;\n}\n.timeline-item:nth-child(odd) .timeline-content::after {\n  content: '';\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  left: -15px;\n  border-width: 10px 15px 10px 0;\n  border-color: transparent #c5cae9 transparent transparent;\n}\n.timeline-item:nth-child(even) .timeline-content {\n  float: left;\n  padding: 40px 30px 10px 30px;\n}\n.timeline-item:nth-child(even) .timeline-content .date {\n  right: auto;\n  left: 0;\n}\n.timeline-item:nth-child(even) .timeline-content::after {\n  content: '';\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  right: -15px;\n  border-width: 10px 0 10px 15px;\n  border-color: transparent transparent transparent #c5cae9;\n}\n.timeline-item::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.timeline-content {\n  position: relative;\n  width: 45%;\n  padding: 10px 30px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 20px 25px -15px rgba(0,0,0,0.3);\n}\n.timeline-content::after {\n  content: '';\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  right: -15px;\n  border-width: 10px 0 10px 15px;\n  border-color: transparent transparent transparent #c5cae9;\n}\n.timeline-img {\n  width: 30px;\n  height: 30px;\n  background: #3f51b5;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  margin-top: 25px;\n  margin-left: -15px;\n}\n.bnt-more {\n  background: #3f51b5;\n  color: #fff;\n  padding: 8px 20px;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 10px;\n  display: inline-block;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px -1px rgba(0,0,0,0.6);\n}\n.bnt-more:hover,\n.bnt-more:active,\n.bnt-more:focus {\n  background: #3949a3;\n  color: #fff;\n  text-decoration: none;\n}\n.timeline-card {\n  padding: 0 !important;\n}\n.timeline-card p {\n  padding: 0 20px;\n  color: #000;\n  background-color: #fff;\n}\n.timeline-card a {\n  margin-left: 20px;\n}\n.timeline-item:nth-child(2) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('dxc_logo.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('dxc_logo.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-item:nth-child(5) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('anzLogo.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('anzLogo.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-item:nth-child(8) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('gocloudpng.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('gocloudpng.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-item:nth-child(11) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('Otago2.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('Otago2.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-img-header {\n  height: 200px;\n  position: relative;\n  margin-bottom: 20px;\n}\n.timeline-img-header h2 {\n  color: #fff;\n  position: absolute;\n  bottom: 5px;\n  left: 20px;\n}\nblockquote {\n  margin-top: 30px;\n  color: #757575;\n  border-left-color: #3f51b5;\n  padding: 0 20px;\n}\n.date {\n  background: #1d3461;\n  display: inline-block;\n  color: #fff;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n/* EFFECTS\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.timeline-item {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n.timeline-item:nth-child(even) {\n  -webkit-transform: translate3d(-200px, 0, 0);\n          transform: translate3d(-200px, 0, 0);\n}\n.timeline-item:nth-child(odd) {\n  -webkit-transform: translate3d(200px, 0, 0);\n          transform: translate3d(200px, 0, 0);\n}\n.timeline-item.in-view {\n  -webkit-transform: none;\n          transform: none;\n  visibility: visible;\n  opacity: 1;\n}\n@media screen and (max-width: 768px) {\n  .timeline::before {\n    left: 50px;\n  }\n  .timeline .timeline-img {\n    left: 50px;\n  }\n  .timeline .timeline-content {\n    max-width: 100%;\n    width: auto;\n    margin-left: 70px;\n  }\n  .timeline .timeline-item:nth-child(even) .timeline-content {\n    float: none;\n  }\n  .timeline .timeline-item:nth-child(odd) .timeline-content::after {\n    content: '';\n    position: absolute;\n    border-style: solid;\n    width: 0;\n    height: 0;\n    top: 30px;\n    left: -15px;\n    border-width: 10px 15px 10px 0;\n    border-color: transparent #f5f5f5 transparent transparent;\n  }\n}\n/*# sourceMappingURL=src/app/pages/experience/experience.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9zcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVE7RUFBUixhQUFRO0VBQ1IsNEJBQWU7RUFBZiw2QkFBZTtVQUFmLHNCQUFlO0VBQ2YsWUFBTztFQUNQLHlCQUFpQjtFQUNqQixrQkFBVztFQUNYLGdCQUFXO0FDQ2Y7QURBQTs7O0VBR0UsU0FBUTtFQUNSLHNCQUFZO0FDRWQ7QURDQTtFQUVFLFdBQU87QUNBVDtBREdBO0VBQ0Usa0RBQXNDO0VBQ3RDLG1CQUFZO0VBQ1osV0FBTztFQUNQLGtCQUFZO0VBQ1osb0JBQWdCO0FDRGxCO0FERUc7b0RDQWlEO0FER3BEO0VBQ0UsbUJBQVk7RUFDWixhQUFPO0VBQ1AsaUJBQVk7QUNEZDtBRElBO0VBQ0UsaUJBQVc7QUNGYjtBRElBO0VBQ0Usa0JBQVk7QUNGZDtBREtBO0VBQ0UsVUFBTztFQUNQLGlCQUFXO0VBQ1gsY0FBUTtFQUNSLGtCQUFZO0FDSGQ7QURNQTtFQUNJLDJCQUFhO0VBQ2IsMEJBQWdCO0VBQ2hCLGVBQVc7RUFDWCxXQUFNO0VBQ04sbUJBQWU7QUNKbkI7QURPQTtFQUNJLFdBQU07QUNMVjtBRE9BO0VBQ0UsV0FBTztFQUNQLGVBQVc7QUNMYjtBRE9BO0VBQ0kscUNBQXlCO0VBQ3pCLHlCQUFnQjtFQUNoQixlQUFXO0VBQ1gsZ0JBQWE7RUFDYixXQUFNO0FDTFY7QURPQTtFQUNFLHFDQUE4QjtFQUM5QixnQkFBYTtFQUNiLGVBQVc7RUFDWCxXQUFNO0VBQ04sZ0JBQWE7RUFDYixnQkFBWTtFQUNaLGtCQUFjO0FDTGhCO0FET0E7RUFDRSxtQkFBVztFQUNYLGtCQUFhO0FDTGY7QURPQTtFQUNFLHFDQUE4QjtFQUM5QixnQkFBYTtFQUNiLGtCQUFZ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Tiw4QkFBYztJQUNkLHlEQUFjO0VDekVsQjtBQUNGO0FBQ0EsNEVBQTRFIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnRcclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXHJcbiAgICBtYXJnaW4gYXV0b1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciAjMDA4Zjk1XHJcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxyXG4gICAgbWluLWhlaWdodCAxMDAlXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZmExXHJcblxyXG4gIHdpZHRoOiA1NHB4XHJcblxyXG5cclxuYm9keSB7XHJcbiAgZm9udDogbm9ybWFsIDE2cHgvMS41IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAjNDhiMzc5XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59ICAvKiBJTlRSTyBTRUNUSU9OXHJcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG5cclxuLmludHJvIHtcclxuICBiYWNrZ3JvdW5kOiAjMkE0NDk0XHJcbiAgaGVpZ2h0IDc1MHB4O1xyXG4gIHBhZGRpbmctdG9wIDYwcHhcclxufVxyXG5cclxuI2NvbnRhaW5lciBcclxuICBtYXJnaW4tdG9wIDE5MHB4XHJcblxyXG4jc2Vjb25kaW50cm8ge1xyXG4gIHBhZGRpbmctdG9wIDEwMHB4XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgIGNvbG9yIHdoaXRlXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubG9nbyBcclxuICAgIGZsb2F0IGxlZnRcclxuXHJcbmgyXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG5cclxuaDNcclxuICAgIGZvbnQtZmFtaWx5OiAnbXVzZW8tc2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMFxyXG4gICAgY29sb3Igd2hpdGVcclxuXHJcbnBcclxuICBmb250LWZhbWlseTogJ2ZmLXRpc2Etd2ViLXBybycsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yIHdoaXRlXHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRleHQtanVzdGlmeTogYXV0bztcclxuXHJcbi5pbnRyb1RleHRcclxuICB0ZXh0LWFsaWduIGp1c3RpZnlcclxuICB0ZXh0LWp1c3RpZnkgYXV0b1xyXG5cclxuLmluVGV4dFxyXG4gIGZvbnQtZmFtaWx5OiAnZmYtdGlzYS13ZWItcHJvJywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yIHdoaXRlXHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuXHJcbmE6aG92ZXIgXHJcbiAgY29sb3IgIzAwOGY5NVxyXG5cclxuLnRpdGxlXHJcbiAgICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmOyAgXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplIDgwcHhcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcCAyMHB4XHJcbiAgICBjb2xvciB3aGl0ZVxyXG5cclxuI21haW4gXHJcbiAgd2lkdGggMTA1MHB4XHJcbiAgbWFyZ2luIGF1dG9cclxuICBtYXJnaW4tdG9wIDMwcHhcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICBkaXNwbGF5IGZsZXhcclxuICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHlcclxuXHJcbi5icmVha0xpbmVcclxuICAgIG1hcmdpbjogMjVweCBhdXRvIDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZlxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuLmJyZWFrTGluZTJcclxuICAgIG1hcmdpbjogMjVweCBhdXRvIDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweDtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGVcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiNjb2wxIFxyXG4gICAgd2lkdGggNDUwcHhcclxuXHJcbiNjb2wyXHJcbiAgICB3aWR0aCA0NTBweFxyXG5cclxuI2JvdHRvbXNlY3Rpb25cclxuICBiYWNrZ3JvdW5kICM3ZWM4ZWRcclxuXHJcbi8vIFRpbWVsaW5lXHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA0MHB4IDA7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDIwMCU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcblx0YmFja2dyb3VuZDogIzNGNTFCNTtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRwYWRkaW5nOiAxNTBweCAwO1xyXG5cclxuXHRwIHtcclxuXHRcdGZvbnQtZmFtaWx5OiAnQWxsdXJhJztcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRmb250LXNpemU6IDYwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAtMzBweDtcclxuXHJcblx0fVxyXG59XHJcblxyXG4udGltZWxpbmUge1xyXG5cclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdCY6OmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdGJhY2tncm91bmQ6ICNDNUNBRTk7XHJcblx0XHR3aWR0aDogNXB4O1xyXG5cdFx0aGVpZ2h0OiA5NSU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0fVxyXG59XHJcblxyXG4udGltZWxpbmUtaXRlbSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogNzBweDtcclxuXHJcblx0JjpudGgtY2hpbGQob2RkKSB7XHJcblxyXG5cdFx0LnRpbWVsaW5lLWNvbnRlbnQge1xyXG5cdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdHBhZGRpbmc6IDQwcHggMzBweCAxMHB4IDMwcHg7XHJcblxyXG5cdFx0XHQuZGF0ZSB7XHJcblx0XHRcdFx0cmlnaHQ6IGF1dG87XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Jjo6YWZ0ZXIge1xyXG5cdFx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0XHRcdHdpZHRoOiAwO1xyXG5cdFx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0XHR0b3A6IDMwcHg7XHJcblx0XHRcdFx0bGVmdDogLTE1cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAxMHB4IDE1cHggMTBweCAwO1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2M1Y2FlOSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuICAmOm50aC1jaGlsZChldmVuKSB7XHJcblxyXG5cdFx0LnRpbWVsaW5lLWNvbnRlbnQge1xyXG5cdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0cGFkZGluZzogNDBweCAzMHB4IDEwcHggMzBweDtcclxuXHJcblx0XHRcdC5kYXRlIHtcclxuXHRcdFx0XHRyaWdodDogYXV0bztcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmOjphZnRlciB7XHJcblx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgIFx0ICBcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHQgICAgd2lkdGg6IDA7XHJcblx0XHQgICAgaGVpZ2h0OiAwO1xyXG5cdFx0ICAgIHRvcDogMzBweDtcclxuXHRcdCAgICByaWdodDogLTE1cHg7XHJcblx0XHQgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxNXB4O1xyXG5cdFx0ICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2M1Y2FlOTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jjo6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi50aW1lbGluZS1jb250ZW50IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDQ1JTtcclxuXHRwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGJveC1zaGFkb3c6IDAgMjBweCAyNXB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG5cclxuXHQmOjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHR3aWR0aDogMDtcclxuXHRcdGhlaWdodDogMDtcclxuXHRcdHRvcDogMzBweDtcclxuXHRcdHJpZ2h0OiAtMTVweDtcclxuXHRcdGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTVweDtcclxuXHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2M1Y2FlOTtcclxuXHR9XHJcbn1cclxuXHJcbi50aW1lbGluZS1pbWcge1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRiYWNrZ3JvdW5kOiAjM0Y1MUI1O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi10b3A6IDI1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcblxyXG4uYm50LW1vcmUge1xyXG5cdGJhY2tncm91bmQ6ICMzRjUxQjU7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0cGFkZGluZzogOHB4IDIwcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAuNik7XHJcblxyXG5cdCY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHtcclxuXHRcdGJhY2tncm91bmQ6IGRhcmtlbigjM0Y1MUI1LCAxMCUpO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLnRpbWVsaW5lLWNhcmQge1xyXG5cdHBhZGRpbmc6IDAhaW1wb3J0YW50O1xyXG5cclxuXHRwIHtcclxuXHRcdHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcblx0fVxyXG5cclxuXHRhIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKDIpIHtcclxuICAudGltZWxpbmUtaW1nLWhlYWRlciB7XHJcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLCAuNCkpLCB1cmwoJ3NyY1xcYXNzZXRzXFxJbWFnZXNcXGR4Y19sb2dvLnBuZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0XHR9XHJcbn1cclxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKDUpIHtcclxuICAudGltZWxpbmUtaW1nLWhlYWRlciB7XHJcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLCAuNCkpLCB1cmwoJ3NyY1xcYXNzZXRzXFxJbWFnZXNcXGFuekxvZ28ucG5nJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRcdH1cclxufVxyXG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoOCkge1xyXG4gIC50aW1lbGluZS1pbWctaGVhZGVyIHtcclxuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsIC40KSksIHVybCgnc3JjXFxhc3NldHNcXEltYWdlc1xcZ29jbG91ZHBuZy5wbmcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuXHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cdFx0fVxyXG59XHJcbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZCgxMSkge1xyXG4gIC50aW1lbGluZS1pbWctaGVhZGVyIHtcclxuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsIC40KSksIHVybCgnc3JjXFxhc3NldHNcXEltYWdlc1xcT3RhZ28yLnBuZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0XHR9XHJcbn1cclxuXHJcbi50aW1lbGluZS1pbWctaGVhZGVyIHtcclxuXHJcblx0aGVpZ2h0OiAyMDBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcblx0aDIge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDVweDtcclxuXHRcdGxlZnQ6IDIwcHg7XHJcblx0fVxyXG59XHJcblxyXG5ibG9ja3F1b3RlIHtcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdGNvbG9yOiAjNzU3NTc1O1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjM0Y1MUI1O1xyXG5cdHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLmRhdGUge1xyXG5cdGJhY2tncm91bmQ6ICMxRDM0NjE7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxufVxyXG5cclxuLyogRUZGRUNUU1xyXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuXHJcbi50aW1lbGluZS1pdGVtIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoZXZlbikge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMHB4LCAwLCAwKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKG9kZCkge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwcHgsIDAsIDApO1xyXG59XHJcblxyXG4udGltZWxpbmUtaXRlbS5pbi12aWV3IHtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuXHQudGltZWxpbmUge1xyXG5cclxuXHRcdCY6OmJlZm9yZSB7XHJcblx0XHRcdGxlZnQ6IDUwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRpbWVsaW5lLWltZyB7XHJcblx0XHRcdGxlZnQ6IDUwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRpbWVsaW5lLWNvbnRlbnQge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNzBweDtcclxuXHRcdH1cclxuXHJcblx0XHQudGltZWxpbmUtaXRlbSB7XHJcblxyXG5cdFx0XHQmOm50aC1jaGlsZChldmVuKSB7XHJcblxyXG5cdFx0XHRcdC50aW1lbGluZS1jb250ZW50IHtcclxuXHRcdFx0XHRcdGZsb2F0OiBub25lO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCY6bnRoLWNoaWxkKG9kZCkge1xyXG5cclxuXHRcdFx0XHQudGltZWxpbmUtY29udGVudCB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCY6OmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJyc7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0XHRcdFx0dG9wOiAzMHB4O1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAtMTVweDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAxMHB4IDE1cHggMTBweCAwO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmNWY1ZjUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxufVxyXG4iLCIjY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGY5NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmZhMSB7XG4gIHdpZHRoOiA1NHB4O1xufVxuYm9keSB7XG4gIGZvbnQ6IG5vcm1hbCAxNnB4LzEuNSBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6ICM0OGIzNzk7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuLyogSU5UUk8gU0VDVElPTlxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4uaW50cm8ge1xuICBiYWNrZ3JvdW5kOiAjMmE0NDk0O1xuICBoZWlnaHQ6IDc1MHB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbiNjb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxOTBweDtcbn1cbiNzZWNvbmRpbnRybyB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiA1NXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5sb2dvIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5oMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5oMyB7XG4gIGZvbnQtZmFtaWx5OiAnbXVzZW8tc2FucycsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5wIHtcbiAgZm9udC1mYW1pbHk6ICdmZi10aXNhLXdlYi1wcm8nLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xufVxuLmludHJvVGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtanVzdGlmeTogYXV0bztcbn1cbi5pblRleHQge1xuICBmb250LWZhbWlseTogJ2ZmLXRpc2Etd2ViLXBybycsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICMwMDhmOTU7XG59XG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuI21haW4ge1xuICB3aWR0aDogMTA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uYnJlYWtMaW5lIHtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMzBweDtcbiAgcGFkZGluZzogMDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiBzb2xpZCA1cHg7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJyZWFrTGluZTIge1xuICBtYXJnaW46IDI1cHggYXV0byAzMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXgtd2lkdGg6IDU0MHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IHNvbGlkIDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jY29sMSB7XG4gIHdpZHRoOiA0NTBweDtcbn1cbiNjb2wyIHtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuI2JvdHRvbXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjN2VjOGVkO1xufVxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cbmh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuaDEge1xuICBmb250LXNpemU6IDIwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTUwcHggMDtcbn1cbmhlYWRlciBwIHtcbiAgZm9udC1mYW1pbHk6ICdBbGx1cmEnO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDYwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuLnRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpbWVsaW5lOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZDogI2M1Y2FlOTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA5NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4udGltZWxpbmUtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKG9kZCkgLnRpbWVsaW5lLWNvbnRlbnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDQwcHggMzBweCAxMHB4IDMwcHg7XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudCAuZGF0ZSB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKG9kZCkgLnRpbWVsaW5lLWNvbnRlbnQ6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAtMTVweDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDE1cHggMTBweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNjNWNhZTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNDBweCAzMHB4IDEwcHggMzBweDtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudCAuZGF0ZSB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IC0xNXB4O1xuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2M1Y2FlOTtcbn1cbi50aW1lbGluZS1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG4udGltZWxpbmUtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMjBweCAyNXB4IC0xNXB4IHJnYmEoMCwwLDAsMC4zKTtcbn1cbi50aW1lbGluZS1jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IC0xNXB4O1xuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2M1Y2FlOTtcbn1cbi50aW1lbGluZS1pbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4uYm50LW1vcmUge1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAtMXB4IHJnYmEoMCwwLDAsMC42KTtcbn1cbi5ibnQtbW9yZTpob3Zlcixcbi5ibnQtbW9yZTphY3RpdmUsXG4uYm50LW1vcmU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMzk0OWEzO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRpbWVsaW5lLWNhcmQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUtY2FyZCBwIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi50aW1lbGluZS1jYXJkIGEge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZCgyKSAudGltZWxpbmUtaW1nLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuNCkpLCB1cmwoXCJzcmNcXGFzc2V0c1xcSW1hZ2VzXFxkeGNfbG9nby5wbmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZCg1KSAudGltZWxpbmUtaW1nLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuNCkpLCB1cmwoXCJzcmNcXGFzc2V0c1xcSW1hZ2VzXFxhbnpMb2dvLnBuZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKDgpIC50aW1lbGluZS1pbWctaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC40KSksIHVybChcInNyY1xcYXNzZXRzXFxJbWFnZXNcXGdvY2xvdWRwbmcucG5nXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoMTEpIC50aW1lbGluZS1pbWctaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC40KSksIHVybChcInNyY1xcYXNzZXRzXFxJbWFnZXNcXE90YWdvMi5wbmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi50aW1lbGluZS1pbWctaGVhZGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpbWVsaW5lLWltZy1oZWFkZXIgaDIge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbiAgbGVmdDogMjBweDtcbn1cbmJsb2NrcXVvdGUge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMzZjUxYjU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5kYXRlIHtcbiAgYmFja2dyb3VuZDogIzFkMzQ2MTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLyogRUZGRUNUU1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG4udGltZWxpbmUtaXRlbSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoZXZlbikge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDBweCwgMCwgMCk7XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwcHgsIDAsIDApO1xufVxuLnRpbWVsaW5lLWl0ZW0uaW4tdmlldyB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50aW1lbGluZTo6YmVmb3JlIHtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtaW1nIHtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtaXRlbTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogLTE1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDE1cHggMTBweCAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2Y1ZjVmNSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgfVxufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9wYWdlcy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
        this.birthdate = new Date("1997-01-30");
    }
    ExperienceComponent.prototype.CalculateAge = function () {
        var today = new Date();
        var age = today.getFullYear() - this.birthdate.getFullYear();
        var m = today.getMonth() - this.birthdate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birthdate.getDate())) {
            age--;
        }
        return age.toString();
    };
    ExperienceComponent.prototype.ngOnInit = function () {
        this.loadScript();
    };
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
    ExperienceComponent.prototype.loadScript = function () {
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
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.styl */ "./src/app/pages/experience/experience.component.styl")]
        })
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.styl":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  background-color: #008f95;\n  text-align: center;\n  min-height: 100%;\n}\n.main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  text-align: center;\n  height: 100% -120px;\n}\nimg {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  margin-top: 20px;\n}\nh1 {\n  margin-top: 0;\n}\n.name {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 120px;\n  margin: 0px;\n  color: #28afb0;\n}\n.name1 {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  letter-spacing: 5px;\n  font-weight: 300;\n  font-size: 120px;\n  margin: 0px;\n  color: #2c3e50;\n}\n.topsection {\n  display: -webkit-box;\n  display: flex;\n  padding: 15px;\n  margin: auto;\n  margin-top: 20px;\n  width: 550px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\nsection {\n  margin-top: 10px;\n}\n.example_c {\n  width: 160px;\n  margin-top: 15px;\n  color: #acfcd9 !important;\n  font-family: Andale Mono, monospace;\n  font-style: bold;\n  text-transform: uppercase;\n  text-decoration: none;\n  background: #008f95;\n  padding: 20px;\n  border: 4px solid #acfcd9 !important;\n  display: inline-block;\n  -webkit-transition: all 0.4s ease 0s;\n  transition: all 0.4s ease 0s;\n}\n.example_c:hover {\n  color: #acfcd9 !important;\n  background: #28afb0;\n  border-color: #28afb0 !important;\n  -webkit-transition: all 0.4s ease 0s;\n  transition: all 0.4s ease 0s;\n}\n.button_cont span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.button_cont {\n  width: 200px;\n  margin: auto;\n}\n.button_cont span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.button_cont:hover span {\n  padding-right: 15px;\n}\n.button_cont:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n/*# sourceMappingURL=src/app/pages/home/home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVE7RUFBUixhQUFRO0VBQ1IsNEJBQWU7RUFBZiw2QkFBZTtVQUFmLHNCQUFlO0VBQ2YsWUFBTztFQUNQLHlCQUFpQjtFQUNqQixrQkFBVztFQUNYLGdCQUFXO0FDQ2Y7QURDQTtFQUNJLG9CQUFRO0VBQVIsYUFBUTtFQUNSLDRCQUFlO0VBQWYsNkJBQWU7VUFBZixzQkFBZTtFQUNmLFlBQU87RUFDUCxrQkFBVztFQUNYLG1CQUFPO0FDQ1g7QURDQTtFQUNJLGtCQUFjO0VBQ2QsWUFBTTtFQUNOLGFBQU87RUFDUCxnQkFBVztBQ0NmO0FEQ0U7RUFDRSxhQUFXO0FDQ2Y7QURDQTtFQUNJLDJDQUFzQjtFQUN0QixrQkFBWTtFQUNaLGdCQUFhO0VBQ2IsZ0JBQVU7RUFDVixXQUFRO0VBQ1IsY0FBTTtBQ0NWO0FEQ0E7RUFDSSwyQ0FBc0I7RUFDdEIsa0JBQVk7RUFDWixtQkFBZ0I7RUFDaEIsZ0JBQWE7RUFDYixnQkFBVTtFQUNWLFdBQVE7RUFDUixjQUFNO0FDQ1Y7QURDQTtFQUNJLG9CQUFRO0VBQVIsYUFBUTtFQUNSLGFBQVE7RUFDUixZQUFPO0VBQ1AsZ0JBQVc7RUFDWCxZQUFNO0VBQ04sOEJBQWU7RUFBZiw2QkFBZTtVQUFmLG1CQUFlO0VBQ2YsOEJBQWlCO1VBQWpCLDZCQUFpQjtBQ0NyQjtBRENBO0VBQ0ksZ0JBQVc7QUNDZjtBRENBO0VBQ0ksWUFBTTtFQUNOLGdCQUFXO0VBQ1gseUJBQU07RUFDTixtQ0FBdUI7RUFDdkIsZ0JBQVc7RUFDWCx5QkFBZTtFQUNmLHFCQUFnQjtFQUNoQixtQkFBVztFQUNYLGFBQVE7RUFDUixvQ0FBTztFQUNQLHFCQUFRO0VBQ1Isb0NBQVc7RUFBWCw0QkFBVztBQ0NmO0FEQ0E7RUFDSSx5QkFBTTtFQUNOLG1CQUFXO0VBQ1gsZ0NBQWE7RUFDYixvQ0FBVztFQUFYLDRCQUFXO0FDQ2Y7QURDQTtFQUNFLGVBQVE7RUFDUixxQkFBUztFQUNULGtCQUFVO0VBQ1Ysd0JBQVk7RUFBWixnQkFBWTtBQ0NkO0FERUE7RUFDSSxZQUFNO0VBQ04sWUFBTztBQ0FYO0FERUE7RUFDRSxnQkFBUztFQUNULGtCQUFVO0VBQ1YsVUFBUztFQUNULE1BQUs7RUFDTCxZQUFPO0VBQ1Asd0JBQVk7RUFBWixnQkFBWTtBQ0FkO0FER0E7RUFDRSxtQkFBZTtBQ0RqQjtBRElBO0VBQ0UsVUFBUztFQUNULFFBQU87QUNGVDtBQUNBLGdFQUFnRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50XHJcbiAgICBkaXNwbGF5IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxyXG4gICAgbWFyZ2luIGF1dG9cclxuICAgIGJhY2tncm91bmQtY29sb3IgIzAwOGY5NVxyXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcclxuICAgIG1pbi1oZWlnaHQgMTAwJVxyXG5cclxuLm1haW5cclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXHJcbiAgICBtYXJnaW4gYXV0b1xyXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcclxuICAgIGhlaWdodCAxMDAlLTEyMHB4XHJcblxyXG5pbWcgXHJcbiAgICBib3JkZXItcmFkaXVzIDUwJVxyXG4gICAgd2lkdGggMjAwcHhcclxuICAgIGhlaWdodCAyMDBweFxyXG4gICAgbWFyZ2luLXRvcCAyMHB4XHJcblxyXG4gIGgxIFxyXG4gICAgbWFyZ2luLXRvcCAwXHJcblxyXG4ubmFtZVxyXG4gICAgZm9udC1mYW1pbHk6ICdkZWFkamltJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemUgMTIwcHhcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3IgIzI4QUZCMFxyXG5cclxuLm5hbWUxXHJcbiAgICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweFxyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZSAxMjBweFxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBjb2xvciAjMmMzZTUwXHJcblxyXG4udG9wc2VjdGlvblxyXG4gICAgZGlzcGxheSBmbGV4XHJcbiAgICBwYWRkaW5nIDE1cHhcclxuICAgIG1hcmdpbiBhdXRvXHJcbiAgICBtYXJnaW4tdG9wIDIwcHhcclxuICAgIHdpZHRoIDU1MHB4XHJcbiAgICBmbGV4LWRpcmVjdGlvbiByb3dcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5XHJcblxyXG5zZWN0aW9uIFxyXG4gICAgbWFyZ2luLXRvcCAxMHB4O1xyXG5cclxuLmV4YW1wbGVfY1xyXG4gICAgd2lkdGggMTYwcHhcclxuICAgIG1hcmdpbi10b3AgMTVweFxyXG4gICAgY29sb3IgI0FDRkNEOSFpbXBvcnRhbnRcclxuICAgIGZvbnQtZmFtaWx5IEFuZGFsZSBNb25vLCBtb25vc3BhY2VcclxuICAgIGZvbnQtc3R5bGUgYm9sZFxyXG4gICAgdGV4dC10cmFuc2Zvcm0gdXBwZXJjYXNlXHJcbiAgICB0ZXh0LWRlY29yYXRpb24gbm9uZVxyXG4gICAgYmFja2dyb3VuZCAjMDA4Zjk1XHJcbiAgICBwYWRkaW5nIDIwcHhcclxuICAgIGJvcmRlciA0cHggc29saWQgI0FDRkNEOSAhaW1wb3J0YW50XHJcbiAgICBkaXNwbGF5IGlubGluZS1ibG9ja1xyXG4gICAgdHJhbnNpdGlvbiBhbGwgMC40cyBlYXNlIDBzXHJcblxyXG4uZXhhbXBsZV9jOmhvdmVyXHJcbiAgICBjb2xvciAjQUNGQ0Q5ICFpbXBvcnRhbnRcclxuICAgIGJhY2tncm91bmQgIzI4YWZiMFxyXG4gICAgYm9yZGVyLWNvbG9yICMyOGFmYjAgIWltcG9ydGFudFxyXG4gICAgdHJhbnNpdGlvbiBhbGwgMC40cyBlYXNlIDBzXHJcblxyXG4uYnV0dG9uX2NvbnQgc3BhbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJ1dHRvbl9jb250XHJcbiAgICB3aWR0aCAyMDBweFxyXG4gICAgbWFyZ2luIGF1dG9cclxuXHJcbi5idXR0b25fY29udCBzcGFuOmFmdGVyIHtcclxuICBjb250ZW50OiAnXFwwMGJiJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5idXR0b25fY29udDpob3ZlciBzcGFuIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uX2NvbnQ6aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufSIsIiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Zjk1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCUgLTEyMHB4O1xufVxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5oMSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ubmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMjBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjMjhhZmIwO1xufVxuLm5hbWUxIHtcbiAgZm9udC1mYW1pbHk6ICdkZWFkamltJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEyMHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG4udG9wc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDU1MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmV4YW1wbGVfYyB7XG4gIHdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6ICNhY2ZjZDkgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFuZGFsZSBNb25vLCBtb25vc3BhY2U7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzAwOGY5NTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgI2FjZmNkOSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG59XG4uZXhhbXBsZV9jOmhvdmVyIHtcbiAgY29sb3I6ICNhY2ZjZDkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzI4YWZiMDtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhZmIwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG59XG4uYnV0dG9uX2NvbnQgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uYnV0dG9uX2NvbnQge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5idXR0b25fY29udCBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogJ1xcMDBiYic7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uYnV0dG9uX2NvbnQ6aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uYnV0dG9uX2NvbnQ6aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.styl */ "./src/app/pages/home/home.component.styl")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.styl */ "./src/app/pages/pages.component.styl")]
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/skills/skills.component.styl":
/*!****************************************************!*\
  !*** ./src/app/pages/skills/skills.component.styl ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  background-color: #fff;\n  text-align: center;\n  min-height: 100%;\n}\n.abovesection {\n  background-color: #0b4f6c;\n  height: 100vh -50px;\n  margin: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n.belowsection {\n  background-color: #fff;\n  height: 1000px;\n  margin: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n.bottompage {\n  background-color: #f0f0f0;\n  height: 600px;\n  margin: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\np {\n  margin-bottom: 0px;\n  margin-top: 25px;\n}\n.toptitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 180px;\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n.bottomtitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 100px;\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n.bottomtitle2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 180px;\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n.title {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 80px;\n  margin: 0px;\n  color: #fff;\n}\n.title2 {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 80px;\n  margin: 0px;\n  color: #0b4f6c;\n}\n.technicalsection {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  margin-top: 150px;\n  margin-bottom: 50px;\n  text-align: center;\n  box-shadow: 0 20px 20px -15px rgba(0,0,0,0.3);\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n  background-color: #fff;\n  height: 400px;\n  width: 600px;\n  border-radius: 4px;\n}\n.header {\n  height: 50px;\n  text-align: center;\n  margin: 0px;\n  width: 100%;\n}\n.portfolio {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  margin: auto;\n  margin-top: 150px;\n  margin-bottom: 50px;\n  text-align: center;\n  box-shadow: 0 20px 20px -15px rgba(0,0,0,0.3);\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  background-color: #fff;\n  height: 600px;\n  width: 600px;\n  padding: 0;\n  border-radius: 4px;\n}\n.card {\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: flex;\n}\n.hiddenblock {\n  width: 100%;\n  background: #d3d3d3;\n  opacity: 0.9;\n  height: 0%;\n  -webkit-transition: height 500ms;\n  transition: height 500ms;\n}\n.hiddenblock p {\n  font-size: 1rem;\n  padding: 1rem 1.5rem;\n  font-weight: 800;\n  line-height: 1.8;\n  text-align: center;\n  color: #00343f;\n  padding-top: 40px;\n  display: block;\n  -webkit-transition: visibility 0s, opacity 0.3s linear;\n  transition: visibility 0s, opacity 0.3s linear;\n  opacity: 0;\n}\n.card:hover .hiddenblock {\n  top: 0;\n  z-index: 2;\n  height: 100%;\n}\n.card:hover .hiddenblock p {\n  visibility: visible;\n  opacity: 1;\n}\n.certificates {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  margin-top: 40px;\n  text-align: center;\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n  height: 300px;\n  width: 300px;\n  border-radius: 4px;\n  background: url('microsoft.png') center no-repeat;\n  background-color: #fff;\n  box-shadow: 0 20px 20px -15px rgba(0,0,0,0.3);\n}\n.certLink {\n  display: block;\n  width: 300px;\n  height: 300px;\n}\n.card:nth-child(1) {\n  background: url('AngularCV2.png') center/contain no-repeat;\n}\n.card:nth-child(2) {\n  background: url('Squash.png') center/contain no-repeat;\n}\n.in-view {\n  -webkit-transform: translateY(-100px);\n          transform: translateY(-100px);\n}\n.topsection {\n  background-color: #f7f7f7;\n  width: 100%;\n  margin: 0;\n  height: 130px;\n}\n.bottomsection {\n  display: block;\n  padding: 15px;\n  margin: auto;\n  width: 90%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.bar {\n  -webkit-box-align: end;\n          align-items: flex-end;\n  background-color: #eee;\n  color: #666;\n  width: 80%;\n  font-size: 11pt;\n  height: 28px;\n}\n.flex {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 15px;\n  margin-left: 50px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nspan {\n  display: initial;\n  z-index: 1;\n  padding: 0 10px 0 0;\n  margin-bottom: 5px;\n}\n.fill {\n  left: 0;\n  position: relative;\n  width: 0px;\n  top: 0;\n  background-color: #00a1a7;\n  opacity: 1;\n  z-index: 2;\n  padding: 0;\n  -webkit-transition-property: width;\n  transition-property: width;\n  -webkit-transition-duration: 1s;\n          transition-duration: 1s;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n}\n.tag {\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: flex;\n  padding-top: 5px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: absolute;\n  background-color: #04c2c9;\n  margin: 0;\n  color: #fff;\n  height: 23px;\n  width: 110px;\n  font: 13px/1.4 Helvetica, arial, freesans, clean, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 700;\n}\n/*# sourceMappingURL=src/app/pages/skills/skills.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFRO0VBQVIsYUFBUTtFQUNSLDRCQUFlO0VBQWYsNkJBQWU7VUFBZixzQkFBZTtFQUNmLFlBQU87RUFDUCxzQkFBaUI7RUFDakIsa0JBQVc7RUFDWCxnQkFBVztBQ0NmO0FEQ0E7RUFDSSx5QkFBaUI7RUFDakIsbUJBQU87RUFDUCxZQUFPO0VBQ1AsNEJBQWU7RUFBZiw2QkFBZTtVQUFmLHNCQUFlO0VBQ2YsV0FBTTtBQ0NWO0FEQ0E7RUFDSSxzQkFBaUI7RUFDakIsY0FBTztFQUNQLFlBQU87RUFDUCw0QkFBZTtFQUFmLDZCQUFlO1VBQWYsc0JBQWU7RUFDZixXQUFNO0FDQ1Y7QURDQTtFQUNJLHlCQUFpQjtFQUNqQixhQUFPO0VBQ1AsWUFBTztFQUNQLDRCQUFlO0VBQWYsNkJBQWU7VUFBZixzQkFBZTtFQUNmLFdBQU07QUNDVjtBRENBO0VBQ0ksa0JBQWM7RUFDZCxnQkFBVztBQ0NmO0FEQ0E7RUFDSSxvQkFBUTtFQUFSLGFBQVE7RUFDUix3QkFBZ0I7VUFBaEIsdUJBQWdCO0VBQ2hCLDRCQUFlO0VBQWYsNkJBQWU7VUFBZixzQkFBZTtFQUNmLGlCQUFXO0VBQ1gsNkNBQVc7RUFBWCxxQ0FBVztFQUFYLDZCQUFXO0VBQVgsd0RBQVc7RUFDWCw4QkFBaUI7VUFBakIsc0JBQWlCO0FDQ3JCO0FEQ0E7RUFDSSxvQkFBUTtFQUFSLGFBQVE7RUFDUix3QkFBZ0I7VUFBaEIsdUJBQWdCO0VBQ2hCLGlCQUFXO0VBQ1gsNkNBQVc7RUFBWCxxQ0FBVztFQUFYLDZCQUFXO0VBQVgsd0RBQVc7RUFDWCw4QkFBaUI7VUFBakIsc0JBQWlCO0FDQ3JCO0FEQ0E7RUFDSSxvQkFBUTtFQUFSLGFBQVE7RUFDUix3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QURBQTtFQUNJLGdCQUFRO0VBQ1IsVUFBUTtFQUNSLG1CQUFRO0VBQ1Isa0JBQWM7QUNFbEI7QURBQTtFQUNJLE9BQU07RUFDTixrQkFBUztFQUNULFVBQU07RUFDTixNQUFLO0VBQ0wseUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxVQUFRO0VBQ1IsVUFBUztFQUNULGtDQUFvQjtFQUFwQiwwQkFBb0I7RUFDcEIsK0JBQW9CO1VBQXBCLHVCQUFvQjtFQUNwQiwrQ0FBNEI7VUFBNUIsdUNBQTRCO0FDRWhDO0FEQUE7RUFDSSxPQUFNO0VBQ04sTUFBSTtFQUNKLG9CQUFRO0VBQVIsYUFBUTtFQUNSLGdCQUFZO0VBQ1osd0JBQWdCO1VBQWhCLHVCQUFnQjtFQUNoQixrQkFBVTtFQUNWLHlCQUFrQjtFQUNsQixTQUFPO0VBQ1AsV0FBTztFQUNQLFlBQU87RUFDUCxZQUFPO0VBQ1AsaUdBQXdCO0VBQ3hCLGdCQUFhO0FDRWpCO0FBQ0Esb0VBQW9FIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50XHJcbiAgICBkaXNwbGF5IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxyXG4gICAgbWFyZ2luIGF1dG9cclxuICAgIGJhY2tncm91bmQtY29sb3Igd2hpdGVcclxuICAgIHRleHQtYWxpZ24gY2VudGVyXHJcbiAgICBtaW4taGVpZ2h0IDEwMCVcclxuICAgIFxyXG4uYWJvdmVzZWN0aW9uXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yICMwQjRGNkNcclxuICAgIGhlaWdodCAxMDB2aC01MHB4XHJcbiAgICBtYXJnaW4gYXV0b1xyXG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXHJcbiAgICB3aWR0aCAxMDAlXHJcblxyXG4uYmVsb3dzZWN0aW9uXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIHdoaXRlXHJcbiAgICBoZWlnaHQgMTAwMHB4XHJcbiAgICBtYXJnaW4gYXV0b1xyXG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXHJcbiAgICB3aWR0aCAxMDAlXHJcblxyXG4uYm90dG9tcGFnZVxyXG4gICAgYmFja2dyb3VuZC1jb2xvciAjRjBGMEYwXHJcbiAgICBoZWlnaHQgNjAwcHhcclxuICAgIG1hcmdpbiBhdXRvXHJcbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cclxuICAgIHdpZHRoIDEwMCVcclxuXHJcbnBcclxuICAgIG1hcmdpbi1ib3R0b20gMHB4XHJcbiAgICBtYXJnaW4tdG9wIDI1cHhcclxuXHJcbi50b3B0aXRsZVxyXG4gICAgZGlzcGxheSBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXHJcbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cclxuICAgIG1hcmdpbi10b3AgMTgwcHhcclxuICAgIHRyYW5zaXRpb24gdHJhbnNmb3JtIDFzIGVhc2VcclxuICAgIHRyYW5zaXRpb24tZGVsYXkgMC4yc1xyXG5cclxuLmJvdHRvbXRpdGxlXHJcbiAgICBkaXNwbGF5IGZsZXhcclxuICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcclxuICAgIG1hcmdpbi10b3AgMTAwcHhcclxuICAgIHRyYW5zaXRpb24gdHJhbnNmb3JtIDFzIGVhc2VcclxuICAgIHRyYW5zaXRpb24tZGVsYXkgMC4yc1xyXG5cclxuLmJvdHRvbXRpdGxlMlxyXG4gICAgZGlzcGxheSBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXHJcbiAgICBtYXJnaW4tdG9wIDE4MHB4XHJcbiAgICB0cmFuc2l0aW9uIHRyYW5zZm9ybSAxcyBlYXNlXHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5IDAuMnNcclxuXHJcbi50aXRsZVxyXG4gICAgZm9udC1mYW1pbHk6ICdkZWFkamltJywgJ2FyaWFsJywgc2Fucy1zZXJpZjsgIFxyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZSA4MHB4XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yIHdoaXRlXHJcblxyXG4udGl0bGUyXHJcbiAgICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmOyAgXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplIDgwcHhcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3IgIzBCNEY2Q1xyXG5cclxuLnRlY2huaWNhbHNlY3Rpb25cclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXHJcbiAgICBtYXJnaW4gYXV0b1xyXG4gICAgbWFyZ2luLXRvcCAxNTBweFxyXG4gICAgbWFyZ2luLWJvdHRvbSA1MHB4XHJcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxyXG4gICAgYm94LXNoYWRvdyAwIDIwcHggMjBweCAtMTVweCByZ2JhKDAsIDAsIDAsIC4zKVxyXG4gICAgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gMXMgZWFzZVxyXG4gICAgdHJhbnNpdGlvbi1kZWxheSAwLjJzXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIHdoaXRlXHJcbiAgICBoZWlnaHQgNDAwcHhcclxuICAgIHdpZHRoIDYwMHB4XHJcbiAgICBib3JkZXItcmFkaXVzIDRweFx0XHJcblxyXG4uaGVhZGVyXHJcbiAgICBoZWlnaHQgNTBweFxyXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcclxuICAgIG1hcmdpbiAwcHhcclxuICAgIHdpZHRoIDEwMCVcclxuXHJcbi5wb3J0Zm9saW9cclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgZmxleC1mbG93IHJvdyB3cmFwXHJcbiAgICBtYXJnaW4gYXV0b1xyXG4gICAgbWFyZ2luLXRvcCAxNTBweFxyXG4gICAgbWFyZ2luLWJvdHRvbSA1MHB4XHJcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxyXG4gICAgYm94LXNoYWRvdyAwIDIwcHggMjBweCAtMTVweCByZ2JhKDAsIDAsIDAsIC4zKVxyXG4gICAgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gMXMgZWFzZVxyXG4gICAgYmFja2dyb3VuZC1jb2xvciB3aGl0ZVxyXG4gICAgaGVpZ2h0IDYwMHB4XHJcbiAgICB3aWR0aCA2MDBweFxyXG4gICAgcGFkZGluZyAwXHJcbiAgICBib3JkZXItcmFkaXVzIDRweFx0XHJcblxyXG4uY2FyZCAgIFxyXG4gICAgd2lkdGggMTAwJVxyXG4gICAgaGVpZ2h0IDUwJVxyXG4gICAgZGlzcGxheSBmbGV4XHJcblxyXG4uaGlkZGVuYmxvY2tcclxuICAgIHdpZHRoIDEwMCVcclxuICAgIGJhY2tncm91bmQgbGlnaHRncmV5XHJcbiAgICBvcGFjaXR5IDAuOVxyXG4gICAgaGVpZ2h0IDAlXHJcbiAgICB0cmFuc2l0aW9uIGhlaWdodCA1MDBtc1xyXG4gICAgcFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMDAzNDNmO1xyXG4gICAgICAgIHBhZGRpbmctdG9wIDQwcHhcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICAgICAgb3BhY2l0eSAwXHJcblxyXG5cclxuXHJcbi5jYXJkOmhvdmVyIC5oaWRkZW5ibG9ja1xyXG4gICAgdG9wIDBcclxuICAgIHotaW5kZXg6IDJcclxuICAgIGhlaWdodCAxMDAlXHJcbiAgICBwXHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZVxyXG4gICAgICAgIG9wYWNpdHkgMVxyXG5cclxuIC5jZXJ0aWZpY2F0ZXNcclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXHJcbiAgICBtYXJnaW4gYXV0b1xyXG4gICAgbWFyZ2luLXRvcCA0MHB4XHJcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxyXG4gICAgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gMXMgZWFzZVxyXG4gICAgdHJhbnNpdGlvbi1kZWxheSAwLjJzXHJcbiAgICBoZWlnaHQgMzAwcHhcclxuICAgIHdpZHRoIDMwMHB4XHJcbiAgICBib3JkZXItcmFkaXVzIDRweFx0XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyY1xcYXNzZXRzXFxJbWFnZXNcXG1pY3Jvc29mdC5wbmcnKSBjZW50ZXIgbm8tcmVwZWF0OyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvciB3aGl0ZSAgICBcclxuICAgIGJveC1zaGFkb3cgMCAyMHB4IDIwcHggLTE1cHggcmdiYSgwLCAwLCAwLCAuMykgICBcclxuXHJcbi5jZXJ0TGlua1xyXG4gICAgZGlzcGxheSBibG9ja1xyXG4gICAgd2lkdGggMzAwcHhcclxuICAgIGhlaWdodCAzMDBweFxyXG5cclxuLmNhcmQ6bnRoLWNoaWxkKDEpXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyY1xcYXNzZXRzXFxJbWFnZXNcXEFuZ3VsYXJDVjIucG5nJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xyXG5cclxuLmNhcmQ6bnRoLWNoaWxkKDIpXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyY1xcYXNzZXRzXFxJbWFnZXNcXFNxdWFzaC5wbmcnKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XHJcblxyXG4uaW4tdmlld1xyXG4gICAgdHJhbnNmb3JtIHRyYW5zbGF0ZVkoLTEwMHB4KVxyXG5cclxuLnRvcHNlY3Rpb25cclxuICAgIGJhY2tncm91bmQtY29sb3IgI2Y3ZjdmN1xyXG4gICAgd2lkdGggMTAwJVxyXG4gICAgbWFyZ2luIDBcclxuICAgIGhlaWdodCAxMzBweFxyXG5cclxuLmJvdHRvbXNlY3Rpb25cclxuICAgIGRpc3BsYXkgYmxvY2tcclxuICAgIHBhZGRpbmcgMTVweFxyXG4gICAgbWFyZ2luIGF1dG9cclxuICAgIHdpZHRoIDkwJVxyXG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXHJcblxyXG4uYmFyIFxyXG4gICAgYWxpZ24taXRlbXMgZmxleC1lbmRcclxuICAgIGJhY2tncm91bmQtY29sb3IgI2VlZVxyXG4gICAgY29sb3I6ICM2NjZcclxuICAgIHdpZHRoIDgwJVxyXG4gICAgZm9udC1zaXplIDExcHRcclxuICAgIGhlaWdodCAyOHB4XHJcblxyXG4uZmxleFxyXG4gICAgZGlzcGxheSBmbGV4XHJcbiAgICBtYXJnaW4tYm90dG9tIDE1cHhcclxuICAgIG1hcmdpbi1sZWZ0IDUwcHhcclxuICAgIGZsZXgtZGlyZWN0aW9uIHJvd1xyXG4gICAganVzdGlmeS1jb250ZW50IHNwYWNlLWJldHdlZW5cclxuc3BhbiBcclxuICAgIGRpc3BsYXkgaW5pdGlhbCAgXHJcbiAgICB6LWluZGV4IDFcclxuICAgIHBhZGRpbmcgMCAxMHB4IDAgMFxyXG4gICAgbWFyZ2luLWJvdHRvbSA1cHhcclxuXHJcbi5maWxsXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb24gcmVsYXRpdmVcclxuICAgIHdpZHRoIDBweFxyXG4gICAgdG9wOiAwOyAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWE3O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXggMlxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgd2lkdGhcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gMXNcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dFxyXG5cclxuLnRhZ1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcCAwXHJcbiAgICBkaXNwbGF5IGZsZXhcclxuICAgIHBhZGRpbmctdG9wIDVweFxyXG4gICAganVzdGlmeS1jb250ZW50IGNlbnRlclxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0YzJjOTtcclxuICAgIG1hcmdpbiAwXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodCAyM3B4XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBmb250OiAxM3B4LzEuNCBIZWx2ZXRpY2EsIGFyaWFsLCBmcmVlc2FucywgY2xlYW4sIHNhbnMtc2VyaWYsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgIiwiI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5hYm92ZXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI0ZjZjO1xuICBoZWlnaHQ6IDEwMHZoIC01MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJlbG93c2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvdHRvbXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxucCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi50b3B0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxODBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG4uYm90dG9tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuLmJvdHRvbXRpdGxlMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxODBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnRpdGxlMiB7XG4gIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICMwYjRmNmM7XG59XG4udGVjaG5pY2Fsc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggLTE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wb3J0Zm9saW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IC0xNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGlkZGVuYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgb3BhY2l0eTogMC45O1xuICBoZWlnaHQ6IDAlO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXM7XG59XG4uaGlkZGVuYmxvY2sgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDM0M2Y7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbiAgb3BhY2l0eTogMDtcbn1cbi5jYXJkOmhvdmVyIC5oaWRkZW5ibG9jayB7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcmQ6aG92ZXIgLmhpZGRlbmJsb2NrIHAge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuLmNlcnRpZmljYXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHVybChcInNyY1xcYXNzZXRzXFxJbWFnZXNcXG1pY3Jvc29mdC5wbmdcIikgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggLTE1cHggcmdiYSgwLDAsMCwwLjMpO1xufVxuLmNlcnRMaW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbi5jYXJkOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyY1xcYXNzZXRzXFxJbWFnZXNcXEFuZ3VsYXJDVjIucG5nXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcbn1cbi5jYXJkOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyY1xcYXNzZXRzXFxJbWFnZXNcXFNxdWFzaC5wbmdcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufVxuLmluLXZpZXcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcbn1cbi50b3BzZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMzBweDtcbn1cbi5ib3R0b21zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYmFyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzY2NjtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAxMXB0O1xuICBoZWlnaHQ6IDI4cHg7XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5zcGFuIHtcbiAgZGlzcGxheTogaW5pdGlhbDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMCAxMHB4IDAgMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmZpbGwge1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAwcHg7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFhNztcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG4udGFnIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRjMmM5O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDIzcHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgZm9udDogMTNweC8xLjQgSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.width90 = '90%';
        this.width80 = '80%';
        this.width75 = '75%';
        this.width70 = '70%';
        this.width65 = '65%';
        this.width60 = '60%';
        this.t1 = '0.6s';
        this.t2 = '0.7s';
        this.t3 = '0.8s';
        this.t4 = '0.9s';
        this.t5 = '1s';
        this.t6 = '1.1s';
        this.t7 = '1.2s';
        this.t8 = '1.3s';
        this.transform1 = 'translateY(-100px)';
        this.transform2 = 'translateY(20px)';
        this.transform3 = 'translateY(-100px)';
        this.transform4 = 'translateY(-100px)';
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.loadScript();
    };
    SkillsComponent.prototype.loadScript = function () {
        (function () {
            'use strict';
            // define variables
            //var item = document.querySelector(".portfolio");    
            var items = [document.querySelector(".portfolio"), document.querySelector(".certificates")];
            setTimeout(function () {
                for (var i = 0; i < items.length; i++) {
                    if (isElementInViewport(items[i])) {
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
                for (var i = 0; i < items.length; i++) {
                    if (isElementInViewport(items[i])) {
                        items[i].classList.add("in-view");
                    }
                }
            }
            // listen for events
            window.addEventListener("resize", callbackFunc);
            window.addEventListener("scroll", callbackFunc);
        })();
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skils',
            template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.styl */ "./src/app/pages/skills/skills.component.styl")]
        })
    ], SkillsComponent);
    return SkillsComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Josh\Documents\Projects\AngularCV\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map