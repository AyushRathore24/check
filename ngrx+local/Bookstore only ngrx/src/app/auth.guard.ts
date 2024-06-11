import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router:Router,private authservice:AuthService){}
  canActivate(){
    if(this.authservice.isloggedin){
     return true
  }else{
    this.router.navigate(['login']);
   return false
  }
}
  
}
