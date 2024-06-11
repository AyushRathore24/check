import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  demo2 = 'demo2 app is running!';
  regForm!: FormGroup;
   


  constructor(public authService:AuthService,private router:Router){}
  
  ngOnInit(): void {
    document.title = 'Books ManageMent';
  }

  /**
 * when user clicks on logout
 */
  logout(): void {
    this.authService.logout();

    // Redirect to login page or any other desired route
    this.router.navigate(['/login']);
  }
}
