import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-custom-main-header',
  templateUrl: './custom-main-header.component.html',
  styleUrls: ['./custom-main-header.component.scss'],
  imports: [IonHeader, IonToolbar, IonIcon, IonButton],
})
export class CustomMainHeaderComponent {
  private router = inject(Router);
  headerTitle = input.required<string>();
  backNavRoute = input<string>('/');

  onBackButtonClicked() {
    this.router.navigateByUrl(this.backNavRoute(), { replaceUrl: true });
  }
}
