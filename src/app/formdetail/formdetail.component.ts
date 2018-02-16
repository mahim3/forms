import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formdetail',
  templateUrl: './formdetail.component.html',
  styleUrls: ['./formdetail.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FormdetailComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params);
    })
  }

}
