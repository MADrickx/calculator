import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {GlobalConstants} from '../common/global-constants';
import {map} from 'rxjs/operators';
import { Product, ProductAdapter } from '../models/Product.model';
import { Settings, SettingsAdapter } from '../models/Settings.model';
import { FormGroup } from '@angular/forms';

@Injectable()
export class SettingsService {
  private settings: Settings[] = [];
  clientSubject = new Subject<Settings[]>();
  apiPath = GlobalConstants.apiPath;
  httpOptions = GlobalConstants.httpOptions();
  httpOptionsImport = GlobalConstants.httpOptions();

  constructor(private http: HttpClient,private adapter: SettingsAdapter) {
    const token = sessionStorage.getItem('token');
    this.httpOptions = GlobalConstants.httpOptions(token);
    this.httpOptionsImport = GlobalConstants.httpOptions(token, 'application/json');
  }

  getSupportsAndPrices(): any {
    return this.http.get(
      this.apiPath + 'support/settings/getSupports',
        this.httpOptions
    )
  }

  saveAll(form1:any, form2:any, form3:any){
    const formData1 = form1;
    const formData2 = form2;
    const formData3 = form3.value;
    const finalForm = {
      'inkPrice' : formData1,
      'optionsPrices' : formData2,
      'supports' : formData3
    }
    if(formData1 !== null && formData1 !== null && formData1 !== null){
      return this.http.post(
        this.apiPath + 'support/settings/save',
        finalForm,
        this.httpOptions
      );
    } else {
      return
    }
  }
}
