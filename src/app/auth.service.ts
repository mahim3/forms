import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';


@Injectable()
export class AuthService {

  isLogin:boolean = true;

  constructor(private http: Http) { }

  getcout(){
    return this.http.get("http://localhost:5000/getcount");
  }

}
