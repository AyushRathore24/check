import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginPost } from '../post.actions';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  showForm!:FormGroup;
  
  constructor(    private router: Router,
    private fb:FormBuilder,private store:Store,private authService:AuthService) { }

  ngOnInit(): void {
    this.showForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
console.log("main chala");
const{value} =this.showForm
console.log(value);
console.log(this.showForm.value);

   if(this.showForm.controls['username'].value === 'user',this.showForm.controls['password'].value === 'password'){
    this.authService.isloggedin=true;
    alert("LoggedIn Successfull !!")
    this.router.navigate(['bookngrx']);
   }
    
  }
}
