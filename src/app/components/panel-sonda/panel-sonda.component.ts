import {
  DatePipe,
  DecimalPipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PulsoAlertaDirective } from '../../directives/pulso-alerta.directive';
import { Sonda } from '../../models/sonda.model';
import { RetardoSenalPipe } from '../../pipes/retardo-senal.pipe';

@Component({
  selector: 'app-panel-sonda',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    NgClass,
    NgStyle,
    PulsoAlertaDirective,
    RetardoSenalPipe,
    TitleCasePipe,
    UpperCasePipe,
  ],
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
