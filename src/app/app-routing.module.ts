import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CanActiveGuard } from './can-active.guard';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full" },
  {path:"login",component:LoginComponent},
  {path:"menu",component:MenuComponent,canActivate:[CanActiveGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
