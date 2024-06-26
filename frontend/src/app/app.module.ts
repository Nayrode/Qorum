import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ApiService } from './api-service.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ApiService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }