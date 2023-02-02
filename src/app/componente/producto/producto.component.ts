import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Productos } from 'src/app/model/Productos';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit{

  productos:Productos[] = [];

  constructor(private productosService:ProductoService){

  }

  obtenerProductos(){
    this.productosService.listarProductos().subscribe(
      (result:any)=>{
        for(let i = 0; i<result.length; i++){
          let producto = result[i] as Productos;
          this.productos.push(producto);
        }
      }, error=>{
        console.log(error)
      }
    );
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

}
