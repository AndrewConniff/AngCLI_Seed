import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTING } from './app.routes';
import { APP_PROVIDERS } from './app.providers';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    ROUTING
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ APP_PROVIDERS ]
})
export class AppModule { }
