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

module.exports = "<div (touchstart)=\"swipe($event, 'start')\" (touchend)=\"swipe($event, 'end')\" style=\"height: 100%;\">\n\n\n  <div id=\"wrapper\">\n    <button (click)=\"toggleShow()\" id=\"test\" aria-label=\"Toggle navigation menu\" class=\"fa fa-bars fa-2x\">\n    </button>\n    <div [@slideInOut]=\"animationState\" class=\"navigation_background\">\n\n    <nav *ngIf=\"navShow\" class=\"Navigation_mobile-nav\">\n      <a (click)=\"toggleShow()\" class=\"navLink_mobile\" routerLink=\"\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n        true}\">Home</a>\n      <a (click)=\"toggleShow()\" class=\"navLink_mobile\" routerLink=\"/experience\" routerLinkActive=\"active-link\">Experience</a>\n      <a (click)=\"toggleShow()\" class=\"navLink_mobile\" routerLink=\"/skills\" routerLinkActive=\"active-link\">Skills</a>\n      <a (click)=\"toggleShow()\" class=\"navLink_mobile\" routerLink=\"/contact\" routerLinkActive=\"active-link\">Contact</a>\n    </nav>\n\n    </div>\n          <header>\n              <nav>\n                  <a class=\"navLink\" routerLink=\"\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\n                    true}\">Home</a>\n                  <a class=\"navLink\" routerLink=\"/experience\" routerLinkActive=\"active-link\">Experience</a>\n                  <a class=\"navLink\" routerLink=\"/skills\" routerLinkActive=\"active-link\">Skills</a>\n                  <a class=\"navLink\" routerLink=\"/contact\" routerLinkActive=\"active-link\">Contact</a>\n                </nav>           \n          </header>\n        \n        <router-outlet></router-outlet>\n\n  </div>\n</div>\n\n\n\n"

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

module.exports = "<div id=\"content\">\n    <div class=\"main\">\n        <div class=\"toptitle\" [ngStyle]=\"{transform:transform2}\">\n            <h2 class=\"title\">CONTACT</h2>\n            \n        </div>\n        <div class=\"technicalsection\" [ngStyle]=\"{transform:transform1}\">\n            \n            <div class=\"topsection\">\n                <p>You can reach me on either of the below channels:</p>\n            </div>\n            \n            <div class=\"contactlinks\">\n                <div class=\"contactlink\">\n                    <a class=\"certLink\" href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\"></a>\n                    <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa-contact fa fa-linkedin\"></a>\n                    <div>\n                        <h3>LinkedIn</h3>\n                        <p>Josh Tell</p>\n                    </div>\n                </div>\n                <div class=\"contactlink\">\n                    <a class=\"certLink\" href=\"mailto:jtell1997@gmail.com\" target=\"_blank\"></a>\n                    <a href=\"mailto:jtell1997@gmail.com\" target=\"_blank\" class=\"fa-contact fa fa-paper-plane\"></a>\n                    <div>\n                        <h3>Email</h3>\n                        <p>jtell1997@gmail.com</p>\n                        \n                    </div>\n                </div>\n            </div>       \n        </div>\n    </div>\n\n\n    <footer>     \n        <h2>CONNECT WITH ME</h2>     \n        <div id=\"socials\">\n            <a href=\"https://github.com/telljo\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\n            <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a> \n            <a href=\"mailto:jtell1997@gmail.com\" target=\"_blank\" class=\"fa1 fa fa-paper-plane\"></a> \n        </div>\n      </footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/experience/experience.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/experience/experience.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"main\">\n    <section class=\"intro\">\n            \n        <div id=\"container\">\n            <h2 class=\"title\">ABOUT ME</h2>\n            <hr class=\"breakLine\">\n        <div id=\"top\">\n            <div id=\"col1\">\n                    <p class=\"introText\">\n                            Hi, I'm Josh! I'm a {{CalculateDifference(\"age\")}} year old software developer from Aotearoa New Zealand. In November 2017 I graduated from the <a class=\"inText\" href=\"https://www.otago.ac.nz/\" target=\"_blank\">University of Otago</a> with a BSc majoring in Computer Science.\n                            After graduating, I ventured out into an exciting new journey in the IT industry.\n                            \n                        </p>\n            </div>\n            <div id=\"col2\">\n                    <p class=\"introText\">\n                            I have {{CalculateDifference(\"experience\")}} years of experience as a full stack \n                            developer. I am currently working as a Ruby on Rails developer at \n                            <a class=\"inText\" href=\"https://www.banqer.co/\" target=\"_blank\">Banqer.</a> I would\n                            describe myself as a curious, confident, and hardworking type, with \n                            a serious passion for technology.\n                \n                        </p>\n            </div>\n        </div>\n    </div>\n    </section>\n\n<div id=\"bottomsection\">\n    <section id=\"secondintro\">\n        \n        <h2 class=\"title2\">WORK EXPERIENCE</h2>\n        <hr class=\"breakLine2\">\n    </section>\n      \n      <section class=\"timeline\">\n        \n        <div class=\"container\">\n      \n          <div class=\"timeline-img\"></div>\n\n          <div class=\"timeline-item\">           \n      \n            <div class=\"timeline-content timeline-card\">\n              <div class=\"timeline-img-header\">\n                <h2>Software Developer</h2>\n              </div>\n              <div class=\"date\">MARCH 2022 - PRESENT</div>\n              <p>Designing and developing production-level object-oriented applications using the software development lifecycle, including design, coding, testing, and documentation.</p>\n              <p><i>Ruby, Rails, Angular, Javascript, HTML5, CSS, Git, AWS</i></p>\n              <a class=\"bnt-more\" href=\"https://banqer.co/nz/\" target=\"_blank\">More</a>\n            </div>\n      \n          </div>   \n          <div></div>\n\n          <div class=\"timeline-img\"></div>\n\n          <div class=\"timeline-item\">           \n      \n            <div class=\"timeline-content timeline-card\">\n              <div class=\"timeline-img-header\">\n                <h2>Professional Application Developer</h2>\n              </div>\n              <div class=\"date\">FEB 2019 - MARCH 2022</div>\n              <p>I started at DXC in the graduate program, and was selected for the graduate leadership \n                program the following year. I continued progressing to an intermediate full stack developer, \n                which involved working more independently and with greater responsibility.\n              </p>\n              <p>\n                Designing and developing production-level object-oriented applications using the software \n                development lifecycle, including design, coding, testing, and documentation.\n              </p>\n              <p><i>C#, .NET, SQL, HTML5, CSS, WCF, Web Services, Angular, IIS</i></p>\n              <a class=\"bnt-more\" href=\"https://www.dxc.technology/about_us\" target=\"_blank\">More</a>\n            </div>\n      \n          </div>   \n          <div></div>\n      \n          <div class=\"timeline-img\"></div>\n          <div class=\"timeline-item\">\n      \n            \n      \n            <div class=\"timeline-content timeline-card\">\n              <div class=\"timeline-img-header\">\n                <h2>Global Mobility Services Engineer</h2>\n              </div>\n              <div class=\"date\">APRIL 2018 - JAN 2019</div>\n              <p>Provided level 2 mobile support to 40,0000 users accross ANZ globally. This included device acquisition with vendors, device management/compliance, and tech-support through the phone for ServiceNow ticket resolution.</p>\n              <p><i>VMware AirWatch, ServiceNow, Customer Service</i></p>\n              <a class=\"bnt-more\" href=\"https://www.anz.co.nz/about-us/our-company/anz-new-zealand/\" target=\"_blank\">More</a>\n            </div>\n      \n          </div>   \n\n          <div></div>\n\n          <div class=\"timeline-img\"></div>\n\n          <div class=\"timeline-item\">           \n      \n            <div class=\"timeline-content timeline-card\">\n              <div class=\"timeline-img-header\">\n                <h2>Junior .NET Software Developer</h2>\n              </div>\n              <div class=\"date\">NOV 2017 - APRIL 2018</div>\n              <p>Designed and developed a full stack web application which was hosted in the cloud using Azure App Services.</p>\n              <p><i>C#, .NET, SQL, HTML5, Azure SQL Database</i></p>\n              <a class=\"bnt-more\" href=\"https://gocloud.systems/\" target=\"_blank\">More</a>\n            </div>\n      \n          </div>   \n\n          <div></div>\n          <div class=\"timeline-img\"></div>\n\n          <div class=\"timeline-item\">\n           \n            <div class=\"timeline-content timeline-card\">\n              <div class=\"timeline-img-header\">\n                <h2>BSc - Computer Science</h2>\n              </div>\n              <div class=\"date\">FEB 2015 - NOV 2017</div>\n              <p>During my three years of study at Otago University, some of the papers I took included Web Development, Networking, AI, Database Theory, and Object Oriented Programming.</p>\n              <a class=\"bnt-more\" href=\"https://www.otago.ac.nz/\" target=\"_blank\">More</a>\n            </div>      \n          </div>       \n        </div>\n      </section>\n</div>\n</div>\n<footer>     \n  <h2>CONNECT WITH ME</h2>     \n  <div id=\"socials\">\n      <a href=\"https://github.com/telljo\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\n      <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a> \n      <a href=\"mailto:jtell1997@gmail.com\" target=\"_blank\" class=\"fa1 fa fa-paper-plane\"></a> \n  </div>\n</footer>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"content\">\n\n    <div class=\"main\">\n        <div class=\"topsection\">\n        <section>\n                <h2 style=\"cursor: default;\" class=\"name\">josh</h2>\n                <h2 style=\"cursor: default;\" class=\"name1\">TELL</h2>\n        </section>\n\n\n        <img class=\"spin circle\" src=\"../../../assets/Images/profile7.jpg\" height=\"200\" width=\"200\">\n\n        </div>\n\n\n            <h2 style=\"cursor: default;\" class=\"name2\">APPLICATION DEVELOPER</h2>\n            \n            <div class=\"button_cont\" align=\"center\"><a class=\"example_c\" routerLink=\"/experience\" routerLinkActive=\"active-link\"><span>VIEW MY WORK</span></a></div>\n    </div>\n\n\n    <footer>     \n        <h2>CONNECT WITH ME</h2>     \n        <div id=\"socials\">\n            <a href=\"https://github.com/telljo\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\n            <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a> \n            <a href=\"mailto:jtell1997@gmail.com\" target=\"_blank\" class=\"fa1 fa fa-paper-plane\"></a> \n        </div>\n      </footer>\n</div>\n"

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

module.exports = "<div id=\"content\">\n\n    <div class=\"abovesection\">\n\n    <div class=\"toptitle\" [ngStyle]=\"{transform:transform2}\">\n        <h2 class=\"title\">TECHNICAL SKILLS</h2>\n \n    </div>\n    \n    <div class=\"technicalsection\" [ngStyle]=\"{transform:transform1}\">\n        \n        <div class=\"topsection\">\n            <p>I spend most of my time with these...</p>\n        </div>\n        \n        <div class=\"bottomsection\">\n\n            <div class=\"bar flex\">\n                <div class=\"bar fill\" [ngStyle]=\"{width:width90, 'transition-delay':t1}\">\n                    <div class=\"tag bold flex\">.NET / C#</div>                   \n            </div>\n            <span>90%</span>\n            </div>           \n            <div class=\"bar flex\">\n                <div class=\"bar fill\" [ngStyle]=\"{width:width80, 'transition-delay':t3}\">\n                    <div class=\"tag bold flex\">HTML5</div>                   \n            </div>\n            <span>80%</span>\n            </div>\n            <div class=\"bar flex\">\n                <div class=\"bar fill\" [ngStyle]=\"{width:width80, 'transition-delay':t4}\">\n                    <div class=\"tag bold flex\">CSS</div>                   \n            </div>\n            <span>80%</span>\n            </div>\n            <div class=\"bar flex\">\n                <div class=\"bar fill\" [ngStyle]=\"{width:width75, 'transition-delay':t5}\">\n                    <div class=\"tag bold flex\">Angular</div>                   \n            </div>\n            <span>75%</span>\n            </div>\n            <div class=\"bar flex\">\n                <div class=\"bar fill\" [ngStyle]=\"{width:width80, 'transition-delay':t6}\">\n                    <div class=\"tag bold flex\">SQL</div>                   \n            </div>\n            <span>80%</span>\n            </div>\n          \n            \n            <div class=\"bar flex\">\n                <div class=\"bar fill\" [ngStyle]=\"{width:width65, 'transition-delay':t7}\">\n                    <div class=\"tag bold flex\">Azure</div>                   \n            </div>\n            <span>65%</span>\n            </div>\n            \n            <div class=\"bar flex\">\n                <div class=\"bar fill\" [ngStyle]=\"{width:width60, 'transition-delay':t8}\">\n                    <div class=\"tag bold flex\">Javascript</div>                   \n            </div>\n            <span>60%</span>\n            </div>\n\n        </div>\n\n    </div>\n\n    </div>\n\n    <div class=\"belowsection\">\n\n    \n\n    <div class=\"bottomtitle\" [ngStyle]=\"{transform:transform2}\">\n        <h2 class=\"title2\">PROJECTS</h2>\n    </div>    \n    <div class=\"portfolio\">\n        <div class=\"card\">\n            <div class=\"hiddenblock\">\n                <p>I designed and developed my personal portfolio website using Angular5 and HTML/Stylus. After gaining some experience with Angular during a side project at work, I set out to put my new found knowledge to use and this website is the result. This project was a great learning process for me and futhered my interest in front-end web development.</p>\n            </div>\n\n        </div>\n        <div class=\"card\"> \n            <div class=\"hiddenblock\">\n                \n                <p>The University Of Otago squash club used Weebly to build and maintain their website. As my first experience using a CMS, I contributed to the club by updating and maintaining the website during my time studying as an undergraduate.</p>\n            </div>\n        </div>\n        <p class=\"infoText\">Hover to read about each project.</p>\n    </div>\n</div>\n    <div class=\"bottompage\">\n\n        <div class=\"bottomtitle2\">\n            <h2 class=\"title2\">CERTIFICATIONS</h2>\n        </div>\n    \n        <div class=\"certificates\">\n            <div class=\"certificate\">\n                <a class=\"certLink\" href=\"https://www.youracclaim.com/badges/911cde9a-633e-4c09-a4c3-92444f9d46e8/public_url\" target=\"_blank\"></a>\n                <p class=\"certText\">I gained this certification in June 2020.</p>\n            </div>\n        </div>\n            \n    </div>\n\n    <footer>     \n        <h2>CONNECT WITH ME</h2>     \n        <div id=\"socials\">\n            <a href=\"https://github.com/telljo\" target=\"_blank\" class=\"fa1 fa fa-github\"></a>\n            <a href=\"https://www.linkedin.com/in/josh-tell/\" target=\"_blank\" class=\"fa1 fa fa-linkedin\"></a> \n            <a href=\"mailto:jtell1997@gmail.com\" target=\"_blank\" class=\"fa1 fa fa-paper-plane\"></a> \n        </div>\n      </footer>\n</div>\n"

/***/ }),

/***/ "./src/animations/slide-in-out.ts":
/*!****************************************!*\
  !*** ./src/animations/slide-in-out.ts ***!
  \****************************************/
/*! exports provided: SlideInOutAnimation, NavAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInOutAnimation", function() { return SlideInOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavAnimation", function() { return NavAnimation; });
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
var NavAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'max-height': '100%', 'opacity': '0.9', 'visibility': 'visible'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'opacity': '0'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'max-height': '0px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'visibility': 'hidden'
                }))
            ])]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'visibility': 'visible'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'max-height': '100%'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'opacity': '0.9'
                }))
            ])])
    ]),
];


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
    { path: '404', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', redirectTo: '404' },
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

module.exports = "#wrapper {\n  height: 100%;\n}\nheader {\n  width: 100%;\n  position: fixed;\n  z-index: 50;\n  background-color: #2c3e50;\n  height: 60px;\n}\nnav {\n  width: 500px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 60px;\n}\n.navLink {\n  text-decoration: none;\n  height: 100%;\n  width: 120px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font: 13px/1.4 Helvetica, arial, freesans, clean, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 700;\n}\n.active-link {\n  background-color: #1a242f;\n}\n.navLink:hover {\n  color: #007bb5;\n}\np a,\np a:visited {\n  line-height: inherit;\n}\n@media (max-width: 769px) {\n  nav {\n    display: none;\n  }\n  .navigation_background {\n    width: 100%;\n    height: 100%;\n    background: #2f4f4f;\n    opacity: 0.8;\n    position: fixed;\n    z-index: 60;\n  }\n  .Navigation_mobile-nav {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 910;\n  }\n  #test {\n    background: none;\n    color: #fff;\n    position: fixed;\n    z-index: 913;\n    width: 60px;\n    height: 60px;\n    border: 0px;\n  }\n  .navLink_mobile {\n    text-decoration: none;\n    width: 120px;\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 10px;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    color: #fff;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font: 20px/1.4 Helvetica, arial, freesans, clean, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: 700;\n  }\n  .active-link {\n    background: none;\n    text-decoration: underline;\n  }\n}\n@media (min-width: 770px) {\n  #test {\n    display: none;\n  }\n  .Navigation_mobile-nav {\n    display: none;\n  }\n}\n/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQU87QUNDWDtBRENBO0VBQ0ksV0FBTTtFQUNOLGVBQVM7RUFDVCxXQUFRO0VBQ1IseUJBQWlCO0VBQ2pCLFlBQU87QUNDWDtBREFBO0VBQ0ksWUFBTztFQUNQLFlBQU87RUFDUCxvQkFBUTtFQUFSLGFBQVE7RUFDUiw4QkFBZ0I7VUFBaEIsNkJBQWdCO0VBQ2hCLHlCQUFZO1VBQVosbUJBQVk7RUFDWixZQUFPO0FDRVg7QUREQTtFQUNHLHFCQUFnQjtFQUNoQixZQUFPO0VBQ1AsWUFBTTtFQUNOLG9CQUFRO0VBQVIsYUFBUTtFQUNSLHdCQUFnQjtVQUFoQix1QkFBZ0I7RUFDaEIseUJBQVk7VUFBWixtQkFBWTtFQUNaLFdBQU07RUFDTix5QkFBZTtFQUNmLG1CQUFlO0VBQ2YsaUdBQXdCO0VBQ3hCLGdCQUFZO0FDR2Y7QUREQTtFQUNJLHlCQUFtQjtBQ0d2QjtBRERBO0VBQ0ksY0FBTTtBQ0dWO0FEREE7O0VBQ0ksb0JBQVk7QUNJaEI7QURGd0I7RUFFcEI7SUFDSSxhQUFRO0VDR2Q7RURERTtJQUNJLFdBQU87SUFDUCxZQUFRO0lBQ1IsbUJBQVc7SUFDWCxZQUFRO0lBQ1IsZUFBUztJQUNULFdBQVM7RUNHZjtFRERFO0lBQ0ksb0JBQVM7SUFBVCxhQUFTO0lBQ1QsNEJBQWdCO0lBQWhCLDZCQUFnQjtZQUFoQixzQkFBZ0I7SUFDaEIseUJBQWE7WUFBYixtQkFBYTtJQUNiLHdCQUFpQjtZQUFqQix1QkFBaUI7SUFDakIsV0FBTztJQUNQLFlBQVE7SUFDUixlQUFVO0lBQ1YsWUFBUztFQ0dmO0VEREU7SUFDSSxnQkFBVztJQUNYLFdBQU07SUFDTixlQUFTO0lBQ1QsWUFBUTtJQUNSLFdBQU07SUFDTixZQUFPO0lBQ1AsV0FBTztFQ0diO0VEREU7SUFDSSxxQkFBZ0I7SUFDaEIsWUFBTTtJQUNOLG9CQUFRO0lBQVIsYUFBUTtJQUNSLG1CQUFjO0lBQ2Qsd0JBQWdCO1lBQWhCLHVCQUFnQjtJQUNoQix5QkFBWTtZQUFaLG1CQUFZO0lBQ1osV0FBTTtJQUNOLHlCQUFlO0lBQ2YsbUJBQWU7SUFDZixpR0FBd0I7SUFDeEIsZ0JBQVk7RUNHbEI7RURERTtJQUNJLGdCQUFXO0lBQ1gsMEJBQWlCO0VDR3ZCO0FBQ0Y7QURGd0I7RUFFcEI7SUFDSSxhQUFRO0VDR2Q7RURERTtJQUNJLGFBQVE7RUNHZDtBQUNGO0FBQ0Esb0RBQW9EIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIgXG4gICAgaGVpZ2h0IDEwMCVcblxuaGVhZGVyIFxuICAgIHdpZHRoIDEwMCVcbiAgICBwb3NpdGlvbiBmaXhlZFxuICAgIHotaW5kZXggNTBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yICMyYzNlNTBcbiAgICBoZWlnaHQgNjBweFxubmF2XG4gICAgd2lkdGg6IDUwMHB4XG4gICAgbWFyZ2luIGF1dG9cbiAgICBkaXNwbGF5IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQgc3BhY2UtZXZlbmx5XG4gICAgYWxpZ24taXRlbXMgY2VudGVyXG4gICAgaGVpZ2h0IDYwcHhcbi5uYXZMaW5rXG4gICB0ZXh0LWRlY29yYXRpb24gbm9uZVxuICAgaGVpZ2h0IDEwMCVcbiAgIHdpZHRoIDEyMHB4XG4gICBkaXNwbGF5IGZsZXhcbiAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgIGFsaWduLWl0ZW1zIGNlbnRlclxuICAgY29sb3IgI2ZmZmZmZlxuICAgdGV4dC10cmFuc2Zvcm0gdXBwZXJjYXNlO1xuICAgbGV0dGVyLXNwYWNpbmcgMXB4O1xuICAgZm9udDogMTNweC8xLjQgSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICBmb250LXdlaWdodCA3MDBcblxuLmFjdGl2ZS1saW5rXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMxYTI0MmZcblxuLm5hdkxpbms6aG92ZXJcbiAgICBjb2xvciAjMDA3YmI1XG5cbnAgYSwgcCBhOnZpc2l0ZWQgIFxuICAgIGxpbmUtaGVpZ2h0IGluaGVyaXRcblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KVxuICAgIFxuICAgIG5hdlxuICAgICAgICBkaXNwbGF5IG5vbmVcblxuICAgIC5uYXZpZ2F0aW9uX2JhY2tncm91bmRcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgIGJhY2tncm91bmQgIzJGNEY0RlxuICAgICAgICBvcGFjaXR5IDAuOFxuICAgICAgICBwb3NpdGlvbiBmaXhlZFxuICAgICAgICB6LWluZGV4OiA2MDsgICBcblxuICAgIC5OYXZpZ2F0aW9uX21vYmlsZS1uYXZcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogOTEwO1xuICAgICAgICBcbiAgICAjdGVzdFxuICAgICAgICBiYWNrZ3JvdW5kIG5vbmVcbiAgICAgICAgY29sb3Igd2hpdGVcbiAgICAgICAgcG9zaXRpb24gZml4ZWRcbiAgICAgICAgei1pbmRleCA5MTM7XG4gICAgICAgIHdpZHRoIDYwcHhcbiAgICAgICAgaGVpZ2h0IDYwcHhcbiAgICAgICAgYm9yZGVyIDBweFxuXG4gICAgLm5hdkxpbmtfbW9iaWxlXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiBub25lXG4gICAgICAgIHdpZHRoIDEyMHB4XG4gICAgICAgIGRpc3BsYXkgZmxleFxuICAgICAgICBtYXJnaW4tYm90dG9tIDEwcHhcbiAgICAgICAganVzdGlmeS1jb250ZW50IGNlbnRlclxuICAgICAgICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgICAgICAgY29sb3Igd2hpdGVcbiAgICAgICAgdGV4dC10cmFuc2Zvcm0gdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZyAxcHg7XG4gICAgICAgIGZvbnQ6IDIwcHgvMS40IEhlbHZldGljYSwgYXJpYWwsIGZyZWVzYW5zLCBjbGVhbiwgc2Fucy1zZXJpZiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgICAgICBmb250LXdlaWdodCA3MDBcblxuICAgIC5hY3RpdmUtbGlua1xuICAgICAgICBiYWNrZ3JvdW5kIG5vbmVcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcbiAgICAgICAgXG5AbWVkaWEgKG1pbi13aWR0aDogNzcwcHgpXG5cbiAgICAjdGVzdFxuICAgICAgICBkaXNwbGF5IG5vbmVcbiAgICBcbiAgICAuTmF2aWdhdGlvbl9tb2JpbGUtbmF2XG4gICAgICAgIGRpc3BsYXkgbm9uZSIsIiN3cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gIGhlaWdodDogNjBweDtcbn1cbm5hdiB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm5hdkxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQ6IDEzcHgvMS40IEhlbHZldGljYSwgYXJpYWwsIGZyZWVzYW5zLCBjbGVhbiwgc2Fucy1zZXJpZiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmFjdGl2ZS1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjQyZjtcbn1cbi5uYXZMaW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMDdiYjU7XG59XG5wIGEsXG5wIGE6dmlzaXRlZCB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gIG5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubmF2aWdhdGlvbl9iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzJmNGY0ZjtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDYwO1xuICB9XG4gIC5OYXZpZ2F0aW9uX21vYmlsZS1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTEwO1xuICB9XG4gICN0ZXN0IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5MTM7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlcjogMHB4O1xuICB9XG4gIC5uYXZMaW5rX21vYmlsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udDogMjBweC8xLjQgSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuYWN0aXZlLWxpbmsge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NzBweCkge1xuICAjdGVzdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuTmF2aWdhdGlvbl9tb2JpbGUtbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

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
/* harmony import */ var _animations_slide_in_out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/slide-in-out */ "./src/animations/slide-in-out.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'AngularCV';
        this.animationState = 'out';
        this.navShow = false;
        this.pages = ['', 'experience', 'skills', 'contact'];
    }
    // Detects a swipe and navigates to the next page based on swipe direction   
    AppComponent.prototype.swipe = function (e, when) {
        var coord = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
        var time = new Date().getTime();
        if (when === 'start') {
            this.swipeCoord = coord;
            this.swipeTime = time;
        }
        else if (when === 'end') {
            var direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
            var duration = time - this.swipeTime;
            if (duration < 1000 //
                && Math.abs(direction[0]) > 30 // Long enough
                && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
                var swipe = direction[0] < 0 ? 'next' : 'previous';
                var currentPage = this.getCurrentPage();
                if (swipe === 'next') {
                    if (currentPage != 3) {
                        this.navigatePage(currentPage, 'next');
                    }
                }
                else {
                    if (currentPage != 0) {
                        this.navigatePage(currentPage, 'previous');
                    }
                }
            }
        }
    };
    // Navigates to a page based on swipe direction and page number
    AppComponent.prototype.navigatePage = function (page, direction) {
        if (direction === 'next') {
            this.router.navigate(["../" + this.pages[page + 1]]);
        }
        else if (direction === 'previous') {
            this.router.navigate(["../" + this.pages[page - 1]]);
        }
    };
    // Gets the current page
    AppComponent.prototype.getCurrentPage = function () {
        if (this.router.url === '/') {
            return 0;
        }
        else if (this.router.url === '/experience') {
            return 1;
        }
        else if (this.router.url === '/skills') {
            return 2;
        }
        else {
            return 3;
        }
    };
    // Toggles the mobile navigation drop down
    AppComponent.prototype.toggleShow = function () {
        this.animationState = this.animationState === 'out' ? 'in' : 'out';
        this.navShow = !this.navShow;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            animations: [_animations_slide_in_out__WEBPACK_IMPORTED_MODULE_2__["NavAnimation"]],
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

module.exports = ".gallery-wrapper {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n#animateRoute {\n  height: 100%;\n  background-color: #008f95;\n}\n/*# sourceMappingURL=src/app/gallery/gallery.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBTTtFQUNOLFlBQU87RUFDUCxvQkFBUTtFQUFSLGFBQVE7RUFDUiw0QkFBZTtFQUFmLDZCQUFlO1VBQWYsc0JBQWU7QUNBbkI7QURFQTtFQUNJLFlBQU87RUFDUCx5QkFBa0I7QUNBdEI7QUFDQSxnRUFBZ0UiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ZlZWwgZnJlZSB0byBtZXNzIGFyb3VuZCB3aXRoIHRoaXMgb25lXG4uZ2FsbGVyeS13cmFwcGVyXG4gICAgd2lkdGggMTAwJVxuICAgIGhlaWdodCAxMDAlXG4gICAgZGlzcGxheSBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG5cbiNhbmltYXRlUm91dGVcbiAgICBoZWlnaHQgMTAwJVxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhmOTU7IiwiLmdhbGxlcnktd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jYW5pbWF0ZVJvdXRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Zjk1O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

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

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  background-color: #00458b;\n  text-align: center;\n  min-height: 100%;\n}\n.main {\n  height: 100vh -50px;\n  margin: auto;\n  margin-top: 0px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\nimg {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  margin-top: 20px;\n}\nsection {\n  margin-top: 10px;\n}\n.toptitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 180px;\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n.title {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 80px;\n  margin: 0px;\n  color: #fff;\n}\n.technicalsection {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  margin-top: 150px;\n  margin-bottom: 50px;\n  text-align: center;\n  box-shadow: 0 20px 20px -15px rgba(0,0,0,0.3);\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n  background-color: #f7f7f7;\n  width: 600px;\n  border-radius: 4px;\n}\n.topsection {\n  background-color: #e0e0e0;\n  width: 100%;\n  margin: 0;\n  height: 69px;\n}\np {\n  margin-bottom: 0px;\n  color: #00343f;\n  margin-top: 25px;\n}\n.contactlinks {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  padding-bottom: 80px;\n  width: 90%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: auto;\n}\n.contactlink {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: start;\n          justify-content: start;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 15px;\n  margin-top: 50px;\n  height: 100px;\n}\n.contactlink h3 {\n  text-align: left;\n  font: 15px/1.4 Helvetica, arial, freesans, clean, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  letter-spacing: 1px;\n  font-weight: 700;\n  color: #6b9ac4;\n  font-size: 2rem;\n  text-transform: uppercase;\n  padding: 0;\n  margin: 0;\n  margin-top: 5px;\n}\n.contactlink p {\n  text-align: left;\n  color: #00343f;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n.certLink {\n  display: block;\n  position: absolute;\n  width: 230px;\n  height: 100px;\n}\n.fa-contact {\n  padding: 10px;\n  margin-right: 10px;\n  font-size: 35px;\n  width: 50px;\n  height: 50px;\n  background: url('graphic.png');\n  background-size: 200px 200px;\n  background-position: top right;\n  border-radius: 50%;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n}\n.fa-contact.fa::before {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  vertical-align: middle;\n  line-height: normal;\n}\n.fa-contact:hover {\n  background-position: right center; /* change the direction of the change here */\n  color: #fff;\n  text-decoration: none;\n}\n@media (max-width: 769px) {\n  .technicalsection {\n    width: 85%;\n  }\n  .contactlinks {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 85%;\n    padding-bottom: 20px;\n    margin: auto;\n  }\n  .contactlink {\n    width: 100%;\n    margin: auto;\n  }\n  .title {\n    font-size: 70px;\n  }\n}\n/*# sourceMappingURL=src/app/pages/contact/contact.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVE7RUFBUixhQUFRO0VBQ1IsNEJBQWU7RUFBZiw2QkFBZTtVQUFmLHNCQUFlO0VBQ2YsWUFBTztFQUNQLHlCQUFpQjtFQUNqQixrQkFBVztFQUNYLGdCQUFXO0FDQ2Y7QURDQTtFQUNJLG1CQUFPO0VBQ1AsWUFBTztFQUNQLGVBQVc7RUFDWCw0QkFBZTtFQUFmLDZCQUFlO1VBQWYsc0JBQWU7RUFDZixXQUFNO0FDQ1Y7QURDQTtFQUNJLGtCQUFjO0VBQ2QsWUFBTTtFQUNOLGFBQU87RUFDUCxnQkFBVztBQ0NmO0FEQ0E7RUFDSSxnQkFBVztBQ0NmO0FERUE7RUFDSSxvQkFBUTtFQUFSLGFBQVE7RUFDUix3QkFBZ0I7VUFBaEIsdUJBQWdCO0VBQ2hCLDRCQUFlO0VBQWYsNkJBQWU7VUFBZixzQkFBZTtFQUNmLGlCQUFXO0VBQ1gsNkNBQVc7RUFBWCxxQ0FBVztFQUFYLDZCQUFXO0VBQVgsd0RBQVc7RUFDWCw4QkFBaUI7VUFBakIsc0JBQWlCO0FDQXJCO0FERUE7RUFDSSwyQ0FBc0I7RUFDdEIsa0JBQVk7RUFDWixnQkFBYTtFQUNiLGVBQVU7RUFDVixXQUFRO0VBQ1IsV0FBTTtBQ0FWO0FERUE7RUFDSSxvQkFBUTtFQUFSLGFBQVE7RUFDUiw0QkFBZTtFQUFmLDZCQUFlO1VBQWYsc0JBQWU7RUFDZixZQUFPO0VBQ1AsaUJBQVc7RUFDWCxtQkFBYztFQUNkLGtCQUFXO0VBQ1gsNkNBQVc7RUFDWCw2Q0FBVztFQUFYLHFDQUFXO0VBQVgsNkJBQVc7RUFBWCx3REFBVztFQUNYLDhCQUFpQjtVQUFqQixzQkFBaUI7RUFDakIseUJBQWlCO0VBQ2pCLFlBQU07RUFDTixrQkFBYztBQ0FsQjtBREVBO0VBQ0kseUJBQWlCO0VBQ2pCLFdBQU07RUFDTixTQUFPO0VBQ1AsWUFBTztBQ0FYO0FERUE7RUFDSSxrQkFBYztFQUNkLGNBQU07RUFDTixnQkFBVztBQ0FmO0FERUE7RUFDSSxvQkFBUTtFQUFSLGFBQVE7RUFDUiw4QkFBZTtFQUFmLDZCQUFlO1VBQWYsbUJBQWU7RUFDZixlQUFVO0VBQ1Ysb0JBQWU7RUFDZixVQUFNO0VBQ04sd0JBQWdCO1VBQWhCLHVCQUFnQjtFQUNoQixZQUFPO0FDQVg7QURFQTtFQUNJLG9CQUFRO0VBQVIsYUFBUTtFQUNSLDhCQUFlO0VBQWYsNkJBQWU7VUFBZixtQkFBZTtFQUNmLHVCQUFpQjtVQUFqQixzQkFBaUI7RUFDakIseUJBQVk7VUFBWixtQkFBWTtFQUNaLGFBQVE7RUFDUixnQkFBVztFQUNYLGFBQU87QUNBWDtBRENJO0VBQ0ksZ0JBQVc7RUFDWCxpR0FBd0I7RUFDeEIsbUJBQWdCO0VBQ2hCLGdCQUFhO0VBQ2IsY0FBTTtFQUNOLGVBQVU7RUFDVix5QkFBZTtFQUNmLFVBQVE7RUFDUixTQUFPO0VBQ1AsZUFBVztBQ0NuQjtBREFJO0VBQ0ksZ0JBQVc7RUFDWCxjQUFNO0VBQ04sZUFBVTtFQUNWLFNBQU87RUFDUCxVQUFRO0FDRWhCO0FEQUE7RUFDSSxjQUFRO0VBQ1Isa0JBQVM7RUFDVCxZQUFNO0VBQ04sYUFBTztBQ0VYO0FEQUE7RUFDSSxhQUFTO0VBQ1Qsa0JBQWE7RUFDYixlQUFXO0VBQ1gsV0FBTztFQUNQLFlBQU87RUFDUCw4QkFBK0M7RUFDL0MsNEJBQWlCO0VBQ2pCLDhCQUFxQjtFQUNyQixrQkFBZTtFQUNmLGtCQUFZO0VBQ1oscUJBQWlCO0VBQ2pCLFdBQU07QUNFVjtBREFBO0VBQ0kscUJBQVE7RUFDUixXQUFNO0VBQ04sWUFBTztFQUNQLHNCQUFnQjtFQUNoQixtQkFBYTtBQ0VqQjtBRENBO0VBQ0ksaUNBQXFCLEVBQXJCLDRDQUFBO0VBQW1DLFdBQUE7RUFDbkMscUJBQUE7QUNFSjtBQUNBO0VEQ3dCO0lBRXBCLFVBQUE7RUNBRjtFQUNBO0lEQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0ksVUFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtFQ0NOO0VBQ0E7SURBRSxXQUFBO0lBQ0ksWUFBQTtFQ0VOO0VBQ0E7SURERSxlQUFBO0VDR0Y7QUFDRjtBQUNBLHNFQUFzRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50XG4gICAgZGlzcGxheSBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG4gICAgbWFyZ2luIGF1dG9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yICMwMDQ1OEJcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgIG1pbi1oZWlnaHQgMTAwJVxuXG4ubWFpblxuICAgIGhlaWdodCAxMDB2aC01MHB4XG4gICAgbWFyZ2luIGF1dG9cbiAgICBtYXJnaW4tdG9wIDBweFxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxuICAgIHdpZHRoIDEwMCVcblxuaW1nIFxuICAgIGJvcmRlci1yYWRpdXMgNTAlXG4gICAgd2lkdGggMjAwcHhcbiAgICBoZWlnaHQgMjAwcHhcbiAgICBtYXJnaW4tdG9wIDIwcHhcblxuc2VjdGlvbiBcbiAgICBtYXJnaW4tdG9wIDEwcHg7XG5cblxuLnRvcHRpdGxlXG4gICAgZGlzcGxheSBmbGV4XG4gICAganVzdGlmeS1jb250ZW50IGNlbnRlclxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxuICAgIG1hcmdpbi10b3AgMTgwcHhcbiAgICB0cmFuc2l0aW9uIHRyYW5zZm9ybSAxcyBlYXNlXG4gICAgdHJhbnNpdGlvbi1kZWxheSAwLjJzXG5cbi50aXRsZVxuICAgIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7ICBcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemUgODBweFxuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yIHdoaXRlXG5cbi50ZWNobmljYWxzZWN0aW9uXG4gICAgZGlzcGxheSBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG4gICAgbWFyZ2luIGF1dG9cbiAgICBtYXJnaW4tdG9wIDE1MHB4XG4gICAgbWFyZ2luLWJvdHRvbSA1MHB4XG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcbiAgICBib3gtc2hhZG93IDAgMjBweCAyMHB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgLjMpXG4gICAgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gMXMgZWFzZVxuICAgIHRyYW5zaXRpb24tZGVsYXkgMC4yc1xuICAgIGJhY2tncm91bmQtY29sb3IgI2Y3ZjdmN1xuICAgIHdpZHRoIDYwMHB4XG4gICAgYm9yZGVyLXJhZGl1cyA0cHhcblxuLnRvcHNlY3Rpb25cbiAgICBiYWNrZ3JvdW5kLWNvbG9yICNlMGUwZTAgXG4gICAgd2lkdGggMTAwJVxuICAgIG1hcmdpbiAwXG4gICAgaGVpZ2h0IDY5cHhcblxucFxuICAgIG1hcmdpbi1ib3R0b20gMHB4XG4gICAgY29sb3IgIzAwMzQzZlxuICAgIG1hcmdpbi10b3AgMjVweFxuXG4uY29udGFjdGxpbmtzXG4gICAgZGlzcGxheSBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb24gcm93XG4gICAgZmxleC13cmFwIHdyYXBcbiAgICBwYWRkaW5nLWJvdHRvbSA4MHB4XG4gICAgd2lkdGggOTAlXG4gICAganVzdGlmeS1jb250ZW50IGNlbnRlclxuICAgIG1hcmdpbiBhdXRvXG5cbi5jb250YWN0bGlua1xuICAgIGRpc3BsYXkgZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uIHJvd1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnRcbiAgICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgICBwYWRkaW5nIDE1cHhcbiAgICBtYXJnaW4tdG9wIDUwcHhcbiAgICBoZWlnaHQgMTAwcHhcbiAgICBoM1xuICAgICAgICB0ZXh0LWFsaWduIGxlZnRcbiAgICAgICAgZm9udDogMTVweC8xLjQgSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yICM2YjlhYzRcbiAgICAgICAgZm9udC1zaXplIDJyZW1cbiAgICAgICAgdGV4dC10cmFuc2Zvcm0gdXBwZXJjYXNlXG4gICAgICAgIHBhZGRpbmcgMFxuICAgICAgICBtYXJnaW4gMFxuICAgICAgICBtYXJnaW4tdG9wIDVweFxuICAgIHBcbiAgICAgICAgdGV4dC1hbGlnbiBsZWZ0XG4gICAgICAgIGNvbG9yICMwMDM0M2ZcbiAgICAgICAgZm9udC1zaXplIDE0cHhcbiAgICAgICAgbWFyZ2luIDBcbiAgICAgICAgcGFkZGluZyAwXG5cbi5jZXJ0TGlua1xuICAgIGRpc3BsYXkgYmxvY2tcbiAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgIHdpZHRoIDIzMHB4XG4gICAgaGVpZ2h0IDEwMHB4XG5cbi5mYS1jb250YWN0XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQgMTBweDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0IDUwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCdzcmNcXGFzc2V0c1xcSW1hZ2VzXFxncmFwaGljLnBuZycpOyAgXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3Igd2hpdGVcblxuLmZhLWNvbnRhY3QuZmE6OmJlZm9yZVxuICAgIGRpc3BsYXkgaW5saW5lLWJsb2NrXG4gICAgd2lkdGggMzVweFxuICAgIGhlaWdodCAzNXB4XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWxcblxuXG4uZmEtY29udGFjdDpob3ZlciBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7IC8qIGNoYW5nZSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjaGFuZ2UgaGVyZSAqL1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgXG5AbWVkaWEgKG1heC13aWR0aDogNzY5cHgpXG4gICAgXG4gICAgLnRlY2huaWNhbHNlY3Rpb25cbiAgICAgICAgd2lkdGggODUlXG4gICAgLmNvbnRhY3RsaW5rc1xuICAgICAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cbiAgICAgICAgd2lkdGggODUlXG4gICAgICAgIHBhZGRpbmctYm90dG9tIDIwcHhcbiAgICAgICAgbWFyZ2luIGF1dG9cbiAgICAuY29udGFjdGxpbmtcbiAgICAgICAgd2lkdGggMTAwJVxuICAgICAgICBtYXJnaW4gYXV0b1xuICAgIC50aXRsZVxuICAgICAgICBmb250LXNpemUgNzBweFxuICAgICAgICAiLCIjY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDU4YjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoIC01MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRvcHRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDE4MHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4udGVjaG5pY2Fsc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggLTE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4udG9wc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogNjlweDtcbn1cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGNvbG9yOiAjMDAzNDNmO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmNvbnRhY3RsaW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG4uY29udGFjdGxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmNvbnRhY3RsaW5rIGgzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udDogMTVweC8xLjQgSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNmI5YWM0O1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmNvbnRhY3RsaW5rIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzAwMzQzZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2VydExpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZmEtY29udGFjdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmNcXGFzc2V0c1xcSW1hZ2VzXFxncmFwaGljLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAyMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5mYS1jb250YWN0LmZhOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4uZmEtY29udGFjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjsgLyogY2hhbmdlIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGNoYW5nZSBoZXJlICovXG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgLnRlY2huaWNhbHNlY3Rpb24ge1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbiAgLmNvbnRhY3RsaW5rcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogODUlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuY29udGFjdGxpbmsge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgfVxufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

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
        this.transform1 = 'translateY(-100px)';
        this.transform2 = 'translateY(20px)';
    }
    ContactComponent.prototype.ngOnInit = function () {
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

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  background-color: #008f95;\n  text-align: center;\n  min-height: 100%;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n.main {\n  margin: auto;\n  margin-top: 0px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n.fa1 {\n  width: 54px;\n}\nbody {\n  font: normal 16px/1.5 \"Helvetica Neue\", sans-serif;\n  background: #48b379;\n  color: #fff;\n  overflow-x: hidden;\n  padding-bottom: 50px;\n/* INTRO SECTION\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n}\n.intro {\n  background: #2a4494;\n  height: 750px;\n  padding-top: 60px;\n  width: 100%;\n}\n#container {\n  margin-top: 160px;\n}\n#secondintro {\n  padding-bottom: 20px;\n  padding-top: 110px;\n}\n.container {\n  width: 90%;\n  margin: 0 auto;\n  text-align: center;\n}\nh1 {\n  font-weight: 100 !important;\n  text-transform: capitalize;\n  font-size: 55px;\n  color: #fff;\n  margin-bottom: 20px;\n}\n.logo {\n  float: left;\n}\nh2 {\n  color: #fff;\n  font-size: 25px;\n  margin-bottom: 5px;\n}\nfooter h2 {\n  font-size: 15px;\n}\nh3 {\n  font-family: 'museo-sans', sans-serif;\n  text-transform: uppercase;\n  font-size: 30px;\n  font-weight: 900;\n  color: #fff;\n}\np {\n  font-size: 18px;\n  color: #fff;\n  line-height: 1.5;\n  text-align: left;\n  text-justify: auto;\n}\ni {\n  color: #2a4494;\n}\n.introText {\n  text-align: justify;\n  text-justify: auto;\n}\n.inText {\n  font-size: 20px;\n  color: #fff;\n  line-height: 1.5;\n}\na:hover {\n  color: #008f95;\n}\n.title {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 80px;\n  margin: 0px;\n  margin-top: 20px;\n  color: #fff;\n}\n.title2 {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 80px;\n  margin: 0px;\n  margin-top: 20px;\n  color: #1c448e;\n}\n#top {\n  width: 70%;\n  margin: auto;\n  margin-top: 30px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.breakLine {\n  background-color: #fff;\n  max-width: 300px;\n  height: 5px;\n}\n.breakLine2 {\n  background-color: #6b9ac4;\n  max-width: 540px;\n  height: 5px;\n}\n#col1 {\n  width: 40%;\n}\n#col2 {\n  width: 40%;\n}\n#bottomsection {\n  background: #ecebe4;\n}\nsection {\n  padding: 40px 0;\n}\nhtml,\nbody {\n  overflow-x: hidden;\n}\nbody {\n  font-family: 'Roboto';\n  font-size: 17px;\n  font-weight: 400;\n  background-color: #eee;\n}\nh1 {\n  font-size: 200%;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-weight: 400;\n}\nheader {\n  background: #3f51b5;\n  color: #fff;\n  padding: 150px 0;\n}\nheader p {\n  font-family: 'Allura';\n  color: rgba(255,255,255,0.2);\n  margin-bottom: 0;\n  font-size: 60px;\n  margin-top: -30px;\n}\n.timeline {\n  position: relative;\n}\n.timeline::before {\n  content: '';\n  background: #6b9ac4;\n  width: 5px;\n  height: 95%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.timeline-item {\n  width: 100%;\n  margin-bottom: 70px;\n}\n.timeline-item:nth-child(odd) .timeline-content {\n  float: right;\n  padding: 40px 30px 10px 30px;\n}\n.timeline-item:nth-child(odd) .timeline-content .date {\n  right: auto;\n  left: 0;\n}\n.timeline-item:nth-child(odd) .timeline-content::after {\n  content: '';\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  left: -15px;\n  border-width: 10px 15px 10px 0;\n  border-color: transparent #c5cae9 transparent transparent;\n}\n.timeline-item:nth-child(even) .timeline-content {\n  float: left;\n  padding: 40px 30px 10px 30px;\n}\n.timeline-item:nth-child(even) .timeline-content .date {\n  right: auto;\n  left: 0;\n}\n.timeline-item:nth-child(even) .timeline-content::after {\n  content: '';\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  right: -15px;\n  border-width: 10px 0 10px 15px;\n  border-color: transparent transparent transparent #c5cae9;\n}\n.timeline-item::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.timeline-content {\n  position: relative;\n  width: 45%;\n  padding: 10px 30px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 20px 25px -15px rgba(0,0,0,0.3);\n}\n.timeline-content::after {\n  content: '';\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  right: -15px;\n  border-width: 10px 0 10px 15px;\n  border-color: transparent transparent transparent #c5cae9;\n}\n.timeline-img {\n  width: 30px;\n  height: 30px;\n  background: #1c448e;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  margin-top: 25px;\n  margin-left: -15px;\n}\n.bnt-more {\n  background: #1c448e;\n  color: #fff;\n  padding: 8px 20px;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-bottom: 20px;\n  margin-top: 10px;\n  display: inline-block;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px -1px rgba(0,0,0,0.6);\n}\n.bnt-more:hover,\n.bnt-more:active,\n.bnt-more:focus {\n  background: #3949a3;\n  color: #fff;\n  text-decoration: none;\n}\n.timeline-card {\n  padding: 0 !important;\n}\n.timeline-card p {\n  padding: 0 20px;\n  background-color: #fff;\n  color: #00343f;\n}\n.timeline-card a {\n  margin-left: 20px;\n}\n.timeline-item:nth-child(2) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('banqer.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('banqer.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-item:nth-child(5) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('dxc_logo2.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('dxc_logo2.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-item:nth-child(8) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('anzLogo.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('anzLogo.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-item:nth-child(11) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('gocloudpng.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('gocloudpng.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-item:nth-child(14) .timeline-img-header {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.4))), url('Otago2.png') center center no-repeat;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url('Otago2.png') center center no-repeat;\n  background-size: contain;\n}\n.timeline-img-header {\n  height: 200px;\n  position: relative;\n  margin-bottom: 20px;\n}\n.timeline-img-header h2 {\n  color: #fff;\n  position: absolute;\n  bottom: 5px;\n  left: 20px;\n}\nblockquote {\n  margin-top: 30px;\n  color: #757575;\n  border-left-color: #3f51b5;\n  padding: 0 20px;\n}\n.date {\n  background: #1d3461;\n  display: inline-block;\n  color: #fff;\n  font-size: 18px;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n/* EFFECTS\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.timeline-item {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n.timeline-item:nth-child(even) {\n  -webkit-transform: translate3d(-200px, 0, 0);\n          transform: translate3d(-200px, 0, 0);\n}\n.timeline-item:nth-child(odd) {\n  -webkit-transform: translate3d(200px, 0, 0);\n          transform: translate3d(200px, 0, 0);\n}\n.timeline-item.in-view {\n  -webkit-transform: none;\n          transform: none;\n  visibility: visible;\n  opacity: 1;\n}\n@media (max-width: 769px) {\n  #col1 {\n    width: 80%;\n    margin: auto;\n  }\n  #col2 {\n    width: 80%;\n    margin: auto;\n  }\n  #top {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 100%;\n  }\n  .intro {\n    height: 900px;\n  }\n  .title {\n    font-size: 70px;\n  }\n  .title2 {\n    font-size: 50px;\n  }\n  .breakLine {\n    max-width: 70%;\n  }\n  .breakLine2 {\n    max-width: 90%;\n  }\n  #secondintro {\n    padding-top: 30px;\n  }\n  .timeline-img-header {\n    text-align: center;\n  }\n  .timeline-img-header h2 {\n    width: 100%;\n    margin-top: 40px;\n    left: 0px;\n    font-size: 20px;\n  }\n  .timeline::before {\n    left: 50px;\n  }\n  .timeline .timeline-img {\n    left: 50px;\n  }\n  .timeline .timeline-content {\n    max-width: 100%;\n    width: auto;\n    margin-left: 70px;\n  }\n  .timeline .timeline-item:nth-child(odd) .timeline-content {\n    float: left;\n    padding: 40px 30px 10px 30px;\n  }\n  .timeline .timeline-item:nth-child(even) .timeline-content {\n    float: left;\n    padding: 40px 30px 10px 30px;\n  }\n  .timeline .timeline-item:nth-child(even) .timeline-content::after {\n    content: '';\n    position: absolute;\n    border-style: solid;\n    width: 0;\n    height: 0;\n    top: 30px;\n    left: -15px;\n    border-width: 10px 15px 10px 0;\n    border-color: transparent #c5cae9 transparent transparent;\n  }\n  .timeline .timeline-item:nth-child(even) {\n    -webkit-transform: none;\n            transform: none;\n  }\n  .timeline .timeline-item:nth-child(odd) {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n/*# sourceMappingURL=src/app/pages/experience/experience.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9zcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVE7RUFBUixhQUFRO0VBQ1IsNEJBQWU7RUFBZiw2QkFBZTtVQUFmLHNCQUFlO0VBQ2YsWUFBTztFQUNQLHlCQUFpQjtFQUNqQixrQkFBVztFQUNYLGdCQUFXO0FDQ2Y7QURBQTs7O0VBR0Usc0JBQVk7QUNFZDtBRENBO0VBQ0ksWUFBTztFQUNQLGVBQVc7RUFDWCw0QkFBZTtFQUFmLDZCQUFlO1VBQWYsc0JBQWU7RUFDZixXQUFNO0FDQ1Y7QURDQTtFQUVFLFdBQU87QUNBVDtBREdBO0VBQ0Usa0RBQXFDO0VBQ3JDLG1CQUFXO0VBQ1gsV0FBTTtFQUNOLGtCQUFXO0VBQ1gsb0JBQWU7QUFDZjtvRENEa0Q7QUFDcEQ7QURHQTtFQUNFLG1CQUFZO0VBQ1osYUFBTztFQUNQLGlCQUFZO0VBQ1osV0FBTTtBQ0RSO0FER0E7RUFDRSxpQkFBVztBQ0RiO0FER0E7RUFDRSxvQkFBZTtFQUNmLGtCQUFZO0FDRGQ7QURHQTtFQUNFLFVBQU87RUFDUCxjQUFRO0VBQ1Isa0JBQVk7QUNEZDtBRElBO0VBQ0ksMkJBQWE7RUFDYiwwQkFBZ0I7RUFDaEIsZUFBVztFQUNYLFdBQU07RUFDTixtQkFBZTtBQ0ZuQjtBREtBO0VBQ0ksV0FBTTtBQ0hWO0FES0E7RUFDRSxXQUFPO0VBQ1AsZUFBVztFQUNYLGtCQUFjO0FDSGhCO0FES0E7RUFDRSxlQUFVO0FDSFo7QURLQTtFQUNJLHFDQUF5QjtFQUN6Qix5QkFBZ0I7RUFDaEIsZUFBVztFQUNYLGdCQUFhO0VBQ2IsV0FBTTtBQ0hWO0FES0E7RUFDRSxlQUFXO0VBQ1gsV0FBTTtFQUNOLGdCQUFhO0VBQ2IsZ0JBQVk7RUFDWixrQkFB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O0lBQ0MsNEJBQWU7SUFBZiw2QkFBZTtZQUFmLHNCQUFlO0lBQ2YsV0FBTTtFQ3RETjtFRHVERDtJQUNDLGFBQU87RUNyRFA7RURzREQ7SUFDQyxlQUFVO0VDcERWO0VEcUREO0lBQ0MsZUFBVTtFQ25EVjtFRG9ERDtJQUNDLGNBQVU7RUNsRFY7RURtREQ7SUFDQyxjQUFVO0VDakRWO0VEa0REO0lBQ0MsaUJBQVk7RUNoRFo7RURrREQ7SUFDQyxrQkFBVztFQ2hEWDtFRGlEQTtJQUNDLFdBQU07SUFDTixnQkFBVztJQUNYLFNBQUs7SUFDTCxlQUFVO0VDL0NYO0VEa0RBO0lBQ0MsVUFBTTtFQ2hEUDtFRG1EQTtJQUNDLFVBQU07RUNqRFA7RURvREE7SUFDQyxlQUFXO0lBQ1gsV0FBTztJQUNQLGlCQUFhO0VDbERkO0VEd0RFO0lBQ0MsV0FBTztJQUNQLDRCQUFTO0VDdERaO0VEMERFO0lBQ0MsV0FBTztJQUNQLDRCQUFTO0VDeERaO0VEeURHO0lBQ0MsV0FBUztJQUNULGtCQUFVO0lBQ1YsbUJBQWM7SUFDZCxRQUFPO0lBQ1AsU0FBUTtJQUNSLFNBQUs7SUFDTCxXQUFNO0lBQ04sOEJBQWM7SUFDZCx5REFBYztFQ3ZEbEI7RUQ2REE7SUFDRyx1QkFBVztZQUFYLGVBQVc7RUMzRGQ7RUQ2REE7SUFDQyx1QkFBVztZQUFYLGVBQVc7RUMzRFo7QUFDRjtBQUNBLDRFQUE0RSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50XG4gICAgZGlzcGxheSBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG4gICAgbWFyZ2luIGF1dG9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yICMwMDhmOTVcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgIG1pbi1oZWlnaHQgMTAwJVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1haW5cbiAgICBtYXJnaW4gYXV0b1xuICAgIG1hcmdpbi10b3AgMHB4XG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG4gICAgd2lkdGggMTAwJVxuXG4uZmExXG5cbiAgd2lkdGg6IDU0cHhcblxuXG5ib2R5IFxuICBmb250IG5vcm1hbCAxNnB4LzEuNSBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZcbiAgYmFja2dyb3VuZCAjNDhiMzc5XG4gIGNvbG9yICNmZmZcbiAgb3ZlcmZsb3cteCBoaWRkZW5cbiAgcGFkZGluZy1ib3R0b20gNTBweFxuICAvKiBJTlRSTyBTRUNUSU9OXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cblxuLmludHJvXG4gIGJhY2tncm91bmQ6ICMyQTQ0OTRcbiAgaGVpZ2h0IDc1MHB4XG4gIHBhZGRpbmctdG9wIDYwcHhcbiAgd2lkdGggMTAwJVxuXG4jY29udGFpbmVyIFxuICBtYXJnaW4tdG9wIDE2MHB4XG5cbiNzZWNvbmRpbnRyb1xuICBwYWRkaW5nLWJvdHRvbSAyMHB4XHRcbiAgcGFkZGluZy10b3AgMTEwcHhcblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICAgIGNvbG9yIHdoaXRlXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvZ28gXG4gICAgZmxvYXQgbGVmdFxuXG5oMlxuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tIDVweFxuXG5mb290ZXIgaDJcbiAgZm9udC1zaXplIDE1cHhcblxuaDNcbiAgICBmb250LWZhbWlseTogJ211c2VvLXNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDBcbiAgICBjb2xvciB3aGl0ZVxuXG5wXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3Igd2hpdGVcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xuXHRpXG5cdFx0Y29sb3IgIzJBNDQ5NFxuXG4uaW50cm9UZXh0XG4gIHRleHQtYWxpZ24ganVzdGlmeVxuICB0ZXh0LWp1c3RpZnkgYXV0b1xuXG4uaW5UZXh0XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3Igd2hpdGVcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuYTpob3ZlciBcbiAgY29sb3IgIzAwOGY5NVxuXG4udGl0bGVcbiAgICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmOyAgXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplIDgwcHhcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wIDIwcHhcbiAgICBjb2xvciB3aGl0ZVxuXG4udGl0bGUyXG4gICAgZm9udC1mYW1pbHk6ICdkZWFkamltJywgJ2FyaWFsJywgc2Fucy1zZXJpZjsgIFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZSA4MHB4XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcCAyMHB4XG4gICAgY29sb3IgIzFDNDQ4RVxuXG4jdG9wXG4gIHdpZHRoIDcwJVxuICBtYXJnaW4gYXV0b1xuICBtYXJnaW4tdG9wIDMwcHhcbiAgdGV4dC1hbGlnbjogY2VudGVyXG4gIGRpc3BsYXkgZmxleFxuICBmbGV4LWRpcmVjdGlvbjogcm93XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5XG5cbi5icmVha0xpbmVcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdG1heC13aWR0aDogMzAwcHg7XG5cdGhlaWdodDogNXB4O1xuXG4uYnJlYWtMaW5lMlxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNkI5QUM0O1xuXHRtYXgtd2lkdGg6IDU0MHB4O1xuXHRoZWlnaHQ6IDVweDtcbiNjb2wxIFxuICAgIHdpZHRoIDQwJVxuXG4jY29sMlxuICAgIHdpZHRoIDQwJVxuXG4jYm90dG9tc2VjdGlvblxuICBiYWNrZ3JvdW5kICNFQ0VCRTRcblxuLy8gVGltZWxpbmVcblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaGVhZGVyIHtcblx0YmFja2dyb3VuZDogIzNGNTFCNTtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdHBhZGRpbmc6IDE1MHB4IDA7XG5cblx0cCB7XG5cdFx0Zm9udC1mYW1pbHk6ICdBbGx1cmEnO1xuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdGZvbnQtc2l6ZTogNjBweDtcblx0XHRtYXJnaW4tdG9wOiAtMzBweDtcblxuXHR9XG59XG5cbi50aW1lbGluZSB7XG5cblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdCY6OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0YmFja2dyb3VuZDogIzZCOUFDNDtcblx0XHR3aWR0aDogNXB4O1xuXHRcdGhlaWdodDogOTUlO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiA1MCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHR9XG59XG5cbi50aW1lbGluZS1pdGVtIHtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1ib3R0b206IDcwcHg7XG5cblx0JjpudGgtY2hpbGQob2RkKSB7XG5cblx0XHQudGltZWxpbmUtY29udGVudCB7XG5cdFx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0XHRwYWRkaW5nOiA0MHB4IDMwcHggMTBweCAzMHB4O1xuXG5cdFx0XHQuZGF0ZSB7XG5cdFx0XHRcdHJpZ2h0OiBhdXRvO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0fVxuXG5cdFx0XHQmOjphZnRlciB7XG5cdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRcdHRvcDogMzBweDtcblx0XHRcdFx0bGVmdDogLTE1cHg7XG5cdFx0XHRcdGJvcmRlci13aWR0aDogMTBweCAxNXB4IDEwcHggMDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjYzVjYWU5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuICAmOm50aC1jaGlsZChldmVuKSB7XG5cblx0XHQudGltZWxpbmUtY29udGVudCB7XG5cdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdHBhZGRpbmc6IDQwcHggMzBweCAxMHB4IDMwcHg7XG5cblx0XHRcdC5kYXRlIHtcblx0XHRcdFx0cmlnaHQ6IGF1dG87XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR9XG5cblx0XHRcdCY6OmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgXHQgIFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHQgICAgd2lkdGg6IDA7XG5cdFx0ICAgIGhlaWdodDogMDtcblx0XHQgICAgdG9wOiAzMHB4O1xuXHRcdCAgICByaWdodDogLTE1cHg7XG5cdFx0ICAgIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTVweDtcblx0XHQgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYzVjYWU5O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCY6OmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjbGVhcjogYm90aDtcblx0fVxufVxuXG5cbi50aW1lbGluZS1jb250ZW50IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogNDUlO1xuXHRwYWRkaW5nOiAxMHB4IDMwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJveC1zaGFkb3c6IDAgMjBweCAyNXB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xuXG5cdCY6OmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHR3aWR0aDogMDtcblx0XHRoZWlnaHQ6IDA7XG5cdFx0dG9wOiAzMHB4O1xuXHRcdHJpZ2h0OiAtMTVweDtcblx0XHRib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDE1cHg7XG5cdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYzVjYWU5O1xuXHR9XG59XG5cbi50aW1lbGluZS1pbWcge1xuXHR3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHRiYWNrZ3JvdW5kOiAjMUM0NDhFO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogNTAlO1xuXHRtYXJnaW4tdG9wOiAyNXB4O1xuXHRtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5ibnQtbW9yZSB7XG5cdGJhY2tncm91bmQ6ICMxQzQ0OEU7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRwYWRkaW5nOiA4cHggMjBweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0Ym94LXNoYWRvdzogMCAxcHggM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAuNik7XG5cblx0Jjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xuXHRcdGJhY2tncm91bmQ6IGRhcmtlbigjM0Y1MUI1LCAxMCUpO1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0fVxuXG59XG5cbi50aW1lbGluZS1jYXJkIHtcblx0cGFkZGluZzogMCFpbXBvcnRhbnQ7XG5cblx0cCB7XG5cdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG5cdFx0Y29sb3IgIzAwMzQzZlxuXHR9XG5cblx0YSB7XG5cdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XG5cdH1cbn1cblxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKDIpIHtcbiAgLnRpbWVsaW5lLWltZy1oZWFkZXIge1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsIC40KSksIHVybCgnc3JjXFxhc3NldHNcXEltYWdlc1xcYmFucWVyLnBuZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdH1cbn1cblxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKDUpIHtcbiAgLnRpbWVsaW5lLWltZy1oZWFkZXIge1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsIC40KSksIHVybCgnc3JjXFxhc3NldHNcXEltYWdlc1xcZHhjX2xvZ28yLnBuZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdH1cbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZCg4KSB7XG4gIC50aW1lbGluZS1pbWctaGVhZGVyIHtcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLCAuNCkpLCB1cmwoJ3NyY1xcYXNzZXRzXFxJbWFnZXNcXGFuekxvZ28ucG5nJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0fVxufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKDExKSB7XG4gIC50aW1lbGluZS1pbWctaGVhZGVyIHtcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLCAuNCkpLCB1cmwoJ3NyY1xcYXNzZXRzXFxJbWFnZXNcXGdvY2xvdWRwbmcucG5nJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0fVxufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKDE0KSB7XG4gIC50aW1lbGluZS1pbWctaGVhZGVyIHtcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLCAuNCkpLCB1cmwoJ3NyY1xcYXNzZXRzXFxJbWFnZXNcXE90YWdvMi5wbmcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHR9XG59IFxuXG4udGltZWxpbmUtaW1nLWhlYWRlciB7XG5cblx0aGVpZ2h0OiAyMDBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG5cdGgyIHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiA1cHg7XG5cdFx0bGVmdDogMjBweDtcblx0fVxufVxuXG5ibG9ja3F1b3RlIHtcblx0bWFyZ2luLXRvcDogMzBweDtcblx0Y29sb3I6ICM3NTc1NzU7XG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjM0Y1MUI1O1xuXHRwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5kYXRlIHtcblx0YmFja2dyb3VuZDogIzFEMzQ2MTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDE4cHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRyaWdodDogMDtcbn1cblxuLyogRUZGRUNUU1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5cbi50aW1lbGluZS1pdGVtIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoZXZlbikge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDBweCwgMCwgMCk7XG59XG5cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDBweCwgMCwgMCk7XG59XG5cbi50aW1lbGluZS1pdGVtLmluLXZpZXcge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkgXG5cblx0I2NvbDFcblx0XHR3aWR0aCA4MCVcblx0XHRtYXJnaW4gYXV0b1xuXHQjY29sMlxuXHRcdHdpZHRoIDgwJVxuXHRcdG1hcmdpbiBhdXRvXG5cdCN0b3Bcblx0XHRmbGV4LWRpcmVjdGlvbiBjb2x1bW5cblx0XHR3aWR0aCAxMDAlXG5cdC5pbnRyb1xuXHRcdGhlaWdodCA5MDBweFxuXHQudGl0bGVcblx0XHRmb250LXNpemUgNzBweFxuXHQudGl0bGUyXG5cdFx0Zm9udC1zaXplIDUwcHhcblx0LmJyZWFrTGluZVxuXHRcdG1heC13aWR0aCA3MCVcblx0LmJyZWFrTGluZTJcblx0XHRtYXgtd2lkdGggOTAlXG5cdCNzZWNvbmRpbnRyb1xuXHRcdHBhZGRpbmctdG9wIDMwcHhcblx0XG5cdC50aW1lbGluZS1pbWctaGVhZGVyIFxuXHRcdHRleHQtYWxpZ24gY2VudGVyXG5cdFx0aDJcblx0XHRcdHdpZHRoIDEwMCVcblx0XHRcdG1hcmdpbi10b3AgNDBweFxuXHRcdFx0bGVmdCAwcHhcblx0XHRcdGZvbnQtc2l6ZSAyMHB4XG5cblx0LnRpbWVsaW5lIHtcblx0XHQmOjpiZWZvcmUge1xuXHRcdFx0bGVmdDogNTBweDtcblx0XHR9XG5cblx0XHQudGltZWxpbmUtaW1nIHtcblx0XHRcdGxlZnQ6IDUwcHg7XG5cdFx0fVxuXG5cdFx0LnRpbWVsaW5lLWNvbnRlbnQge1xuXHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRtYXJnaW4tbGVmdDogNzBweDtcblx0XHR9XG5cblx0XHQudGltZWxpbmUtaXRlbSB7XG5cblx0XHRcdCY6bnRoLWNoaWxkKG9kZCkge1xuXHRcdFx0XHQudGltZWxpbmUtY29udGVudCB7XG5cdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0cGFkZGluZzogNDBweCAzMHB4IDEwcHggMzBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0JjpudGgtY2hpbGQoZXZlbikge1xuXHRcdFx0XHQudGltZWxpbmUtY29udGVudCB7XG5cdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0cGFkZGluZzogNDBweCAzMHB4IDEwcHggMzBweDtcblx0XHRcdFx0XHQmOjphZnRlciB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0XHRcdFx0XHR3aWR0aDogMDtcblx0XHRcdFx0XHRcdGhlaWdodDogMDtcblx0XHRcdFx0XHRcdHRvcDogMzBweDtcblx0XHRcdFx0XHRcdGxlZnQ6IC0xNXB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAxMHB4IDE1cHggMTBweCAwO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjYzVjYWU5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9XHRcblx0XHQudGltZWxpbmUtaXRlbTpudGgtY2hpbGQoZXZlbikge1xuICBcdFx0XHR0cmFuc2Zvcm06IG5vbmU7XG5cdFx0fVxuXHRcdC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIHtcblx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHR9XG5cdH1cblx0XHRcblxuXG4iLCIjY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGY5NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYWluIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZhMSB7XG4gIHdpZHRoOiA1NHB4O1xufVxuYm9keSB7XG4gIGZvbnQ6IG5vcm1hbCAxNnB4LzEuNSBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6ICM0OGIzNzk7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuLyogSU5UUk8gU0VDVElPTlxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG59XG4uaW50cm8ge1xuICBiYWNrZ3JvdW5kOiAjMmE0NDk0O1xuICBoZWlnaHQ6IDc1MHB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTYwcHg7XG59XG4jc2Vjb25kaW50cm8ge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDExMHB4O1xufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuaDIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5mb290ZXIgaDIge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5oMyB7XG4gIGZvbnQtZmFtaWx5OiAnbXVzZW8tc2FucycsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5wIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xufVxuaSB7XG4gIGNvbG9yOiAjMmE0NDk0O1xufVxuLmludHJvVGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtanVzdGlmeTogYXV0bztcbn1cbi5pblRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMDA4Zjk1O1xufVxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdkZWFkamltJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDgwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi50aXRsZTIge1xuICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjMWM0NDhlO1xufVxuI3RvcCB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5icmVha0xpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDVweDtcbn1cbi5icmVha0xpbmUyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWFjNDtcbiAgbWF4LXdpZHRoOiA1NDBweDtcbiAgaGVpZ2h0OiA1cHg7XG59XG4jY29sMSB7XG4gIHdpZHRoOiA0MCU7XG59XG4jY29sMiB7XG4gIHdpZHRoOiA0MCU7XG59XG4jYm90dG9tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNlY2ViZTQ7XG59XG5zZWN0aW9uIHtcbiAgcGFkZGluZzogNDBweCAwO1xufVxuaHRtbCxcbmJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5oMSB7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNTBweCAwO1xufVxuaGVhZGVyIHAge1xuICBmb250LWZhbWlseTogJ0FsbHVyYSc7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGltZWxpbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiAjNmI5YWM0O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDk1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi50aW1lbGluZS1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudCB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogNDBweCAzMHB4IDEwcHggMzBweDtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIC50aW1lbGluZS1jb250ZW50IC5kYXRlIHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IC0xNXB4O1xuICBib3JkZXItd2lkdGg6IDEwcHggMTVweCAxMHB4IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2M1Y2FlOSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA0MHB4IDMwcHggMTBweCAzMHB4O1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50IC5kYXRlIHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQ6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogLTE1cHg7XG4gIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTVweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYzVjYWU5O1xufVxuLnRpbWVsaW5lLWl0ZW06OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cbi50aW1lbGluZS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDUlO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDI1cHggLTE1cHggcmdiYSgwLDAsMCwwLjMpO1xufVxuLnRpbWVsaW5lLWNvbnRlbnQ6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogLTE1cHg7XG4gIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTVweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYzVjYWU5O1xufVxuLnRpbWVsaW5lLWltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICMxYzQ0OGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi5ibnQtbW9yZSB7XG4gIGJhY2tncm91bmQ6ICMxYzQ0OGU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IC0xcHggcmdiYSgwLDAsMCwwLjYpO1xufVxuLmJudC1tb3JlOmhvdmVyLFxuLmJudC1tb3JlOmFjdGl2ZSxcbi5ibnQtbW9yZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMzOTQ5YTM7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udGltZWxpbmUtY2FyZCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZS1jYXJkIHAge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAzNDNmO1xufVxuLnRpbWVsaW5lLWNhcmQgYSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKDIpIC50aW1lbGluZS1pbWctaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC40KSksIHVybChcInNyY1xcYXNzZXRzXFxJbWFnZXNcXGJhbnFlci5wbmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZCg1KSAudGltZWxpbmUtaW1nLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuNCkpLCB1cmwoXCJzcmNcXGFzc2V0c1xcSW1hZ2VzXFxkeGNfbG9nbzIucG5nXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4udGltZWxpbmUtaXRlbTpudGgtY2hpbGQoOCkgLnRpbWVsaW5lLWltZy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwwLjQpKSwgdXJsKFwic3JjXFxhc3NldHNcXEltYWdlc1xcYW56TG9nby5wbmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZCgxMSkgLnRpbWVsaW5lLWltZy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwwLjQpKSwgdXJsKFwic3JjXFxhc3NldHNcXEltYWdlc1xcZ29jbG91ZHBuZy5wbmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZCgxNCkgLnRpbWVsaW5lLWltZy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwwLjQpKSwgdXJsKFwic3JjXFxhc3NldHNcXEltYWdlc1xcT3RhZ28yLnBuZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnRpbWVsaW5lLWltZy1oZWFkZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGltZWxpbmUtaW1nLWhlYWRlciBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiAyMHB4O1xufVxuYmxvY2txdW90ZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBib3JkZXItbGVmdC1jb2xvcjogIzNmNTFiNTtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmRhdGUge1xuICBiYWNrZ3JvdW5kOiAjMWQzNDYxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cbi8qIEVGRkVDVFNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLnRpbWVsaW5lLWl0ZW0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwcHgsIDAsIDApO1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKG9kZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMHB4LCAwLCAwKTtcbn1cbi50aW1lbGluZS1pdGVtLmluLXZpZXcge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgI2NvbDEge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gICNjb2wyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAjdG9wIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5pbnRybyB7XG4gICAgaGVpZ2h0OiA5MDBweDtcbiAgfVxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgfVxuICAudGl0bGUyIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLmJyZWFrTGluZSB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gIH1cbiAgLmJyZWFrTGluZTIge1xuICAgIG1heC13aWR0aDogOTAlO1xuICB9XG4gICNzZWNvbmRpbnRybyB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbiAgLnRpbWVsaW5lLWltZy1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAudGltZWxpbmUtaW1nLWhlYWRlciBoMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC50aW1lbGluZTo6YmVmb3JlIHtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtaW1nIHtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogNDBweCAzMHB4IDEwcHggMzBweDtcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHggMTBweCAzMHB4O1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtaXRlbTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiAzMHB4O1xuICAgIGxlZnQ6IC0xNXB4O1xuICAgIGJvcmRlci13aWR0aDogMTBweCAxNXB4IDEwcHggMDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNjNWNhZTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtaXRlbTpudGgtY2hpbGQob2RkKSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

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
        this.startDate = new Date("2017-11-01");
    }
    ExperienceComponent.prototype.CalculateDifference = function (time) {
        var today = new Date();
        var calcDate = new Date();
        if (time === "age")
            calcDate = this.birthdate;
        if (time === "experience")
            calcDate = this.startDate;
        var difference = today.getFullYear() - calcDate.getFullYear();
        var m = today.getMonth() - calcDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < calcDate.getDate())) {
            difference--;
        }
        return difference.toString();
    };
    ExperienceComponent.prototype.ngOnInit = function () {
        this.loadScript();
    };
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

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  background-color: #008f95;\n  text-align: center;\n  width: 100%;\n  min-height: 100%;\n}\n.main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  text-align: center;\n  height: 100% -120px;\n}\nimg {\n  border: 5px solid #28afb0;\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  margin-top: 14px;\n  margin-left: 10px;\n}\nh1 {\n  margin-top: 0;\n}\n.name {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 120px;\n  margin: 0px;\n  color: #acfcd9;\n}\n.name1 {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  letter-spacing: 5px;\n  font-weight: 300;\n  font-size: 120px;\n  margin: 0px;\n  color: #28afb0;\n}\n.name2 {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  letter-spacing: 5px;\n  font-weight: 300;\n  font-size: 60px;\n  margin: 0px;\n  color: #2c3e50;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n.topsection {\n  display: -webkit-box;\n  display: flex;\n  margin: auto;\n  margin-top: 20px;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nsection {\n  margin-top: 10px;\n  margin-right: 10px;\n}\n.example_c {\n  width: 160px;\n  margin-top: 15px;\n  color: #acfcd9 !important;\n  font: 13px/1.4 Helvetica, arial, freesans, clean, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 700;\n  background: #008f95;\n  padding: 20px;\n  border: 4px solid #acfcd9 !important;\n  display: inline-block;\n  -webkit-transition: all 0.4s ease 0s;\n  transition: all 0.4s ease 0s;\n}\n.example_c:hover {\n  color: #acfcd9 !important;\n  background: #28afb0;\n  border-color: #28afb0 !important;\n  -webkit-transition: all 0.4s ease 0s;\n  transition: all 0.4s ease 0s;\n}\n.button_cont span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.button_cont {\n  width: 200px;\n  margin: auto;\n}\n.button_cont span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 1;\n  bottom: 0;\n  margin-bottom: 2px;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.button_cont:hover span {\n  padding-right: 15px;\n}\n.button_cont:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n@media (max-width: 769px) {\n  .name {\n    font-size: 70px;\n  }\n  .name1 {\n    font-size: 70px;\n  }\n  .name2 {\n    font-size: 40px;\n  }\n  img {\n    width: 110px;\n    height: 110px;\n  }\n}\n/*# sourceMappingURL=src/app/pages/home/home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQVE7RUFBUixhQUFRO0VBQ1IsNEJBQWU7RUFBZiw2QkFBZTtVQUFmLHNCQUFlO0VBQ2YsWUFBTztFQUNQLHlCQUFpQjtFQUNqQixrQkFBVztFQUNYLFdBQU07RUFDTixnQkFBVztBQ0NmO0FEQ0E7RUFDSSxvQkFBUTtFQUFSLGFBQVE7RUFDUiw0QkFBZTtFQUFmLDZCQUFlO1VBQWYsc0JBQWU7RUFDZixZQUFPO0VBQ1Asa0JBQVc7RUFDWCxtQkFBTztBQ0NYO0FEQ0E7RUFDSSx5QkFBTztFQUNQLGtCQUFjO0VBQ2QsWUFBTTtFQUNOLGFBQU87RUFDUCxnQkFBVztFQUNYLGlCQUFZO0FDQ2hCO0FEQ0U7RUFDRSxhQUFXO0FDQ2Y7QURDQTtFQUNJLDJDQUFzQjtFQUN0QixrQkFBWTtFQUNaLGdCQUFhO0VBQ2IsZ0JBQVU7RUFDVixXQUFRO0VBQ1IsY0FBTTtBQ0NWO0FEQ0E7RUFDSSwyQ0FBc0I7RUFDdEIsa0JBQVk7RUFDWixtQkFBZ0I7RUFDaEIsZ0JBQWE7RUFDYixnQkFBVTtFQUNWLFdBQVE7RUFDUixjQUFNO0FDQ1Y7QURDQTtFQUNJLDJDQUFzQjtFQUN0QixrQkFBWTtFQUNaLG1CQUFnQjtFQUNoQixnQkFBYTtFQUNiLGVBQVU7RUFDVixXQUFRO0VBQ1IsY0FBTTtFQUNOLGdCQUFXO0VBQ1gsa0JBQWM7QUNDbEI7QURDQTtFQUNJLG9CQUFRO0VBQVIsYUFBUTtFQUNSLFlBQU87RUFDUCxnQkFBVztFQUNYLFdBQU07RUFDTiw4QkFBZTtFQUFmLDZCQUFlO1VBQWYsbUJBQWU7RUFDZix3QkFBaUI7VUFBakIsdUJBQWlCO0FDQ3JCO0FEQ0E7RUFDSSxnQkFBVztFQUNYLGtCQUFhO0FDQ2pCO0FEQ0E7RUFDSSxZQUFNO0VBQ04sZ0JBQVc7RUFDWCx5QkFBTTtFQUNOLGlHQUF3QjtFQUN4QixnQkFBWTtFQUNaLG1CQUFXO0VBQ1gsYUFBUTtFQUNSLG9DQUFPO0VBQ1AscUJBQVE7RUFDUixvQ0FBVztFQUFYLDRCQUFXO0FDQ2Y7QURDQTtFQUNJLHlCQUFNO0VBQ04sbUJBQVc7RUFDWCxnQ0FBYTtFQUNiLG9DQUFXO0VBQVgsNEJBQVc7QUNDZjtBRENBO0VBQ0UsZUFBUTtFQUNSLHFCQUFTO0VBQ1Qsa0JBQVU7RUFDVix3QkFBWTtFQUFaLGdCQUFZO0FDQ2Q7QURFQTtFQUNJLFlBQU07RUFDTixZQUFPO0FDQVg7QURFQTtFQUNFLGdCQUFTO0VBQ1Qsa0JBQVU7RUFDVixVQUFTO0VBQ1QsU0FBUTtFQUNSLGtCQUFjO0VBQ2QsWUFBTztFQUNQLHdCQUFZO0VBQVosZ0JBQVk7QUNBZDtBREdBO0VBQ0UsbUJBQWU7QUNEakI7QURJQTtFQUNFLFVBQVM7RUFDVCxRQUFPO0FDRlQ7QURNd0I7RUFFcEI7SUFDSSxlQUFVO0VDTGhCO0VETUU7SUFDSSxlQUFVO0VDSmhCO0VES0U7SUFDSSxlQUFVO0VDSGhCO0VESUU7SUFDSSxZQUFNO0lBQ04sYUFBTztFQ0ZiO0FBQ0Y7QUFDQSxnRUFBZ0UiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudFxuICAgIGRpc3BsYXkgZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxuICAgIG1hcmdpbiBhdXRvXG4gICAgYmFja2dyb3VuZC1jb2xvciAjMDA4Zjk1XG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcbiAgICB3aWR0aCAxMDAlXG4gICAgbWluLWhlaWdodCAxMDAlXG5cbi5tYWluXG4gICAgZGlzcGxheSBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG4gICAgbWFyZ2luIGF1dG9cbiAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgIGhlaWdodCAxMDAlLTEyMHB4XG5cbmltZyBcbiAgICBib3JkZXIgNXB4IHNvbGlkICMyOGFmYjBcbiAgICBib3JkZXItcmFkaXVzIDUwJVxuICAgIHdpZHRoIDIwMHB4XG4gICAgaGVpZ2h0IDIwMHB4XG4gICAgbWFyZ2luLXRvcCAxNHB4XG4gICAgbWFyZ2luLWxlZnQgMTBweFxuXG4gIGgxIFxuICAgIG1hcmdpbi10b3AgMFxuXG4ubmFtZVxuICAgIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplIDEyMHB4XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3IgI2FjZmNkOVxuXG4ubmFtZTFcbiAgICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemUgMTIwcHhcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvciAjMjhBRkIwXG5cbi5uYW1lMlxuICAgIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHhcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZSA2MHB4XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3IgIzJjM2U1MFxuICAgIG1hcmdpbi10b3AgMTBweFxuICAgIG1hcmdpbi1ib3R0b20gNXB4IFxuXG4udG9wc2VjdGlvblxuICAgIGRpc3BsYXkgZmxleFxuICAgIG1hcmdpbiBhdXRvXG4gICAgbWFyZ2luLXRvcCAyMHB4XG4gICAgd2lkdGggMTAwJVxuICAgIGZsZXgtZGlyZWN0aW9uIHJvd1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG5cbnNlY3Rpb24gXG4gICAgbWFyZ2luLXRvcCAxMHB4O1xuICAgIG1hcmdpbi1yaWdodCAxMHB4XG5cbi5leGFtcGxlX2NcbiAgICB3aWR0aCAxNjBweFxuICAgIG1hcmdpbi10b3AgMTVweFxuICAgIGNvbG9yICNBQ0ZDRDkhaW1wb3J0YW50XG4gICAgZm9udDogMTNweC8xLjQgSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7ICBcbiAgICBmb250LXdlaWdodCA3MDBcbiAgICBiYWNrZ3JvdW5kICMwMDhmOTVcbiAgICBwYWRkaW5nIDIwcHhcbiAgICBib3JkZXIgNHB4IHNvbGlkICNBQ0ZDRDkgIWltcG9ydGFudFxuICAgIGRpc3BsYXkgaW5saW5lLWJsb2NrXG4gICAgdHJhbnNpdGlvbiBhbGwgMC40cyBlYXNlIDBzXG5cbi5leGFtcGxlX2M6aG92ZXJcbiAgICBjb2xvciAjQUNGQ0Q5ICFpbXBvcnRhbnRcbiAgICBiYWNrZ3JvdW5kICMyOGFmYjBcbiAgICBib3JkZXItY29sb3IgIzI4YWZiMCAhaW1wb3J0YW50XG4gICAgdHJhbnNpdGlvbiBhbGwgMC40cyBlYXNlIDBzXG5cbi5idXR0b25fY29udCBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbl9jb250XG4gICAgd2lkdGggMjAwcHhcbiAgICBtYXJnaW4gYXV0b1xuXG4uYnV0dG9uX2NvbnQgc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDE7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbSAycHhcbiAgcmlnaHQ6IC0yMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYnV0dG9uX2NvbnQ6aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5idXR0b25fY29udDpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59ICBcblxuICAgICAgICAgXG5AbWVkaWEgKG1heC13aWR0aDogNzY5cHgpXG4gICAgXG4gICAgLm5hbWVcbiAgICAgICAgZm9udC1zaXplIDcwcHhcbiAgICAubmFtZTFcbiAgICAgICAgZm9udC1zaXplIDcwcHhcbiAgICAubmFtZTJcbiAgICAgICAgZm9udC1zaXplIDQwcHhcbiAgICBpbWdcbiAgICAgICAgd2lkdGggMTEwcHhcbiAgICAgICAgaGVpZ2h0IDExMHB4ICAgICIsIiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Zjk1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlIC0xMjBweDtcbn1cbmltZyB7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMyOGFmYjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmgxIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdkZWFkamltJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEyMHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNhY2ZjZDk7XG59XG4ubmFtZTEge1xuICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTIwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzI4YWZiMDtcbn1cbi5uYW1lMiB7XG4gIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi50b3BzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmV4YW1wbGVfYyB7XG4gIHdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6ICNhY2ZjZDkgIWltcG9ydGFudDtcbiAgZm9udDogMTNweC8xLjQgSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQ6ICMwMDhmOTU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNhY2ZjZDkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xufVxuLmV4YW1wbGVfYzpob3ZlciB7XG4gIGNvbG9yOiAjYWNmY2Q5ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMyOGFmYjA7XG4gIGJvcmRlci1jb2xvcjogIzI4YWZiMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xufVxuLmJ1dHRvbl9jb250IHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLmJ1dHRvbl9jb250IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uYnV0dG9uX2NvbnQgc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDE7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4uYnV0dG9uX2NvbnQ6aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uYnV0dG9uX2NvbnQ6aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gIH1cbiAgLm5hbWUxIHtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gIH1cbiAgLm5hbWUyIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

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

module.exports = "#content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  background-color: #fff;\n  text-align: center;\n  min-height: 100%;\n}\n.abovesection {\n  background-color: #0b4f6c;\n  height: 100vh -50px;\n  margin: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n.belowsection {\n  background-color: #fff;\n  height: 1000px;\n  margin: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n.bottompage {\n  background-color: #e0e0e0;\n  height: 600px;\n  margin: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\np {\n  margin-bottom: 0px;\n  margin-top: 25px;\n}\n.toptitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 180px;\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n.bottomtitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 100px;\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n.bottomtitle2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 80px;\n}\n.title {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 80px;\n  margin: 0px;\n  color: #fff;\n}\n.title2 {\n  font-family: 'deadjim', 'arial', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 80px;\n  margin: 0px;\n  color: #0b4f6c;\n}\n.technicalsection {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n  margin-top: 150px;\n  margin-bottom: 50px;\n  text-align: center;\n  box-shadow: 0 20px 20px -15px rgba(0,0,0,0.3);\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n  background-color: #fff;\n  height: 400px;\n  width: 600px;\n  border-radius: 4px;\n}\n.header {\n  height: 50px;\n  text-align: center;\n  margin: 0px;\n  width: 100%;\n}\n.portfolio {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  margin: auto;\n  margin-top: 140px;\n  margin-bottom: 50px;\n  text-align: center;\n  box-shadow: 0 20px 20px -15px rgba(0,0,0,0.3);\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  background-color: #fff;\n  height: 600px;\n  width: 600px;\n  padding: 0;\n  border-radius: 4px;\n}\n.infoText {\n  margin: auto;\n  margin-top: 20px;\n}\n.card {\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: flex;\n}\n.hiddenblock {\n  width: 100%;\n  background: #d3d3d3;\n  opacity: 0.9;\n  height: 0%;\n  -webkit-transition: height 500ms;\n  transition: height 500ms;\n}\n.hiddenblock p {\n  padding: 1rem 1.5rem;\n  text-align: center;\n  color: #00343f;\n  padding-top: 40px;\n  -webkit-transition: visibility 0s, opacity 0.3s linear;\n  transition: visibility 0s, opacity 0.3s linear;\n  opacity: 0;\n}\n.card:hover .hiddenblock {\n  top: 0;\n  z-index: 2;\n  height: 100%;\n}\n.card:hover .hiddenblock p {\n  visibility: visible;\n  color: #000;\n  opacity: 1;\n}\n.certificates {\n  display: -webkit-box;\n  display: flex;\n  margin: auto;\n  height: 350px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.certificate {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: auto;\n  text-align: center;\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n  -webkit-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n  height: 350px;\n  width: 300px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.certificate:hover {\n  opacity: 0.5;\n}\n.certificate:nth-child(1) {\n  background: url('microsoft.png') center no-repeat;\n}\n.certificate:nth-child(2) {\n  background: url('azure-dev.jpeg') center no-repeat;\n}\n.certLink {\n  display: block;\n  width: 300px;\n  height: 350px;\n}\n.card:nth-child(1) {\n  background: url('AngularCV2.png') top/contain no-repeat;\n}\n.card:nth-child(2) {\n  background: url('Squash.png') top/contain no-repeat;\n}\n.in-view {\n  -webkit-transform: translateY(-100px);\n          transform: translateY(-100px);\n}\n.topsection {\n  background-color: #e0e0e0;\n  width: 100%;\n  margin: 0;\n  height: 130px;\n}\n.bottomsection {\n  display: block;\n  padding: 15px;\n  margin: auto;\n  width: 90%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #fff;\n}\n.bar {\n  -webkit-box-align: end;\n          align-items: flex-end;\n  background-color: #eee;\n  color: #00343f;\n  font: 13px/1.4 Helvetica, arial, freesans, clean, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 500;\n  width: 80%;\n  font-size: 11pt;\n  height: 28px;\n}\n.flex {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 15px;\n  margin-left: 50px;\n  background-color: #d3d3d3;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nspan {\n  display: initial;\n  z-index: 1;\n  padding: 0 5px 0 0;\n  margin-bottom: 4px;\n}\n.fill {\n  left: 0;\n  position: relative;\n  width: 0px;\n  top: 0;\n  background-color: #00a1a7;\n  opacity: 1;\n  z-index: 2;\n  padding: 0;\n  -webkit-transition-property: width;\n  transition-property: width;\n  -webkit-transition-duration: 1s;\n          transition-duration: 1s;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n}\n.tag {\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: flex;\n  padding-top: 5px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: absolute;\n  background-color: #04c2c9;\n  margin: 0;\n  color: #fff;\n  height: 23px;\n  width: 110px;\n  font: 13px/1.4 Helvetica, arial, freesans, clean, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 700;\n}\np {\n  font-size: 18px;\n  color: #00343f;\n  line-height: 1.5;\n  text-align: center;\n  text-justify: auto;\n}\n.certText {\n  color: #00343f;\n  height: 60px;\n}\n@media (max-width: 769px) {\n  .technicalsection {\n    width: 85%;\n  }\n  .flex {\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n  }\n  .tag {\n    width: 80px;\n  }\n  span {\n    padding: 0;\n  }\n  .title {\n    font-size: 60px;\n  }\n  .title2 {\n    font-size: 60px;\n  }\n  .portfolio {\n    width: 90%;\n  }\n  .hiddenblock {\n    margin-top: 180px;\n  }\n  .hiddenblock p {\n    opacity: 1;\n    margin-top: 10px;\n    padding: 0px;\n    margin-bottom: 10px;\n  }\n  .card {\n    margin-bottom: 230px;\n    height: 200px;\n  }\n  .card:nth-child(2) {\n    margin-top: 25px;\n  }\n  .card:hover .hiddenblock {\n    height: 0%;\n  }\n  .infoText {\n    opacity: 0;\n  }\n  .belowsection {\n    height: 1050px;\n  }\n  .certificates {\n    margin-top: 0px;\n  }\n}\n/*# sourceMappingURL=src/app/pages/skills/skills.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFRO0VBQVIsYUFBUTtFQUNSLDRCQUFlO0VBQWYsNkJBQWU7VUFBZixzQkFBZTtFQUNmLFlBQU87RUFDUCxzQkFBaUI7RUFDakIsa0JBQVc7RUFDWCxnQkFBVztBQ0NmO0FEQ0E7RUFDSSx5QkFBaUI7RUFDakIsbUJBQU87RUFDUCxZQUFPO0VBQ1AsNEJBQWU7RUFBZiw2QkFBZTtVQUFmLHNCQUFlO0VBQ2YsV0FBTTtBQ0NWO0FEQ0E7RUFDSSxzQkFBaUI7RUFDakIsY0FBTztFQUNQLFlBQU87RUFDUCw0QkFBZTtFQUFmLDZCQUFlO1VBQWYsc0JBQWU7RUFDZixXQUFNO0FDQ1Y7QURDQTtFQUNJLHlCQUFpQjtFQUNqQixhQUFPO0VBQ1AsWUFBTztFQUNQLDRCQUFlO0VBQWYsNkJBQWU7VUFBZixzQkFBZTtFQUNmLFdBQU07QUNDVjtBRENBO0VBQ0ksa0JBQWM7RUFDZCxnQkFBVztBQ0NmO0FEQ0E7RUFDSSxvQkFBUTtFQUFSLGFBQVE7RUFDUix3QkFBZ0I7VUFBaEIsdUJBQWdCO0VBQ2hCLDRCQUFlO0VBQWYsNkJBQWU7VUFBZixzQkFBZTtFQUNmLGlCQUFXO0VBQ1gsNkNBQVc7RUFBWCxxQ0FBVztFQUFYLDZCQUFXO0VBQVgsd0RBQVc7RUFDWCw4QkFBaUI7VUFBakIsc0JBQWlCO0FDQ3JCO0FEQ0E7RUFDSSxvQkFBUTtFQUFSLGFBQVE7RUFDUix3QkFBZ0I7VUFBaEIsdUJBQWdCO0VBQ2hCLGlCQUFXO0VBQ1gsNkNBQVc7RUFBWCxxQ0FBVztFQUFYLDZCQUFXO0VBQVgsd0RBQVc7RUFDWCw4QkFBaUI7VUFBakIsc0JBQWlCO0FDQ3JCO0FEQ0E7RUFDSSxvQkFBUTtFQUFSLGFBQVE7RUFDUix3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QWM7SUFDZCxhQUFPO0VDY2I7RURiRTtJQUNJLGdCQUFXO0VDZWpCO0VEZEU7SUFDSSxVQUFPO0VDZ0JiO0VEZkU7SUFDSSxVQUFRO0VDaUJkO0VEaEJFO0lBQ0ksY0FBTztFQ2tCYjtFRGpCRTtJQUNJLGVBQVc7RUNtQmpCO0FBQ0Y7QUFDQSxvRUFBb0UiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnRcbiAgICBkaXNwbGF5IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cbiAgICBtYXJnaW4gYXV0b1xuICAgIGJhY2tncm91bmQtY29sb3Igd2hpdGVcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgIG1pbi1oZWlnaHQgMTAwJVxuICAgIFxuLmFib3Zlc2VjdGlvblxuICAgIGJhY2tncm91bmQtY29sb3IgIzBCNEY2Q1xuICAgIGhlaWdodCAxMDB2aC01MHB4XG4gICAgbWFyZ2luIGF1dG9cbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cbiAgICB3aWR0aCAxMDAlXG5cbi5iZWxvd3NlY3Rpb25cbiAgICBiYWNrZ3JvdW5kLWNvbG9yIHdoaXRlXG4gICAgaGVpZ2h0IDEwMDBweFxuICAgIG1hcmdpbiBhdXRvXG4gICAgZmxleC1kaXJlY3Rpb24gY29sdW1uXG4gICAgd2lkdGggMTAwJVxuXG4uYm90dG9tcGFnZVxuICAgIGJhY2tncm91bmQtY29sb3IgI2UwZTBlMCBcbiAgICBoZWlnaHQgNjAwcHhcbiAgICBtYXJnaW4gYXV0b1xuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxuICAgIHdpZHRoIDEwMCVcblxucFxuICAgIG1hcmdpbi1ib3R0b20gMHB4XG4gICAgbWFyZ2luLXRvcCAyNXB4XG5cbi50b3B0aXRsZVxuICAgIGRpc3BsYXkgZmxleFxuICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cbiAgICBtYXJnaW4tdG9wIDE4MHB4XG4gICAgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gMXMgZWFzZVxuICAgIHRyYW5zaXRpb24tZGVsYXkgMC4yc1xuXG4uYm90dG9tdGl0bGVcbiAgICBkaXNwbGF5IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXG4gICAgbWFyZ2luLXRvcCAxMDBweFxuICAgIHRyYW5zaXRpb24gdHJhbnNmb3JtIDFzIGVhc2VcbiAgICB0cmFuc2l0aW9uLWRlbGF5IDAuMnNcblxuLmJvdHRvbXRpdGxlMlxuICAgIGRpc3BsYXkgZmxleFxuICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgICBtYXJnaW4tdG9wIDgwcHhcblxuLnRpdGxlXG4gICAgZm9udC1mYW1pbHk6ICdkZWFkamltJywgJ2FyaWFsJywgc2Fucy1zZXJpZjsgIFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZSA4MHB4XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3Igd2hpdGVcblxuLnRpdGxlMlxuICAgIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7ICBcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemUgODBweFxuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yICMwQjRGNkNcbiAgICBcblxuLnRlY2huaWNhbHNlY3Rpb25cbiAgICBkaXNwbGF5IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cbiAgICBtYXJnaW4gYXV0b1xuICAgIG1hcmdpbi10b3AgMTUwcHhcbiAgICBtYXJnaW4tYm90dG9tIDUwcHhcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgIGJveC1zaGFkb3cgMCAyMHB4IDIwcHggLTE1cHggcmdiYSgwLCAwLCAwLCAuMylcbiAgICB0cmFuc2l0aW9uIHRyYW5zZm9ybSAxcyBlYXNlXG4gICAgdHJhbnNpdGlvbi1kZWxheSAwLjJzXG4gICAgYmFja2dyb3VuZC1jb2xvciB3aGl0ZVxuICAgIGhlaWdodCA0MDBweFxuICAgIHdpZHRoIDYwMHB4XG4gICAgYm9yZGVyLXJhZGl1cyA0cHhcdFxuXG4uaGVhZGVyXG4gICAgaGVpZ2h0IDUwcHhcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgIG1hcmdpbiAwcHhcbiAgICB3aWR0aCAxMDAlXG5cbi5wb3J0Zm9saW9cbiAgICBkaXNwbGF5IGZsZXhcbiAgICBmbGV4LWZsb3cgcm93IHdyYXBcbiAgICBtYXJnaW4gYXV0b1xuICAgIG1hcmdpbi10b3AgMTQwcHhcbiAgICBtYXJnaW4tYm90dG9tIDUwcHhcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgIGJveC1zaGFkb3cgMCAyMHB4IDIwcHggLTE1cHggcmdiYSgwLCAwLCAwLCAuMylcbiAgICB0cmFuc2l0aW9uIHRyYW5zZm9ybSAxcyBlYXNlXG4gICAgYmFja2dyb3VuZC1jb2xvciB3aGl0ZVxuICAgIGhlaWdodCA2MDBweFxuICAgIHdpZHRoIDYwMHB4XG4gICAgcGFkZGluZyAwXG4gICAgYm9yZGVyLXJhZGl1cyA0cHhcdFxuXG4uaW5mb1RleHRcbiAgICBtYXJnaW4gYXV0b1xuICAgIG1hcmdpbi10b3AgMjBweFxuLmNhcmQgICBcbiAgICB3aWR0aCAxMDAlXG4gICAgaGVpZ2h0IDUwJVxuICAgIGRpc3BsYXkgZmxleFxuXG4uaGlkZGVuYmxvY2tcbiAgICB3aWR0aCAxMDAlXG4gICAgYmFja2dyb3VuZCBsaWdodGdyZXlcbiAgICBvcGFjaXR5IDAuOVxuICAgIGhlaWdodCAwJVxuICAgIHRyYW5zaXRpb24gaGVpZ2h0IDUwMG1zXG4gICAgcFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzAwMzQzZjtcbiAgICAgICAgcGFkZGluZy10b3AgNDBweFxuICAgICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xuICAgICAgICBvcGFjaXR5IDBcblxuLmNhcmQ6aG92ZXIgLmhpZGRlbmJsb2NrXG4gICAgdG9wIDBcbiAgICB6LWluZGV4OiAyXG4gICAgaGVpZ2h0IDEwMCVcbiAgICBwXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcbiAgICAgICAgY29sb3IgYmxhY2tcbiAgICAgICAgb3BhY2l0eSAxXG5cbi5jZXJ0aWZpY2F0ZXNcbiAgICBkaXNwbGF5IGZsZXhcbiAgICBtYXJnaW4gYXV0b1xuICAgIGhlaWdodCAzNTBweFxuICAgIGZsZXgtZGlyZWN0aW9uIHJvd1xuICAgIGp1c3RpZnktY29udGVudCBzcGFjZS1iZXR3ZWVuXG4uY2VydGlmaWNhdGVcbiAgICBkaXNwbGF5IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICBtYXJnaW4gYXV0b1xuICAgIHRleHQtYWxpZ24gY2VudGVyXG4gICAgdHJhbnNpdGlvbiB0cmFuc2Zvcm0gMXMgZWFzZVxuICAgIHRyYW5zaXRpb24tZGVsYXkgMC4yc1xuICAgIGhlaWdodCAzNTBweFxuICAgIHdpZHRoIDMwMHB4XG4gICAgYm9yZGVyLXJhZGl1cyA0cHhcdCBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIHdoaXRlIFxuXG4uY2VydGlmaWNhdGU6aG92ZXJcbiAgICBvcGFjaXR5IDAuNVxuLmNlcnRpZmljYXRlOm50aC1jaGlsZCgxKVxuICAgIGJhY2tncm91bmQ6IHVybCgnc3JjXFxhc3NldHNcXEltYWdlc1xcbWljcm9zb2Z0LnBuZycpIGNlbnRlciBuby1yZXBlYXQ7ICBcblxuLmNlcnRpZmljYXRlOm50aC1jaGlsZCgyKVxuICAgIGJhY2tncm91bmQ6IHVybCgnc3JjXFxhc3NldHNcXEltYWdlc1xcYXp1cmUtZGV2LmpwZWcnKSBjZW50ZXIgbm8tcmVwZWF0OyBcblxuLmNlcnRMaW5rXG4gICAgZGlzcGxheSBibG9ja1xuICAgIHdpZHRoIDMwMHB4XG4gICAgaGVpZ2h0IDM1MHB4XG5cbi5jYXJkOm50aC1jaGlsZCgxKVxuICAgIGJhY2tncm91bmQ6IHVybCgnc3JjXFxhc3NldHNcXEltYWdlc1xcQW5ndWxhckNWMi5wbmcnKSB0b3AvY29udGFpbiBuby1yZXBlYXQ7XG5cbi5jYXJkOm50aC1jaGlsZCgyKVxuICAgIGJhY2tncm91bmQ6IHVybCgnc3JjXFxhc3NldHNcXEltYWdlc1xcU3F1YXNoLnBuZycpIHRvcC9jb250YWluIG5vLXJlcGVhdDtcblxuLmluLXZpZXdcbiAgICB0cmFuc2Zvcm0gdHJhbnNsYXRlWSgtMTAwcHgpXG5cbi50b3BzZWN0aW9uXG4gICAgYmFja2dyb3VuZC1jb2xvciAjZTBlMGUwIFxuICAgIHdpZHRoIDEwMCVcbiAgICBtYXJnaW4gMFxuICAgIGhlaWdodCAxMzBweFxuXG4uYm90dG9tc2VjdGlvblxuICAgIGRpc3BsYXkgYmxvY2tcbiAgICBwYWRkaW5nIDE1cHhcbiAgICBtYXJnaW4gYXV0b1xuICAgIHdpZHRoIDkwJVxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIHdoaXRlXG5cbi5iYXIgXG4gICAgYWxpZ24taXRlbXMgZmxleC1lbmRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yICNlZWVcbiAgICBjb2xvcjogIzAwMzQzZlxuICAgIGZvbnQ6IDEzcHgvMS40IEhlbHZldGljYSwgYXJpYWwsIGZyZWVzYW5zLCBjbGVhbiwgc2Fucy1zZXJpZiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDBcbiAgICB3aWR0aCA4MCVcbiAgICBmb250LXNpemUgMTFwdFxuICAgIGhlaWdodCAyOHB4XG5cbi5mbGV4XG4gICAgZGlzcGxheSBmbGV4XG4gICAgbWFyZ2luLWJvdHRvbSAxNXB4XG4gICAgbWFyZ2luLWxlZnQgNTBweFxuICAgIGJhY2tncm91bmQtY29sb3IgbGlnaHRncmV5XG4gICAgZmxleC1kaXJlY3Rpb24gcm93XG4gICAganVzdGlmeS1jb250ZW50IHNwYWNlLWJldHdlZW5cbnNwYW4gXG4gICAgZGlzcGxheSBpbml0aWFsICBcbiAgICB6LWluZGV4IDFcbiAgICBwYWRkaW5nIDAgNXB4IDAgMFxuICAgIG1hcmdpbi1ib3R0b20gNHB4XG5cbi5maWxsXG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbiByZWxhdGl2ZVxuICAgIHdpZHRoIDBweFxuICAgIHRvcDogMDsgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGExYTc7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4IDJcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgd2lkdGhcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uIDFzXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0XG5cbi50YWdcbiAgICBsZWZ0OiAwO1xuICAgIHRvcCAwXG4gICAgZGlzcGxheSBmbGV4XG4gICAgcGFkZGluZy10b3AgNXB4XG4gICAganVzdGlmeS1jb250ZW50IGNlbnRlclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRjMmM5O1xuICAgIG1hcmdpbiAwXG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0IDIzcHhcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgZm9udDogMTNweC8xLjQgSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcblxucFxuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yICMwMDM0M2ZcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWp1c3RpZnk6IGF1dG87XG5cbi5jZXJ0VGV4dFxuICAgIGNvbG9yICMwMDM0M2ZcbiAgICBoZWlnaHQgNjBweFxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY5cHgpXG4gICAgXG4gICAgLnRlY2huaWNhbHNlY3Rpb25cbiAgICAgICAgd2lkdGggODUlXG4gICAgLmZsZXhcbiAgICAgICAgbWFyZ2luLWxlZnQgMFxuICAgICAgICBtYXJnaW4tcmlnaHQgMFxuICAgICAgICB3aWR0aCAxMDAlXG4gICAgLnRhZyBcbiAgICAgICAgd2lkdGggODBweFxuICAgIHNwYW4gXG4gICAgICAgIHBhZGRpbmcgMFxuICAgIC50aXRsZVxuICAgICAgICBmb250LXNpemUgNjBweFxuICAgIC50aXRsZTJcbiAgICAgICAgZm9udC1zaXplIDYwcHhcbiAgICAucG9ydGZvbGlvXG4gICAgICAgIHdpZHRoIDkwJVxuICAgIC5oaWRkZW5ibG9ja1xuICAgICAgICBtYXJnaW4tdG9wIDE4MHB4XG4gICAgLmhpZGRlbmJsb2NrIHBcbiAgICAgICAgb3BhY2l0eSAxXG4gICAgICAgIG1hcmdpbi10b3AgMTBweFxuICAgICAgICBwYWRkaW5nIDBweFxuICAgICAgICBtYXJnaW4tYm90dG9tIDEwcHhcbiAgICAuY2FyZFxuICAgICAgICBtYXJnaW4tYm90dG9tIDIzMHB4XG4gICAgICAgIGhlaWdodCAyMDBweFxuICAgIC5jYXJkOm50aC1jaGlsZCgyKVxuICAgICAgICBtYXJnaW4tdG9wIDI1cHhcbiAgICAuY2FyZDpob3ZlciAuaGlkZGVuYmxvY2tcbiAgICAgICAgaGVpZ2h0IDAlXG4gICAgLmluZm9UZXh0XG4gICAgICAgIG9wYWNpdHkgMFxuICAgIC5iZWxvd3NlY3Rpb25cbiAgICAgICAgaGVpZ2h0IDEwNTBweFxuICAgIC5jZXJ0aWZpY2F0ZXNcbiAgICAgICAgbWFyZ2luLXRvcCAwcHgiLCIjY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLmFib3Zlc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjRmNmM7XG4gIGhlaWdodDogMTAwdmggLTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmVsb3dzZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm90dG9tcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGhlaWdodDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLnRvcHRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDE4MHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cbi5ib3R0b210aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG4uYm90dG9tdGl0bGUyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ2RlYWRqaW0nLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnRpdGxlMiB7XG4gIGZvbnQtZmFtaWx5OiAnZGVhZGppbScsICdhcmlhbCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICMwYjRmNmM7XG59XG4udGVjaG5pY2Fsc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggLTE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wb3J0Zm9saW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDE0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IC0xNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmluZm9UZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGlkZGVuYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgb3BhY2l0eTogMC45O1xuICBoZWlnaHQ6IDAlO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXM7XG59XG4uaGlkZGVuYmxvY2sgcCB7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAzNDNmO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbiAgb3BhY2l0eTogMDtcbn1cbi5jYXJkOmhvdmVyIC5oaWRkZW5ibG9jayB7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcmQ6aG92ZXIgLmhpZGRlbmJsb2NrIHAge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi5jZXJ0aWZpY2F0ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMzUwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jZXJ0aWZpY2F0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jZXJ0aWZpY2F0ZTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5jZXJ0aWZpY2F0ZTpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmNcXGFzc2V0c1xcSW1hZ2VzXFxtaWNyb3NvZnQucG5nXCIpIGNlbnRlciBuby1yZXBlYXQ7XG59XG4uY2VydGlmaWNhdGU6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjXFxhc3NldHNcXEltYWdlc1xcYXp1cmUtZGV2LmpwZWdcIikgY2VudGVyIG5vLXJlcGVhdDtcbn1cbi5jZXJ0TGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzUwcHg7XG59XG4uY2FyZDpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmNcXGFzc2V0c1xcSW1hZ2VzXFxBbmd1bGFyQ1YyLnBuZ1wiKSB0b3AvY29udGFpbiBuby1yZXBlYXQ7XG59XG4uY2FyZDpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmNcXGFzc2V0c1xcSW1hZ2VzXFxTcXVhc2gucG5nXCIpIHRvcC9jb250YWluIG5vLXJlcGVhdDtcbn1cbi5pbi12aWV3IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG59XG4udG9wc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTMwcHg7XG59XG4uYm90dG9tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJhciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICMwMDM0M2Y7XG4gIGZvbnQ6IDEzcHgvMS40IEhlbHZldGljYSwgYXJpYWwsIGZyZWVzYW5zLCBjbGVhbiwgc2Fucy1zZXJpZiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDExcHQ7XG4gIGhlaWdodDogMjhweDtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbnNwYW4ge1xuICBkaXNwbGF5OiBpbml0aWFsO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIDVweCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5maWxsIHtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMHB4O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExYTc7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuLnRhZyB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0YzJjOTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAyM3B4O1xuICB3aWR0aDogMTEwcHg7XG4gIGZvbnQ6IDEzcHgvMS40IEhlbHZldGljYSwgYXJpYWwsIGZyZWVzYW5zLCBjbGVhbiwgc2Fucy1zZXJpZiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXdlaWdodDogNzAwO1xufVxucCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMwMDM0M2Y7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xufVxuLmNlcnRUZXh0IHtcbiAgY29sb3I6ICMwMDM0M2Y7XG4gIGhlaWdodDogNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAudGVjaG5pY2Fsc2VjdGlvbiB7XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxuICAuZmxleCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50YWcge1xuICAgIHdpZHRoOiA4MHB4O1xuICB9XG4gIHNwYW4ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gIH1cbiAgLnRpdGxlMiB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICB9XG4gIC5wb3J0Zm9saW8ge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLmhpZGRlbmJsb2NrIHtcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcbiAgfVxuICAuaGlkZGVuYmxvY2sgcCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMzBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG4gIC5jYXJkOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxuICAuY2FyZDpob3ZlciAuaGlkZGVuYmxvY2sge1xuICAgIGhlaWdodDogMCU7XG4gIH1cbiAgLmluZm9UZXh0IHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5iZWxvd3NlY3Rpb24ge1xuICAgIGhlaWdodDogMTA1MHB4O1xuICB9XG4gIC5jZXJ0aWZpY2F0ZXMge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9wYWdlcy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"

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
            var items = [document.querySelector(".portfolio")];
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

module.exports = __webpack_require__(/*! /home/telljo/Documents/Josh/Projects/AngularCV/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map