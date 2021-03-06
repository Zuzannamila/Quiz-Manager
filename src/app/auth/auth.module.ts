import { ButtonComponent } from './shared/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LongButtonComponent } from './shared/long-button/long-button.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ButtonComponent,
    LongButtonComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatRadioModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }