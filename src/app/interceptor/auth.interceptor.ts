/**
 * Created by nvonstein on 24.07.17.
 */
import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';
import {Injectable, Input} from "@angular/core";

@Injectable()
export class TokenHeaderInterceptor implements Interceptor {

  protected _token:string;

  setToken(token:string) {this._token = token;};
  // getToken() : string {return this._token};

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    request.options.headers.set("Authorization","Bearer " + this._token)
    return request;
  }

  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    return response;
  }
}

export const TOKEN_HEADER_ITC : TokenHeaderInterceptor = new TokenHeaderInterceptor();
