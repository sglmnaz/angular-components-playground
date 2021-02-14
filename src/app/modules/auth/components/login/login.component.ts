import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    username: null,
    password: null,
  });

  service: LoginService = new LoginService()
  hidePassword = true

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void { }

  onSubmit(data: any): any {
    this.service.submitForm(data);
    this.form.reset();
  }

}
