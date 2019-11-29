import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatProgressSpinnerModule 
} from "@angular/material";
// import { IgxCardModule } from 'igniteui-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AddSenatorComponent } from './components/add-senator/add-senator.component';
import { EditSenatorComponent } from './components/edit-senator/edit-senator.component';
import { SendMailComponent } from './components/send-mail/send-mail.component';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  entryComponents:[AddSenatorComponent,EditSenatorComponent,SendMailComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    AddSenatorComponent,
    EditSenatorComponent,
    SendMailComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule, 
    Ng2SearchPipeModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
