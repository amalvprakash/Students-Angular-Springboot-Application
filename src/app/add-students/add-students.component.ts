import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
 
 

  name=""
  rollNO=""
  admissionNo=""
  college=""
 

  constructor(private api:ApiService){}
  readValues =() =>{
    let data:any ={

      "name":this.name,
      "rollNO":this.rollNO,
      "admissionNo":this.admissionNo,
      "college":this.college,
 
    }
    this.api.addStudents(data).subscribe(
      (response:any) => {
        console.log(response)
        if (response.status == "success") {
          alert("Student Added SuccessFully")
         
         
        } else {
          alert("Something went wrong!!!")
        }
      }
    )
  }
}
