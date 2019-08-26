import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navigation/navigation.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    CollapseModule.forRoot() 
  ],  
  declarations: [ AppComponent, HelloComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
