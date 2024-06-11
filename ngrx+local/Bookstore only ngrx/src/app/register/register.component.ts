import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iregister } from '../Iregister';
import { Store } from '@ngrx/store';
import { signupPost } from '../post.actions';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router:Router,private fb:FormBuilder,private store:Store,private authService:AuthService) { }

     /**declared variables */
  regForm!:FormGroup;
  
  ngOnInit(): void {
    this.regForm = this.fb.group({
      id:[],
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]*$/)]],
  })}
  navigate2login(){
    this.router.navigate(['login']);
  }



signup(){  
  const{value} =this.regForm

  console.log(value);
  this.store.dispatch(signupPost({ value }));
  this.authService.isloggedin=true;
  alert("User Registered Successfully :)")
  this.router.navigate(['bookngrx']);
}






}
