import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Parte } from './parte';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParteService {

  private url: string="http://localhost:8081/api/partes";

  constructor(private http:HttpClient) { }

  // obtener estudiantes  
  getAll():Observable<Parte[]>{
    return this.http.get<Parte[]>(this.url);
  }

  // Crear estuadiante
  create(parte:Parte):Observable<Parte>{

    return this.http.post<Parte>(this.url, parte);
  }

  // obtener un estudiante

  get(id:number):Observable<Parte>{
    return this.http.get<Parte>(this.url+'/'+id);
  }

  // actualizar un estudiante 
  update(parte:Parte):Observable<Parte>{
    return this.http.put<Parte>(this.url, parte);
  }

  // Eliminar un estudiante
  delete(id:number):Observable<Parte>{
    return this.http.delete<Parte>(this.url+'/'+id);
  }

}
