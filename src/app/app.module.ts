import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAKdcjgoYN6Ye822cIKZpnlluJGzqRJspk",
      authDomain: "loginproject-5caee.firebaseapp.com",
      projectId: "loginproject-5caee",
      storageBucket: "loginproject-5caee.appspot.com",
      messagingSenderId: "256709267053",
      appId: "1:256709267053:web:4c94c879b54c5253777964",
      measurementId: "G-XDJJ1EHMVW"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
