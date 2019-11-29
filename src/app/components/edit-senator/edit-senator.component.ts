import { Component, OnInit,Inject } from '@angular/core';
import { NgForm,FormGroup,FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { AppServiceService } from 'src/app/app-service.service';
@Component({
  selector: 'app-edit-senator',
  templateUrl: './edit-senator.component.html',
  styleUrls: ['./edit-senator.component.scss']
})
export class EditSenatorComponent implements OnInit {

  states:any=[]
  form: FormGroup;
  formData:string;
  name;
  phoneNumber;
  email;
  state:Number;
  id;

  constructor(private dialogRef: MatDialogRef<EditSenatorComponent>,public appService:AppServiceService,
    @Inject(MAT_DIALOG_DATA) data) {
      this.formData = data;

      console.log(data)

      this.id = data.pageValue.id
      this.name = data.pageValue.name;
      this.phoneNumber= data.pageValue.phoneNumber;
      this.email = data.pageValue.email;
      // this.state = data.pageValue.state
     }

     ngOnInit() {
      this.appService.getStates().then(data => {
        this.states = data;
        console.log(this.states);
      });
    }
  
    save(form: NgForm) {
      var data ={
        "id": this.id,
        "name": this.name,
        "phoneNumber": this.phoneNumber,
        "email": this.email,
        "state": this.state
      }

      console.log(data)
        this.dialogRef.close(data);
    }
  
    close() {
        this.dialogRef.close();
    }
  

}
