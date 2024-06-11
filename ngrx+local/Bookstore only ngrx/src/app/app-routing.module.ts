import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookngrxComponent } from './bookngrx/bookngrx.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{ 
  path:'bookngrx',
  component: BookngrxComponent,
  canActivate:[AuthGuard]

},

{ 
  path:'',
  component: HomeComponent,


},
{ 
  path:'home',
  component: HomeComponent,


},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'login',
  component:LoginComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
