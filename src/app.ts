import {NgModule, Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {MenuModule, MENU_ROUTES} from './menu';
import {MessagesModule, MESSAGES_ROUTES} from './messages';

import {Repository} from './repository';

@Component({
  selector: 'root-cmp',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class RootCmp {}

@NgModule({
  imports: [
    BrowserModule,

    MenuModule,
    MessagesModule,

    RouterModule.forRoot([
      ...MENU_ROUTES,
      { path: 'messages', children: MESSAGES_ROUTES },
      { path: 'settings', loadChildren: './settings/index#SettingsModule' }
    ])
  ],

  providers: [Repository],
  bootstrap: [RootCmp],
  declarations: [RootCmp]
})
export class AppModule {}