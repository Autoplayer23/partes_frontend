import { Component, OnInit } from '@angular/core';
import {Parte} from './parte'
import { ParteService } from './parte.service';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css']
})
export class PartesComponent implements OnInit {
  titulo:string="Lista de partes";

  partes!: Parte[];

  constructor(private parteService:ParteService) { }

  ngOnInit(): void {
    this.parteService.getAll().subscribe(
      (      p: Parte[]) =>this.partes=p
    );
  }

  delete(parte:Parte):void{
    console.log("hello form delete")
    this.parteService.delete(parte.id).subscribe(
      res=>this.parteService.getAll().subscribe(
        response=>this.partes=response
        )
      )
  }

  }

