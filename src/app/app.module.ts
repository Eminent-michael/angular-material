import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UserComponent } from './user/user.component';
import { ContactModule } from './contact/contact.module';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';


const routeArray = [
  //  {
  //   path: '',
  //   redirectTo: "login",
  // },
  {
    path: 'login',
    component: UserComponent,
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ContactModule,
    RouterModule.forRoot(routeArray),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
