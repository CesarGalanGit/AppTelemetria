import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retardoSenal',
  standalone: true,
})
export class RetardoSenalPipe implements PipeTransform {
  transform(distanciaKm: number): string {
    const segundos = distanciaKm / 300000;

    if (segundos < 60) {
      return `${this.formatearNumero(segundos)} seg`;
    }

    return `${this.formatearNumero(segundos / 60)} min`;
  }

  private formatearNumero(valor: number): number {
    return Number(valor.toFixed(1));
  }
}
