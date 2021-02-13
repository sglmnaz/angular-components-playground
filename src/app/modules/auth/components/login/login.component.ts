import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Input() title :string = 'Login form'
  @Input() action :string = 'Sign-in'

  constructor() { }

  ngOnInit(): void { }

}
