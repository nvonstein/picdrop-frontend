// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule, RequestOptions, XHRBackend} from "@angular/http";

// 3th party imports
import {InterceptorService} from "ng2-interceptors";

// Material design module
import { MaterialModule } from './material.module';

// Components
import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ViewerHeaderComponent } from './viewer/viewer.header.component';
import { SidenavPrimaryComponent } from './sidenav.primary.component';
import {ViewerToolbarComponent} from "./viewer/viewer.toolbar.component";
import {FormsModule} from "@angular/forms";

// Services

// Interceptors
import {TOKEN_HEADER_ITC, TokenHeaderInterceptor} from "./interceptor/auth.interceptor";


export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, tokenIcp: TokenHeaderInterceptor){
  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(tokenIcp);
  return service;
}


@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    ViewerHeaderComponent,
    SidenavPrimaryComponent,
    ViewerToolbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: TokenHeaderInterceptor, useValue: TOKEN_HEADER_ITC },
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions,TokenHeaderInterceptor]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
