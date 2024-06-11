import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {    
  
  productForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
     
    this.productForm = this.fb.group({  
      name: '',  
      quantities: this.fb.array([]) ,  
    });  
  }  
  ngOnInit(): void {
  }
    
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      name:'',
      price: '',  
      unit:'',
      dct: '',  
      total:''
    })  
  }  

  calculateTotal(index: number) {
    const quantity = this.quantities().at(index);
    const price = +quantity.get('price')?.value || 0; 
    const unit = +quantity.get('unit')?.value || 0; 
    const discount = +quantity.get('dct')?.value || 0; 
    const total = (price*unit) - discount; 
    quantity.get('total')?.setValue(total.toFixed(2)); 
  }

  calculateOverAll() {
    let quantities = this.productForm.get('quantities') as FormArray;
    let totalSum = 0;
    let discountSum = 0;
  
    quantities.controls.forEach(control => {
      let total = +control.get('total')?.value || 0;
      let discount = +control.get('dct')?.value || 0;
      totalSum += total;
      discountSum += discount;
    });
    console.log('calcute---');
    
  
    return { totalSum, discountSum };
  }
  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    console.log('index is',i);
    
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.productForm.value);  
  }  
}
