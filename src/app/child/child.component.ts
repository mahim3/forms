import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() element:{id:number,name:string};
  constructor() { }

  ngOnInit() {
  }

}
