import { Component } from '@angular/core';
import { CalculateRouteService } from './calculate-route.service';

@Component({
  selector: 'app-calculate-route',
  templateUrl: './calculate-route.component.html' 
})
export class CalculateRouteComponent {
  origem: string;
  destino: string;
  resultado: string;

  constructor(private calculateRouteService: CalculateRouteService) { }

  calcularRota(): void {
    this.calculateRouteService.calcularRota(this.origem, this.destino)
      .subscribe(resultado => this.resultado = resultado);
  }
}