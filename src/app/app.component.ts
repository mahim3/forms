import { Component } from '@angular/core';
import {ElementRef } from '@angular/core'
import { ViewChild } from '@angular/core';
import { Auth0Service } from './services/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  slug='login';
  ab='ab';
@ViewChild('myheader') headerElement:ElementRef;

category= [{id:1, name: 'Engineering'},{id:2, name: 'Medical'}];

constructor(private auth:Auth0Service){
  console.log(this.headerElement);
}
}
