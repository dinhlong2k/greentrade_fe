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
    return this.http.post(`${this.baseURL}mstbank/getestpage`, query);
  }

  getMstBankByBankCode(mstbank: any): Observable<any>{
    return this.http.post<Response>(`${this.baseURL}mstbank/getMstbank`,mstbank);
  }

  deleteMstBank(mstbank: any) : Observable<any>{
    return this.http.post(`${this.baseURL}mstbank/delete`,mstbank);
  }

  createMstBank(mstbank: MstBank): Observable<any>{
    return this.http.post(`${this.baseURL}mstbank/insert`, mstbank);
  }

  updateMstBank(mstbank: any): Observable<any>{
    return this.http.post(`${this.baseURL}mstbank/update`, mstbank);
  }
}
