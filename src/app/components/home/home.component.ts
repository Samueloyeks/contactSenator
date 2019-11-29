import { Component, OnInit } from "@angular/core";
import { AppServiceService } from "src/app/app-service.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddSenatorComponent } from "../add-senator/add-senator.component";
import { EditSenatorComponent } from '../edit-senator/edit-senator.component';
import { SendMailComponent } from '../send-mail/send-mail.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  // template: `
  //   <section class="hero is-info is-fullheight is-bold">
  //   <div class="hero-body">
  //   <div class="container">

  //     <h1 class="title">Home Page!</h1>

  //   </div>
  //   </div>
  //   </section>
  // `,
  styles: []
})
export class HomeComponent implements OnInit {
  senators: any = [];
  states:any=[];
  senator;

  name;
  phoneNumber;
  email;
  state;
  loading:Boolean = false;

  constructor(public appService: AppServiceService, public dialog: MatDialog,private toastr: ToastrService) {

    
  }

  ngOnInit() {
    this.loading = true
    this.appService.getSenators().then(data => {
      if(data == 'Error!'){

      }
      this.senators = data;
      console.log(this.senators);
      this.loading = false
    });

    this.appService.getStates().then(data => {
      this.states = data; 
      console.log(this.states);
    });

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(AddSenatorComponent, {
      width: '800px',
      backdropClass:'custom-dialog-backdrop-class',
      panelClass:'custom-dialog-panel-class',
    });

  //   dialogConfig.data = {
  //     id:0,
  //     name: senator.name,
  //     phoneNumber: senator.phoneNumber,
  //     email: senator.email,
  //     state: senator.state,
  // };
  dialogRef.afterClosed().subscribe(
    data => {
      console.log("add Dialog output:", data)
      if(data){
        this.loading = true
        this.appService.addSenators(data).then((response)=>{
          if(response == 'Error!'){
            this.toastr.error("Error!")
          }
          this.senators = response
          console.log(response)
          this.loading = false
          this.toastr.success("Record Added Successfully!")

        },error=>{
          console.log(error)
          this.loading = false
          this.toastr.error("Error!")

        })

      }
    }
);    
  }


  editSenator(senator){
    // console.log(senator)
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(EditSenatorComponent, {
      width: '800px',
      backdropClass:'custom-dialog-backdrop-class',
      panelClass:'custom-dialog-panel-class',
      data: {pageValue: senator}
    });

    dialogConfig.data = {
      id:senator.id,
      name: senator.name,
      phoneNumber: senator.phoneNumber,
      email: senator.email,
      state: senator.state,
  };
 
  dialogRef.afterClosed().subscribe(
    data => {
      console.log("edit Dialog output:", data)
      if(data){
        this.loading = true
        this.appService.editSenator(data).then((response)=>{
          if(response == 'Error!'){
            this.toastr.error("Error!")

          }
          this.senators = response
          console.log(response)
          this.loading = false
          this.toastr.success("Done!")
        },error=>{
          console.log(error)
          this.loading = false
          this.toastr.error("Error!")

        })
      }
    }
);  

  }

  deleteSenator(senator){
    this.loading = true
    this.appService.deleteSenator(senator).then((response)=>{
      if(response == 'Error!'){
        this.toastr.error("Error!")
      }
      this.senators = response
      console.log(response)
      this.loading = false
      this.toastr.success("Record Deleted Successfully!")

    })
  }

  sendMail(senator){
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(SendMailComponent, {
      width: '800px',
      backdropClass:'custom-dialog-backdrop-class',
      panelClass:'custom-dialog-panel-class',
      data: {pageValue: senator}
    });

    dialogConfig.data = {
      id:senator.id,
      name: senator.name,
      phoneNumber: senator.phoneNumber,
      email: senator.email,
      state: senator.state,
  };
 
  dialogRef.afterClosed().subscribe(
    data => {
      // console.log("send mail output:", data)
      if(data.body){
        this.appService.sendMail(data).then((response)=>{
          console.log(response)
        },error=>console.log(error))
      }
    }
);  
  }
  
}
