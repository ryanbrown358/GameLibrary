import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
// ngx bootstrap imports
import {BsDropdownModule} from 'ngx-bootstrap';


// routing / main components / servies / guards 
import { AppComponent } from './app.component';
import { GameComponent } from './Components/game/game.component';
import { NavComponent } from './Components/nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import {ErrorInterceptorProvider} from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { MessagesComponent } from './Components/messages/messages.component';
import { ListComponent } from './Components/list/list.component';
import { GameListComponent } from './Components/game-list/game-list.component';
import {appRoutes} from './routes';
import { AuthGuard } from './_guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MessagesComponent,
    ListComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
