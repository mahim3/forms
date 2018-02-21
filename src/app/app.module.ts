import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'rxjs/Rx';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule }   from '@angular/forms';
import { RoutingModule, routingComponent } from './routing/routing.module';
import { FormdetailComponent } from './formdetail/formdetail.component';
import { ChildComponent } from './child/child.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import { Auth0Service } from './services/auth0.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';


// import { LoginComponent } from './login/login.component';
// import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    FormdetailComponent,
    ChildComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    Auth0Service,
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
