import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

export function GetThemeChanger() {
  return new BehaviorSubject<string>('');
}

export const ThemeChanger = new InjectionToken<BehaviorSubject<string>>('changes theme');

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      /*{ path: '', component: HomeComponent, pathMatch: 'full' },*/
      { path: 'people', loadComponent: () => import('./people/people.component').then(m => m.PeopleComponent) },
      { path: 'things', loadComponent: () => import('./things/things.component').then(m => m.ThingsComponent) },
      { path: '', redirectTo: 'people', pathMatch: 'full' },
    ]),
    StoreModule.forRoot({}, {})
  ],
  providers: [{ provide: ThemeChanger, useFactory: GetThemeChanger }],
  bootstrap: [AppComponent]
})
export class AppModule { }
