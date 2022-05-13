import { Directive, HostListener } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth'
@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private auth:AngularFireAuth) { }

  @HostListener('click')
  onclick(){
      this.auth.signInWithPopup(new firebase.GoogleAuthProvider);
  }
}
