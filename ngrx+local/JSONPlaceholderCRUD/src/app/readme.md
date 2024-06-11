html

<div id="main">
  <div id="filled">
    <form [formGroup]="postForm" (ngSubmit)="addData()">
    <div class="main" *ngFor="let item of data">
      <div id="block">

        <div>
          <h3 class="common">ID: {{ item.id }}</h3>
          <br>
          <h4 class="common">UserId: {{ item.userId }}</h4>
          <br><span class="bold"> Title</span> : {{ item.title }}<br><span class="bold"> Body</span> :  {{item.body}}
        </div>
        <div id="disp">
          <button class="btn" (click)="UpdateData(item)" (click)="showForm = !showForm" (click)="EditForm = !EditForm">Edit</button>
          <button class="btn" (click)="deleteData(item.id)">Delete</button>
        </div>
      </div>

      <div id="form" *ngIf="showForm">
        <h2>Add New Data</h2><br>
        <!-- <form [formGroup]="postForm" (ngSubmit)="UpdateData()"> -->
          <div>userId</div>
          <input type="number" formControlName="userId">
          <div>Title:</div> 
    
          <input type="text" class="input" formControlName="title">
          <div>Body:</div>
          <textarea formControlName="body" class="input"></textarea>
          <button class="btn" type="submit">Save New Data</button>
          <button class="btn" *ngIf="EditForm" type="submit" (click)="EditForm = !EditForm" (click)="updateit(item.id)">Update Data</button>
      </div>
    </div>
  
 
    </form>
    
  </div>
</div>


component
 updateit(id:number){
  
   this.data.map(post=>{
        if(post.id == id){
             post = this.postForm;
        }

        return post;
   })
 }

