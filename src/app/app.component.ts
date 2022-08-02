import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bootcamp';
  count = 100;

  increment(){
    this.count = this.count + 1;
  }

  decrement(){
    this.count = this.count - 1;
  }

}
