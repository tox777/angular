import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  variableDePrueba = "UCreativa "
  nombrePorDefecto = "Jorge Torres"

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    this.variableDePrueba = "Agosto"
  }


  obtenerElementoDelDom(miElemento){
    console.log(miElemento);
  }

}
