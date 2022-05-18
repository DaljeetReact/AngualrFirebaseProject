import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SnackService {
  
  constructor(private snackBar: MatSnackBar,private route: Router) { }

  authError(){
      this.snackBar.open('You must be logged in !','ok',{duration: 5000});
      let val = this.snackBar._openedSnackBarRef?.onAction().pipe(
        tap(_ =>
          this.route.navigate(['/login'])
        )
      ).subscribe();
      console.log({val});
      return val;
  }
}
