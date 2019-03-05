import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styles: []
})
export class ValidateComponent implements OnInit {

  constructor() {
  // console.log(pNombre.className);
}

  ngOnInit() {
  }
  logEd(objMostrar:any){
    console.log(objMostrar);
  }


}
