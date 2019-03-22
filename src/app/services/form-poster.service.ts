import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
// import 'rxjs/Rx'


// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FormPosterService {

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    console.log('res: ' + JSON.stringify(res));
    let body = res;
    return body || {};
  }
  private extratLanguages(res: Response) {
    console.log('res: ' + JSON.stringify(res));
    let body = res;
    return body || {};
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getLanguages(): Observable<any> {
    return this.http.get('http://localhost:3100/getLanguages')
      .pipe(
        map(this.extratLanguages),
        catchError(this.handleError),
        delay(5000)
      )
  }

  postEmployeForm(employe: Employee): Observable<any> {
    console.log('posting Employe: ', employe)

    let body = JSON.stringify(employe);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers }


    return this.http.post('http://localhost:3100/postemployee', body, options)
      .pipe(map(this.extractData),
        // Trae todo el error
        catchError(e => throwError(e))

        // Error en un funcion de flecha
        // catchError((err: HttpErrorResponse) => {
        //   console.error('post error: ', err);
        //   return throwError(err);
        // })

        // Error con una funcion
        // catchError(this.handleError)
      )
  }


}
