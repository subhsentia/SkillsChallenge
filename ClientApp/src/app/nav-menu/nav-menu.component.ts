import { Component, Inject } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ThemeChanger } from '../app.module';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  constructor(@Inject(ThemeChanger) private themeChanger: BehaviorSubject<string>) {

  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  changeTheme() {
    this.themeChanger.pipe(take(1)).subscribe(val => {
      const newVal = val === 'blue' ? '' : 'blue';
      this.themeChanger.next(newVal);
    })
  }
}
