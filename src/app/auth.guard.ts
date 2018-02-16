import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }
  canActivate(): Observable<boolean> {
    return this.authService.getcout().map(r =>{
      console.log("from Auth guard");
      return true;
    })
  }

  // if(!this.authService.isLogin){
  //   this.router.navigate(['login']);
  //   return false;
  // }

}

