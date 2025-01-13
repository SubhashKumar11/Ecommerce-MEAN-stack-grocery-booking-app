import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
export interface User {
  Username: string;
  password: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserLoginDataService {
  //private user: { userName: string } | null = null;
  private isAuthenticated: boolean = false;
  private postdatatodburl = 'http://localhost:3002/signup';
  private signindatatodburl = 'http://localhost:3002/signin';
  private logoutUrl = 'http://localhost:3002/logout';
  private profileUrl = 'http://localhost:3002/profile';
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string | null = null;
  constructor(private http: HttpClient) {}
  signUpUserToSaveInDatabase(signupdata: User): Observable<any> {
    return this.http.post<any>(this.postdatatodburl, signupdata);
  }
  signInUser(signindata: User): Observable<any> {
    this.isAuthenticated = true;
    return this.http.post<any>(this.signindatatodburl, signindata);
  }
  getProfileOfLoginUser(): Observable<any> {
    let headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };
    return this.http.get<any>(this.profileUrl, { headers: headers });
  }
  logoutUser(): Observable<any> {
    this.isAuthenticated = false;
    this.token = null;
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.loggedIn.next(false);
    return this.http.post(this.logoutUrl, {});
  }
  expireToken() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodeToken: any = jwtDecode(token);
      const expiryTime = decodeToken.exp * 1000;
      const currentTime = Date.now();
      if (currentTime >= expiryTime) {
        this.logoutUser();
      }
    }
  }
}

/**
 * import { Injectable } from '@angular/core'; import { HttpClient } from
'@angular/common/http'; import { BehaviorSubject, Observable } from 'rxjs'; import {
jwtDecode } from "jwt-decode"; export interface User { Username: string; password:
string; email: string; } @Injectable({ providedIn: 'root', }) export class
UserLoginDataService { //private user: { userName: string } | null = null; private
isAuthenticated: boolean = false; private postdatatodburl = 'http://localhost:3002/signup';
private signindatatodburl = 'http://localhost:3002/signin'; private logoutUrl =
'http://localhost:3002/logout' private profileUrl = 'http://localhost:3002/profile'; private
loggedIn = new BehaviorSubject<boolean>(false); private token: string | null = null;
constructor(private http: HttpClient) { // this.checktoken(); }
12/28/24, 4:53 PM Gmail - New message from all service data
https://mail.google.com/mail/u/0/?ik=0fcb1e0789&view =pt&search=all&permthid=thread-f:1819666515313717234&simpl=msg-f:1819666515313717… 2/3
signUpUserToSaveInDatabase(signupdata: User): Observable<any>{ return
this.http.post<any>(this.postdatatodburl, signupdata); } signInUser(signindata: User):
Observable<any> { this.isAuthenticated = true; return this.http.post<any>(this.
signindatatodburl,signindata) } getProfileOfLoginUser(): Observable<any>{ let headers = {
'Authorization' : "Bearer " + localStorage.getItem('token') } return this.http.get<any>(this.
profileUrl, {headers:headers}); } logoutUser():Observable<any> { this.isAuthenticated =
false; this.token = null; localStorage.removeItem('token'); sessionStorage.removeItem('
token'); this.loggedIn.next(false) return this.http.post(this.logoutUrl, {}); } expireToken() {
const token = localStorage.getItem('token'); if (token) { const decodeToken: any =
jwtDecode(token); const expiryTime = decodeToken.exp * 1000; const currentTime =
Date.now(); if (currentTime >= expiryTime) { this.logoutUser(); } } } }
 */
