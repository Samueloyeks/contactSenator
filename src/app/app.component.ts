import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'contactsenator';


  constructor(public appService:AppServiceService){

  }

  ngOnInit() {
    // this.appService.getSenators()
  }
}


