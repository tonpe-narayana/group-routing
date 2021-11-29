import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {List1Component} from './admin/list1/list1.component';
import { Login1Component } from './admin/login1/login1.component';
const routes: Routes = [
  {path:'list1',component:List1Component},
  {path:'login1',component:Login1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
