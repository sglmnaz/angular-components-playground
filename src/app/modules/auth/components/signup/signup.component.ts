import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    email: null,
    username: null,
    password: null,
    confirmPassword: null,
  });

  service: LoginService = new LoginService()
  hidePassword = true
  hideConfirmPassword = true

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void { }

  onSubmit(data: any): any {
    this.service.submitForm(data);
    this.form.reset();
  }


}
