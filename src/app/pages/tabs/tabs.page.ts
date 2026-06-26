import { Component, signal, viewChild } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonIcon,
  IonTabButton,
} from '@ionic/angular/standalone';

import { TabItems } from './tab-item';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [IonTabButton, IonIcon, IonTabBar, IonTabs],
})
export class TabsPage {
  readonly tabs = viewChild.required(IonTabs);
  tabItems = TabItems;
  selectedTab = signal('dashboard');

  onChange() {
    this.selectedTab.set(this.tabs().getSelected() ?? 'dashboard');
  }
}
