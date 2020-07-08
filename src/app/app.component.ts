import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trinusa';

  

  // add navItem in navbar
  navItem= [['/', 'Home'],
            ['#two', 'Product'] ,
            ['/service', 'Service' ],
            ['/contact', 'Contact']]
}
