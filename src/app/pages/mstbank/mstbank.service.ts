import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { MstBank } from './mstbank';
@Injectable({
  providedIn: 'root'
})
export class MstbankService {

  httpOptions = {

  };

  private baseURL = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  setHeader(header : any): void {
    this.httpOptions = header
  }

  getMstBankList(query: {}): Observable<any>{
    return this.http.post(`${this.baseURL}mstbank/getetst`, query);
  }

  getMstBankByBankCode(query: {}): Observable<any>{
    return this.http.post(`${this.baseURL}mstbank/getMstbank`,query);
  }

  deleteMstBank(mstbank: MstBank) : Observable<any>{
    return this.http.post(`${this.baseURL}mstbank/delete`,mstbank);
  }
}
