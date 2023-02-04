import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Productos } from '../model/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string = "http://localhost:8080/v1/";

  constructor(private httpclient:HttpClient) { }

  listarProductos() : Observable <any>{
    return this.httpclient.get( this.url + "productos");
  }

  productoId(id:number) : Observable <Productos>{
    return this.httpclient.get<Productos>( this.url + "productos/ " + id );
  }

  nuevoProducto(producto:Productos){
    this.httpclient.post( this.url + "productos", producto);
  }

  editarProducto(id:number, producto:Productos) : Observable<Productos> {
    return this.httpclient.put<any>( this.url + "modificarProducto" + id, producto);
  }

  eliminarProducto(id:number){
    this.httpclient.delete( this.url + "eliminarProducto/" + id);
  }

}
