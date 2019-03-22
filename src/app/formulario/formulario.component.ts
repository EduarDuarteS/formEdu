import { Component, OnInit } from '@angular/core';
import { FormPosterService } from '../services/form-poster.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  languages = [];
  isInvalidLenguage = false;
  validLenguage(leng: string) {
    if (leng === 'default') {
      this.isInvalidLenguage = true;
    } else {
      this.isInvalidLenguage = false;
    }
  }

  constructor(private formPosterS: FormPosterService) {
    this.formPosterS.getLanguages().subscribe(
      allData => this.languages = allData.data.languages,
      error => console.log('Error: ', error)
    )
  }

  funcSubmitForm(form: NgForm) {
    if (this.isInvalidLenguage)
      return;
    this.formPosterS.postEmployeForm(form.value)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err)
      );
    // console.log(form.value);
  }

  ngOnInit() {
  }


}
