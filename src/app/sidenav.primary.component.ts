import {Component} from '@angular/core';
import {AppAuthService, AuthService, MeService} from "./service/auth.service";

@Component({
    selector: 'component-sidenav-primary',
    templateUrl: './sidenav.primary.component.html',
    styleUrls: ['./app.component.css'],
    providers: [{ provide: AppAuthService, useClass: AppAuthService}]
})
export class SidenavPrimaryComponent {

  private service: MeService;
  protected email: string;

  constructor(protected auth: AppAuthService){};

  init() : void {
    this.service.getMe().then(email => this.email = email);
  }

  login(user:string,password:string) : void {
    this.auth.login(user,password).then(service => this.service = service).then(any => this.init());
  }
}
