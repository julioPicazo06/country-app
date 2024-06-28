import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import {
  debounceTime,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debuncer: Subject<string> = new Subject<string>();

  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public intialValue: string = '';

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  this.debouncerSuscription =  this.debuncer
      .pipe(debounceTime(300))
      .subscribe((value: string) => {
      this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
   this.debouncerSuscription?.unsubscribe();
  }
  public emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTErm: string) {
    this.debuncer.next(searchTErm);
  }
}
