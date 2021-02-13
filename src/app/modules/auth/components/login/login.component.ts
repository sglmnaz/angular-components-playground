import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Input() title :string = 'Login form'
  @Input() action :string = 'Sign-in'


  form : FormGroup = this.formBuilder.group({
    username: null,
    password: null,
    date: new Date(),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit(data:any): any {
    console.log(data);
    this.form.reset();
  }

}
