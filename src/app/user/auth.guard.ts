import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { SnackService } from '../services/snack.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private afauth: AngularFireAuth,
    private snack:SnackService
    ){}

  async canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
    ): Promise<boolean>{
      const user = await this.afauth.currentUser;
      const isLogin =   !!user;
      console.log(user);
      console.log(typeof(isLogin)+isLogin);
      if(!isLogin){
        this.snack.authError();
      }
      return isLogin;
  }
  
}
