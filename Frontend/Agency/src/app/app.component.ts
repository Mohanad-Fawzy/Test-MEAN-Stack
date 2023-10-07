import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bee soft';
  red: String = 'color:red';
  isGay: String = 'Lets see if you are gay';
  gayChecker() {
    let x: number = Math.floor(Math.random() * (100 - 50) + 50);
    if (x % 3 == 0) {
      this.isGay = 'you are not gay';
    } else {
      this.isGay = 'you are gay';
    }
  }
  sorryT: String = '';
  sorry(val: String) {
    this.sorryT = val;
  }
}
