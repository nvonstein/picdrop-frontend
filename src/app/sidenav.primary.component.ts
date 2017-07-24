import {Component, Inject} from '@angular/core';
import {BasicAuthService, CredentialAuthService} from "./service/auth.service";
import {RestService} from "./service/rest.service";

@Component({
    selector: 'component-sidenav-primary',
    templateUrl: './sidenav.primary.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RestService, { provide:'BasicAuthService', useClass: BasicAuthService}]
})
export class SidenavPrimaryComponent {

  protected email: string;

  constructor(@Inject('BasicAuthService') protected auth: CredentialAuthService, private service: RestService){};

  init() : void {
    this.service.getMe().then(email => this.email = email);
  }

  login(user:string,password:string) : void {
    this.auth
      .withUser(user)
      .withPassword(password)
      .login()
      .then(any => this.init());
  }
}
