import { Component, OnInit,Inject } from '@angular/core';
import { NgForm,FormGroup,FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { AppServiceService } from 'src/app/app-service.service';



@Component({
  selector: 'app-add-senator',
  templateUrl: './add-senator.component.html',
  styleUrls: ['./add-senator.component.scss']
})
export class AddSenatorComponent implements OnInit {

  form: FormGroup;
  formData:string;
  states:any=[]

  public  name:  string  =  "";
  public  phoneNumber:  string  =  "";
  public  email:  string  =  "";
  public  state:  Number 

  constructor(
    private dialogRef: MatDialogRef<AddSenatorComponent>,
    @Inject(MAT_DIALOG_DATA) data,public appService:AppServiceService) { 

      this.formData = data;
      console.log(data)
    }

    ngOnInit() {
      this.appService.getStates().then(data => {
        this.states = data;
        console.log(this.states);
      });
  }

  save() {
    var data={
      "id": 0,
      "name": this.name,
      "phoneNumber": this.phoneNumber,
      "email": this.email,
      "state": this.state
    }
    // console.log(data)
      this.dialogRef.close(data);
  }

  close() {
      this.dialogRef.close();
  }


}
