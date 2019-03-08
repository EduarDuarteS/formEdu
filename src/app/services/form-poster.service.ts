import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
// import 'rxjs/Rx'


// import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormPosterService {

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || {};
  }

  private handleError(error: any) {
    console.error('post error: ', error);
    return Observable.throw(error.statusText);
  }

  postEmployeForm(employe: Employee): Observable<any> {
    console.log('posting Employe: ', employe)

    let body = JSON.stringify(employe);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers }


    return this.http.post('http://localhost:3100/postemployee', body, options)
      .pipe(map(this.extractData),
        catchError(this.handleError)
      )
  }


}
