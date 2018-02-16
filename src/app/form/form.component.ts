import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  hero:any={};
  constructor() { }

  ngOnInit() {
  }
  saveHero(hero: any){
    console.log('saveHero');
    console.log(hero);
  }
}
