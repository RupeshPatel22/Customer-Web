import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  otp: string;
  canResendOtp: boolean;
  timeLeft: number = 30;
  interval: any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.startTimer();
  }

  onOtpChange(event:string){
    this.otp = event;
  }


  
  verifyOtp(){
    this.loginService.verifyRegistraionOtp(this.otp).subscribe((data) => {
      const res = data;
      if(res){
        this.router.navigate(['/restaurants']);
      }
    })
  }

  resendOtp(){
    
  }

  startTimer (){
    this.canResendOtp = false;
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0)  {
        this.stopTimer();
      }
    },1000);
  }
  
  stopTimer (){
    clearInterval(this.interval);
    this.timeLeft = 30;
    this.canResendOtp = true;
  }

  goToLoginPage(){
    
  }
}
