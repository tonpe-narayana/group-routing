import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserrRoutingModule } from './userr-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserrRoutingModule
  ]
})
export class UserrModule { }
