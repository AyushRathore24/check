import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iregister } from '../Iregister';

@Component({
  selector: 'app-sub-admin',
  templateUrl: './sub-admin.component.html',
  styleUrls: ['./sub-admin.component.css']
})
export class SubAdminComponent implements OnInit {
  userForm!:FormGroup;
  

  constructor(private fb: FormBuilder, private authService:AuthService,private router:Router) { }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required]],
      password:['',[Validators.required,]],
      role: ['password', Validators.required] 
    });
  }
 
  gotoback(){
    this.router.navigate(['/books']);
  }
   signup(){
    const {value} = this.userForm
console.log(value);
const userObj:Iregister ={
  id: '',
  password: value.password,
  email: value.role,
  role: '',
  username: ''
}

this.router.navigate(['/books'])
this.authService.adduser(userObj).then((note)=>{
 if (note){
    alert("User Updated Sucessfully");
    this.userForm.reset()
 }
})

}
}