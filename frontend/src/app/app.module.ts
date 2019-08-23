import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './errors/http-error.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material/tabs';
import { HttpServiceComponent } from './services/http.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  bootstrap: [AppComponent],

  /* HttpErrorInterceptor class - Global error handling  */
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
        /*  no need to declare service in providers if provide in root in HttpService injectable
            but good for semantinc convention, and compodoc documentation*/
    HttpServiceComponent
  ]

})

export class AppModule { }
