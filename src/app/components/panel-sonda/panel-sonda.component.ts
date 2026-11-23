import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sonda } from '../../models/sonda.model';

@Component({
  selector: 'app-panel-sonda',
  standalone: true,
  imports: [DatePipe, DecimalPipe],
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
