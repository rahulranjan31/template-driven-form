import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tempelate Driven Form';
  myName= "Rahul Ranjan";
  onSubmit(value: any) {
    
    console.log('It works!');
    console.log(value);

  }
}
