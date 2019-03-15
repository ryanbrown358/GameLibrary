import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

// ngx bootstrap imports
import {BsDropdownModule} from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './Components/game/game.component';
import { NavComponent } from './Components/nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import {ErrorInterceptorProvider} from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
