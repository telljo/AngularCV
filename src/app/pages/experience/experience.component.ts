import { Component, OnInit } from '@angular/core';
import { delay } from 'q';
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.styl']
})
export class ExperienceComponent implements OnInit {

  private birthdate: Date = new Date("1997-01-30");
  constructor() {}

  public CalculateAge(): string {
    const today = new Date();
    let age = today.getFullYear() - this.birthdate.getFullYear();
    const m = today.getMonth() - this.birthdate.getMonth();
    if(m<0 ||  (m===0 && today.getDate() < this.birthdate.getDate())){
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

  public loadScript() {        

    (function() {

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
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.top+100 <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
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
    
    })()

    }
}