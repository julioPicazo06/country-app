import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',

  templateUrl: './loadingSpinner.component.html',
  styleUrl: './loadingSpinner.component.css',
})
export class LoadingSpinnerComponent {
  @Input()
  public searchTitle?: string ;

  get title (): string {
    return `${this.searchTitle}` || 'Buscando...';
  }

}
