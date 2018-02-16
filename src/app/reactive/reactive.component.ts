import { Component, OnInit } from '@angular/core';
import{ FormBuilder,  FormGroup, Validators} from '@angular/forms';
import{ ICategory} from './category.interface';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  rForm:FormGroup;
  titleErrorMessage:string;
  descriptionErrorMessage:string;
  categoryErrorMessage:string;
  categories: ICategory[]= [
    { id:0,
     name: 'please select',
     description: 'Default Value'},
    { id:0,
     name: 'Electronics',
     description: 'All kind of device'},
    { id:0,
     name: 'Fashion',
     description: 'New Apparels'},
    { id:0,
     name: 'kindle',
     description: 'All Books'},

   ]
  
  constructor(private fBuilder:FormBuilder) {
    this.InitErrorMsg();
    this.rForm = fBuilder.group({
      "title": [null, Validators.required],
      "description": [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      "categories": [null]

    })
   }

   InitErrorMsg(){
     this.titleErrorMessage="Title is Required";
     this.categoryErrorMessage="Category is Required";
     this.descriptionErrorMessage="Description should be min 10 to max 50";
   }
   
   submitDetails(data:any){
    console.dir(data);
   }

  ngOnInit() {
  }

}
