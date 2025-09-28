import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { StoriesComponent } from './features/components/story-list/story-list.component';
import { AppComponent } from './app';
import { AppRoutingModule } from './app-routing-module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoriesComponent,
    

    HttpClientModule   // 👈 enable HttpClient across app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
