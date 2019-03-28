import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { FormularioComponent } from './formulario/formulario.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ValidateComponent } from './validate/validate.component';
import { ThirdPartyComponent } from './third-party/third-party.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FormularioComponent,
    WelcomeComponent,
    ValidateComponent,
    ThirdPartyComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      { path: 'validate', component: ValidateComponent },
      { path: 'binding', component: BindingComponent },
      { path: 'form', component: FormularioComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'tparty', component: ThirdPartyComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
