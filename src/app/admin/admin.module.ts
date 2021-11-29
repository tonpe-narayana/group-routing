import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { Login1Component } from './login1/login1.component';
import { List1Component } from './list1/list1.component';


@NgModule({
  declarations: [
    Login1Component,
    List1Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
