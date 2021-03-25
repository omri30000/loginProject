import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginProject';
  mode = 'signup';
  hide = true;
  isSignedIn = false;
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
    }
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
    }
  }

  changeMode(current: string){
      this.mode = current === 'signup' ? 'login' : 'signup';
  }

  handleLogout() {
    this.isSignedIn = false;
  }
}
