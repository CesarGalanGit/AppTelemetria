import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SONDAS } from '../../data/sondas.data';
import { Sonda } from '../../models/sonda.model';
import { PanelSondaComponent } from '../panel-sonda/panel-sonda.component';

@Component({
  selector: 'app-centro-control',
  standalone: true,
  imports: [CommonModule, PanelSondaComponent],
  templateUrl: './centro-control.component.html',
  styleUrl: './centro-control.component.css',
})
export class CentroControlComponent {
  protected sondas: Sonda[] = SONDAS.map((sonda) => ({ ...sonda }));
  protected soloAlertas = false;

  protected get sondasConectadas(): number {
    return this.sondas.filter((sonda) => sonda.enLinea).length;
  }

  protected get sondasVisibles(): Sonda[] {
    if (!this.soloAlertas) {
      return this.sondas;
    }

    return this.sondas.filter(
      (sonda) => sonda.bateria < 20 || !sonda.enLinea,
    );
  }

  protected alternarFiltroAlertas(): void {
    this.soloAlertas = !this.soloAlertas;
  }

  protected recargarSonda(id: string): void {
    const sonda = this.sondas.find((elemento) => elemento.id === id);

    if (!sonda) {
      return;
    }

    sonda.bateria = Math.min(sonda.bateria + 25, 100);
    sonda.enLinea = true;
  }
}
