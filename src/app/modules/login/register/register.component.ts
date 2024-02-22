import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn, AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required, Validators.pattern('[6-9][0-9]{9}')]),
    email: new FormControl('',[Validators.required, this.customEmailValidator()]),
    userCountryCode: new FormControl({value: '+91', disabled: true},[Validators.required])
  })
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

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

  sendOtp(){
    const fullName = this.registerForm.get('fullName').value;
    const phone =  this.registerForm.get('phone').value;
    const email = this.registerForm.get('email').value;
    this.loginService.sendRegistrationOtp(fullName,phone,email).subscribe((res) => {
      console.log('Value Sent',res)
    })
  }
}
