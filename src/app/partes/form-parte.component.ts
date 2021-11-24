import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parte } from './parte';
import {ParteService} from './parte.service';

@Component({
  selector: 'app-form-parte',
  templateUrl: './form-parte.component.html',
  styleUrls: ['./form-parte.component.css']
})
export class FormParteComponent implements OnInit {
  public titulo:string;
  public parte:Parte=new Parte(1,"","","");
  
  constructor(private parteService:ParteService,public router:Router,private activatedRoute:ActivatedRoute) {
    this.titulo="Insertar nueva parte";
   }

  ngOnInit(): void {
    this.cargar();
  }
  cargar():void{
    this.activatedRoute.params.subscribe(
      e =>{
        let id = e['id'];
        if(id){
          this.parteService.get(id).subscribe(
            es =>this.parte=es
          )
        }
      }

  )
    
  }
  create(): void{
    console.log(this.parte);
    this.parteService.create(this.parte).subscribe(
      res => this.router.navigate(['/partes']));
    
  }

  update():void{
    this.parteService.update(this.parte).subscribe(
      s =>this.router.navigate(['/pastel'])
    )
  }
  
}
function id(id: any) {
  throw new Error('Function not implemented.');
}

