import {InterceptorService} from "ng2-interceptors";
import {RequestMethod} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by nvonstein on 24.07.17.
 */

@Injectable()
export class RestService {
  constructor(private http: InterceptorService) {
  };

  getMe(): Promise<string> {
    return this.http.get("/picdrop/app/users/me").toPromise().then(resp => resp.json().email as string);
  }
}
