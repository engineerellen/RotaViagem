import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { CalculateRouteComponent } from './calculate/calculate-route.component';
  
const routes: Routes = [
  { path: 'rotas', redirectTo: 'rotas/index', pathMatch: 'full'},
  { path: 'rotas/index', component: IndexComponent },
  { path: 'rotas/:Id/view', component: ViewComponent },
  { path: 'rotas/:Id/edit', component: EditComponent },
  { path: 'rotas/create', component: CreateComponent },
  { path: 'rotas/calculate', component: CalculateRouteComponent }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class rotasRoutingModule { }