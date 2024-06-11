import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Post } from './post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Post[] = [];
  showForm: boolean = false;
  addform: boolean = false;
  EditForm: boolean = false;
  postForm:any;
  store:number=0;
  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getData();
    this.postForm = this.formBuilder.group({
      id: [''],
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  getData(): void {
    this.dataService.getData()
      .subscribe(data => {
        this.data = data; 
        
      });
  }

  add(){
    if (this.postForm.valid) {
      console.log("Data Added Succesfully");
      this.dataService.AddData(this.postForm.value)
        .subscribe(response => {
          this.data.push(response);
          // this. Form = false;
          this.postForm.reset();
          alert("Data Added Successfully")});
          this.showForm = false;
          this.addform=false;


  }}

edittoggle(){
  this.showForm=true;

  this.EditForm=true;
}



   addtoggle(){
    this.showForm=true;

    this.addform=true;
  }
  
  UpdateData(item: Post) {
    // Set form values based on the selected item for editing
    
    this.postForm.setValue({
      id: item.id,
      userId: item.userId,
      title: item.title,
      body: item.body
    });
    this.store=item.id-1;
    // Set showForm to true to display the form for editing
    this.EditForm=false;
  }
  updateit(){
    
console.log(this.store);

    this.showForm = false;
    this.data[this.store] = this.postForm.value;
   
   
  this.EditForm=false;
  this.showForm=false;
   
   
  //  this.data =  this.data.map(post=>{
  //     if(post.id== this.store){

  //       post = this.postForm.value;
  //       console.log(this.postForm.value , 'Form value');
        
  //     }
  //     // console.log(post,'kkj');
      
  //     return post;
  //   })
  
    // console.log(this.data)
    // this.EditForm = false;
 }
 deleteData(id:number){
  this.dataService.DeleteData(id).subscribe(() => {
    this.data = this.data.filter(post => post.id !== id);
  });
 }
 cancel(){
  this.showForm=false;
  this.EditForm=false;
  this.addform=false;
 }





}
