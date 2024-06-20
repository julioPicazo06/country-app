import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import {
  debounceTime,
  Subject,
} from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit {

  private debuncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public onDebounce : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
      this.debuncer
      .pipe(
        debounceTime(300)
      )
      .subscribe((value: string) => {
        this.onDebounce.emit(value);
      });
  }

  public emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTErm: string){
   this.debuncer.next(searchTErm);
  }



}
