
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { rotasModule } from './rotas/rotas.module';
import { CalculateRouteComponent } from './rotas/calculate/calculate-route.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    rotasModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }