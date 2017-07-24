// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from "@angular/http";

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
import {AppAuthService, AuthService} from "./service/auth.service";



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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
