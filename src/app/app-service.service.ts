import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resolve } from 'url';


@Injectable({
  providedIn: "root"
})
export class AppServiceService {
  config = {};
  header = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };

  baseURL ='https://infinite-coast-57393.herokuapp.com'
  constructor(private http: HttpClient) {}

  public getSenators() {
    return new Promise((resolve,reject)=>{
      this.http.get(`${this.baseURL}/senators`).subscribe(
        response => {
          resolve(response)
        },
        error => {
          console.log(error);
          reject(error)
        }
      );
    })
  }

  public getStates() {
    return new Promise((resolve,reject)=>{
      this.http.get(`${this.baseURL}/states`).subscribe(
        response => {
          resolve(response)
        },
        error => {
          console.log(error);
          reject(error)
        }
      );
    })
  }


  public addSenators(data) {
    console.log(data)
    return new Promise((resolve,reject)=>{
      this.http.post(`${this.baseURL}/senators`,data,this.header)
      .subscribe(
        response => {
          console.log(response)
          this.getSenators().then(response=>{
            resolve(response);
          })
        },
        error => {
          console.log(error)
          reject(error)
        }
      );
    }).catch(ex=>{
      console.log(ex)
    })
  }


  public editSenator(data) {
    console.log(data)
    return new Promise((resolve,reject)=>{
      this.http.post(`${this.baseURL}/senators`,data,this.header)
      .subscribe(
        response => {
          console.log(response)
          resolve(response);
        },
        error => {
          console.log(error)
          reject(error)
        }
      );
    }).catch(ex=>{
      console.log(ex)
    })
  }

  public deleteSenator(data) {
    console.log(data)
    return new Promise((resolve,reject)=>{
      this.http.delete(`${this.baseURL}/senators/${data.id}`,data,)
      .subscribe(
        response => {
          console.log(response)
          resolve(response);
        },
        error => {
          console.log(error)
          reject(error)
        }
      );
    }).catch(ex=>{
      console.log(ex)
    })
  }

  public sendMail(data) {
    console.log(data)
    return new Promise((resolve,reject)=>{
      this.http.post(`${this.baseURL}/sendmail`,data,)
      .subscribe(
        response => {
          console.log(response)
          resolve(response);
        },
        error => {
          console.log(error)
          reject(error)
        }
      );
    }).catch(ex=>{
      console.log(ex)
    })
  }
}
