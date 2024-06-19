import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',

  templateUrl: './loadingSpinner.component.html',
  styleUrl: './loadingSpinner.component.sass',
})
export class LoadingSpinnerComponent {
  @Input()
  public searchTitle?: string ;

  get title (): string {
    return `Buscando ${this.searchTitle}` || 'Buscando...';
  }

}
