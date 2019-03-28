import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-party',
  templateUrl: './third-party.component.html',
  styles: []
})
export class ThirdPartyComponent implements OnInit {

  fecha = new Date();
  fechaDos= new Date('Feb 14 1986');
  minDate= new Date('Mar 25 2019');
  constructor() { }

  ngOnInit() {
  }

}
