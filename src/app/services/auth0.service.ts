import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth0Service {
  // Configure Auth0
  lock = new Auth0Lock('5BXW5mMg5lGg2EzzbDxsYeZtyCbKHejg', 'mahim3.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => {
      this.lock.getProfile(authResult.accessToken, function(error:any, profile:any){
          if(error){
              throw new Error(error);
          }
            localStorage.setItem('id_token', authResult.accessToken);
            localStorage.setItem('profile', JSON.stringify(profile)); 
      });
    });

  }

  public login() {
    // Call the show method to display the widget.
    console.log("from login");    
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    console.log("authenticated");    
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    console.log("from logout");
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  };
}