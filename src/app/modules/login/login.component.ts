import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm = new FormGroup({
    fullName: new FormControl('',Validators.required),
    phone: new FormControl('',[Validators.required, Validators.pattern('[6-9][0-9]{9}')]),
    email: new FormControl('',[Validators.required, this.customEmailValidator()]),
    userCountryCode: new FormControl({disabled: true, value: '+91'}, [Validators.required])
  })

  constructor(private loginService: LoginService) { }
  
  ngOnInit(): void {
  }
  /**
   * Method that checks validity of email
   * @returns 
   */
   customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): {
      [key: string]: any
    } | null => {
      const val = control.value;
      if (!val.match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")) {
        return { email: true }
      }
    };
  }


  
  onSubmit() {
    // const fullName = this.registerForm.get('fullName').value;
    const phone = this.registerForm.get('phone').value;
    // const email = this.registerForm.get('email').value;
    this.loginService.sendLoginOtp().subscribe((res) => {
      console.log('value Sent',res)
    })
  }

}
