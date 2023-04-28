import { CommonModule } from '@angular/common';
import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Directive({
  selector: 'input[appQuickSearch]',
  standalone: true
})
export class QuickSearchDirective implements OnInit, OnDestroy {
  @Output() valueUpdated = new EventEmitter<string>();
  private changeObs!: Observable<any>;
  private subscription!: Subscription;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (!this.el.nativeElement.getAttribute('placeholder')) {
      this.renderer.setProperty(this.el.nativeElement, 'placeholder', 'Quick Search');
    }
    this.changeObs = fromEvent<Event>(this.el.nativeElement, 'input').pipe(
      map((e: Event) => (<HTMLInputElement>e.target).value),
      debounceTime(200)
    );

    this.subscription = this.changeObs.subscribe(t => this.valueUpdated.emit(t));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
