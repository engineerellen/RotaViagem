import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { rotasRoutingModule } from './rotas-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    rotasRoutingModule,    
    FormsModule,
    ReactiveFormsModule
  ]
})
export class rotasModule { }
