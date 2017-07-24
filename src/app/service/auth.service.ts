/**
 * Created by nvonstein on 24.07.17.
 */
import { Injectable } from '@angular/core';
import {Http, Request, Headers, RequestMethod} from "@angular/http";


import 'rxjs/add/operator/toPromise';



export interface AuthService {
  login(user: string, password: string): Promise<MeService>;
  logout(): boolean;
}

export class MeService {

  constructor(private token:string, private http: Http){};

  getMe(): Promise<string> {
    let header: Headers = new Headers();

    header.append("Authorization","Bearer " + this.token);

    return this.http.request(new Request({
      url: "/picdrop/app/users/me",
      method: RequestMethod.Get,
      headers: header
    })).toPromise().then(resp => resp.json().email as string);
  }
}

@Injectable()
export class AppAuthService implements AuthService {

  constructor(private http: Http) {}

  private endpoint = "/picdrop/app/login";

  protected buildService(token:string) {
    return new MeService(token, this.http);
  }

  login(user: string, password: string): Promise<MeService> {
    let header: Headers = new Headers();

    header.append("Authorization", "Basic " + btoa(user + ":" + password));

    return this.http.request(new Request({
      url: this.endpoint,
      method: RequestMethod.Post,
      headers: header
    })).toPromise().then(response => this.buildService(response.text())).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  logout(): boolean {
    throw new Error("Method not implemented.");
  }
}
