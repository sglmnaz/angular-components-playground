import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    email: null,
    newPassword: null,
    confirmNewPassword: null,
  });

  service: ResetPasswordService = new ResetPasswordService()
  hideNewPassword = true
  hideConfirmNewPassword = true

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.form);
  }

  onSubmit(data: any): any {
    this.service.submitForm(data);
    this.form.reset();
  }
}
