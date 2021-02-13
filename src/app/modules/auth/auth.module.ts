import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({

  declarations: [
    SignupComponent,
    LoginComponent,
    ResetPasswordComponent
  ],

  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  exports: [
  SignupComponent, 
  LoginComponent, 
  ResetPasswordComponent]

})

export class AuthModule { }
