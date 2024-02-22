import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as apiUrls from '../../core/apiUrls';
import { map, Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'Access-Control-Allow-Origin',
//   })
// };

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  fullName: string;
  phone: string;
  email: string;
  
  
  constructor(private httpClient: HttpClient) { }

  sendRegistrationOtp(fullName:string,phone:string,email:string) : Observable<any> {
    this.fullName = fullName;
    this.phone = phone;
    this.email = email;
    const data = {
      full_name: this.fullName,
      phone: this.phone,
      email: this.email
    }

    return this.httpClient.post(apiUrls.postOtpRegistrationEndPoint,data).pipe(
      map((response) => {
        return response;
      })
    )
  }

  verifyRegistraionOtp(phoneOtp:string) : Observable<any>{
    const data = {
      phone: this.phone,
      otp: phoneOtp
    }

    return this.httpClient.post(apiUrls.postVerifyOtpRegistrationEndPoint,data).pipe(
      map((response) => {
        // localStorage.setItem('token',response['result']['token'])
        return response;
      })
    )
  }

  sendLoginOtp() : Observable<any>{
    const data={
      phone: this.phone,
    }
    return this.httpClient.post(apiUrls.postOtpLoginEndPoint,data).pipe(
      map((response) => {
        return response;
      })
    )
  } 

  verifyLoginOtp(phoneOtp: string) : Observable<any>{
    const data = {
      phone: this.phone,
      otp: phoneOtp
    }
    return this.httpClient.post(apiUrls.postVerifyOtpLoginEndPoint,data).pipe(
      map((response) => {
        return response;
      })
    )
  }

  getCustomerId(data: any) : Observable<any>{
    return this.httpClient.get(apiUrls.getCustomerIdEndPoint,data).pipe(
      map((response) => {
        return response;
      })
    )
  }
}
