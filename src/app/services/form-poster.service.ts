import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class FormPosterService {

  constructor(private http: HttpClient) {

  }
  postEmployeForm(employe: Employee){
    console.log('posting Employe: ', employe)
  }
}
