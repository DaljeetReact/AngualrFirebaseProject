import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {
    path:'login', loadChildren:()=>import('./user/user.module').then((m)=>m.UserModule) // this will only load the user module when it will hit the login page
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
