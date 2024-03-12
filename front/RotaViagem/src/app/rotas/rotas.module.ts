import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { coursesRoutingModule } from './courses-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    coursesRoutingModule,    
    FormsModule,
    ReactiveFormsModule
  ]
})
export class coursesModule { }
