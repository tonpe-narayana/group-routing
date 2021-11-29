import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List1Component } from './list1/list1.component'
import { Login1Component } from './login1/login1.component';
const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'list1', component: List1Component },
      { path: 'login1', component: Login1Component }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
