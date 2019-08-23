import { Component } from '@angular/core';
import { HttpServiceComponent } from './services/http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  title = 'DisplayApp';

  constructor(private httpService: HttpServiceComponent) {}

  hus1Observable$ = this.httpService.getHus1();
  hus2Observable$ = this.httpService.getHus2();


}  // end class
