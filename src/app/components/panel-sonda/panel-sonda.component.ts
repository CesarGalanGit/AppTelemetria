import { DatePipe, DecimalPipe, NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PulsoAlertaDirective } from '../../directives/pulso-alerta.directive';
import { Sonda } from '../../models/sonda.model';

@Component({
  selector: 'app-panel-sonda',
  standalone: true,
  imports: [DatePipe, DecimalPipe, NgClass, NgStyle, PulsoAlertaDirective],
  templateUrl: './panel-sonda.component.html',
  styleUrl: './panel-sonda.component.css',
})
export class PanelSondaComponent {
  @Input({ required: true }) sonda!: Sonda;
  @Output() pulsoRecarga = new EventEmitter<string>();

  enviarPulsoRecarga(): void {
    this.pulsoRecarga.emit(this.sonda.id);
  }
}
