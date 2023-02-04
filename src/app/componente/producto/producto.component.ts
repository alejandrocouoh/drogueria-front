import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Productos } from 'src/app/model/Productos';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit{

  productos:Productos[] = [];
  columnas:any[] = [];
  items:MenuItem[] = [];
  displayitems:boolean = false;

  constructor(private productosService:ProductoService){

  }

  obtenerProductos(){
    this.productosService.listarProductos().subscribe(
      (result:any)=>{
        for(let i = 0; i<result.length; i++){
          let producto = result[i] as Productos;
          this.productos.push(producto);
        }
      }
    );
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.columnas = [
      {field: "id", header: "ID"},
      {field: "nombre", header: "Nombre"},
      {field: "laboratorio", header: "Laboratorio"},
      {field: "elaboracion", header: "Elaboracion"},
      {field: "caducidad", header: "Caducidad"},
      {field: "stock", header: "Stock"},
      {field: "precio", header: "Precio"}
    ];
  }

}
