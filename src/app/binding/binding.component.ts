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

  languages = ["ESP", "ENG", "POT"]
  usuario = new Employee ('Eduard','Duarte',"",false,"TC","ENG");

  firtsCapitanFunc(inValue: string){
    if (inValue.length > 0){
      this.usuario.secondSurname = inValue.charAt(0).toUpperCase() + inValue.slice(1);
    }
  }
}
