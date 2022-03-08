import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

export class GlobalConstants {
  public static apiPath = environment.apiUrl;
  // public static apiPath = 'http://localhost/api/';
  // public static apiPath = 'https://cabai.cloud/api/';

  public static httpOptions(token: string | null = '', type: string | null = null): any {
    if (type !== null) {
      if (token !== '') {
        return {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token
          }),
          responseType: type
        };
      }
      return {
        responseType: type
      };
    }
    if (token !== '') {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        })
      };
    }
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
