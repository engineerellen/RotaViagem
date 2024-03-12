import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
  
const routes: Routes = [
  { path: 'courses', redirectTo: 'courses/index', pathMatch: 'full'},
  { path: 'courses/index', component: IndexComponent },
  { path: 'courses/:Id/view', component: ViewComponent }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class coursesRoutingModule { }