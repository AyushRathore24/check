import { Pipe, PipeTransform } from '@angular/core';
import { log } from 'console';

@Pipe({
  name: 'convertdate'
})
export class ConvertdatePipe implements PipeTransform {
 

  transform(value: string) {
    //userd split for breaking it when any - comes
        const parts = value.split('-');  
  console.log(parts);
  
  //on third value every time we check

  const date = new Date();
  console.log(date.getMonth()+1+"month "+date.getFullYear()+" year"+date.getDate()+" date");
  


  if (parts.length === 4) {
      // let  day= parts[0].padStart(2, '0'); ;
      let  month = parts[1].padStart(2, '0'); 
   
      let year:any;
    
       if(parts[2].length === 2){
      year =(parseInt(parts[2])>24)  ? ('19' + parts[2]) :( '20' + parts[2]); 
    
          }
        else if(parts[2].length === 3){
          year =(parseInt(parts[2])>24)  ? ('1' + parts[2]) :( '2' + parts[2]); 
        }
        else if(parts[2].length === 1){
            year = '200' + parts[2] }
        else
            year=parts[2]                     
     

 
          year = date.getFullYear() -parseInt((year)) ; 


       if(parseInt(month)>date.getMonth()){
        year=year-1;

        }

       return `${year} years `;

  
    }
    return value; 
 
  }

}

