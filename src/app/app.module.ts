import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowElementDirective } from './show-element.directive';
import { ChangeBackgroundDirective } from './change-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowElementDirective,
    ChangeBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
