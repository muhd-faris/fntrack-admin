import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonRow,
  IonCol,
  IonCard,
  IonAvatar,
  IonIcon,
  IonButton,
  IonSearchbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  imports: [
    IonSearchbar,
    IonButton,
    IonIcon,
    IonAvatar,
    IonCol,
    IonRow,
    IonContent,
    IonCard,
  ],
})
export class UsersPage implements OnInit {
  ngOnInit() {}
}
