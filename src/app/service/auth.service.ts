/**
 * Created by nvonstein on 24.07.17.
 */
import { Injectable } from '@angular/core';
import {Http, Request, Headers, RequestMethod} from "@angular/http";


import 'rxjs/add/operator/toPromise';
import {TokenHeaderInterceptor} from "../interceptor/auth.interceptor";


export interface AuthService{
  login(): Promise<Request>;
  logout(): void;
}

@Injectable()
export abstract class CredentialAuthService implements AuthService {

  constructor(protected http: Http, protected tokenItc: TokenHeaderInterceptor) {}

  protected user:string;
  protected password:string;

  abstract login(): Promise<Request>;
  abstract logout(): void;

  withUser(user:string) : CredentialAuthService {
    this.user = user;
    return this;
  }

  withPassword(password:string) : CredentialAuthService {
    this.password = password;
    return this;
  }
}

@Injectable()
export class BasicAuthService extends CredentialAuthService {

  private endpoint = "/picdrop/app/login";

  login(): Promise<Request> {
    let header: Headers = new Headers();

    header.append("Authorization", "Basic " + btoa(this.user + ":" + this.password));

    return this.http.request(new Request({
      url: this.endpoint,
      method: RequestMethod.Post,
      headers: header
    })).toPromise().then(response => this.tokenItc.setToken(response.text())).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  logout(): void {
    this.tokenItc.setToken("");
  }
}
