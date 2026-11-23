import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appPulsoAlerta]',
  standalone: true,
})
export class PulsoAlertaDirective implements OnChanges {
  @Input() appPulsoAlerta = false;

  @HostBinding('style.border')
  protected border = '';

  @HostBinding('style.box-shadow')
  protected boxShadow = '';

  @HostBinding('style.cursor')
  protected cursor = '';

  ngOnChanges(): void {
    if (this.appPulsoAlerta) {
      this.border = '2px solid #ff1f1f';
      this.boxShadow = '0 0 0.75rem rgb(255 31 31 / 45%)';
      this.cursor = 'not-allowed';
      return;
    }

    this.border = '';
    this.boxShadow = '';
    this.cursor = '';
  }
}
