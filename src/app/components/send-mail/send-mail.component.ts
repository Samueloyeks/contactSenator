import { Component, OnInit,Inject } from '@angular/core';
import { NgForm,FormGroup,FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent implements OnInit {


  states:any=[]
  form: FormGroup;
  formData:string;
  from;
  to;
  subject;
  body;


  constructor( private dialogRef: MatDialogRef<SendMailComponent>,
    @Inject(MAT_DIALOG_DATA) data,public appService:AppServiceService) {


      // this.from = data.pageValue.id
      this.to = data.pageValue.email
      // this.subject = data.pageValue.name;
      // this.body= data.pageValue.phoneNumber;

     }

  ngOnInit() {
  }


  send() {
    var data={
      "from": this.from,
      "to": this.to,
      "subject": this.subject,
      "body": this.body
    }
    // console.log(data)
      this.dialogRef.close(data);
  }

  close() {
      this.dialogRef.close();
  }
}
