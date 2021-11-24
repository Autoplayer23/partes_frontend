import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import{Routes, RouterModule} from '@angular/router'

import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { PartesComponent } from './partes/partes.component';
import { FormParteComponent } from './partes/form-parte.component';

const routes: Routes=[
  {path:'',redirectTo:'/partes', pathMatch:'full'},
  {path:'partes', component: PartesComponent },
  {path:'partes/form', component:FormParteComponent },
  {path:'partes/form/:id', component:FormParteComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    PartesComponent,
    FormParteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
