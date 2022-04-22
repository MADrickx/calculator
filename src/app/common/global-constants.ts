import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

export class GlobalConstants {
  // public static apiPath = environment.apiUrl;
  // public static apiPath = 'https://localhost/api/';
  public static apiPath = 'https://api-2boost.mydevel.com/api/';

  public static httpOptions(token: string | null = '', type: string | null = null): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
