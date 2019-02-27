import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: []
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario = new Employee ('Eduard','Duarte');

}
