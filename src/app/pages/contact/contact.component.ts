import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import './../../../assets/scripts/smtp.js'; //file path may change → 
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent implements OnInit {
  constructor() {
   }

  transform1 = 'translateY(-100px)'
  transform2 = 'translateY(20px)'
  
  ngOnInit() {
  }

}
