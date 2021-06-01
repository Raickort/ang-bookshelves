import { Component, VERSION } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAEFi3Gu7uhMX4dQHUCya5AWKi1NgFGn5E',
      authDomain: 'bookshelves-73523.firebaseapp.com',
      projectId: 'bookshelves-73523',
      storageBucket: 'bookshelves-73523.appspot.com',
      messagingSenderId: '1067779732106',
      appId: '1:1067779732106:web:782fdfcba11a7aed413373'
    };
    // Initialize Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }
}
