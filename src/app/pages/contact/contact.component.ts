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
  
  ngOnInit() {
  }


  onSubmit(f: NgForm) {

    Email.send({
    Host : 'smtp.elasticemail.com',
    Username : 'jtell1997@gmail.com',
    Password : 'B346AD7B68FC87769A8AECF4765141085C05',
    To : 'jtell1997@gmail.com',
    From : 'jtell1997@gmail.com',
    Subject : 'subject',
    Body : `
    <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${f.value } <br /> <b>Email: </b>    <br /> <b>Subject: </b>    <br /> <b>Message:</b> <br />     <br><br> <b>~End of Message.~</b> `
    }).then( message => {alert(message); f.resetForm(); } );   
    }

}
