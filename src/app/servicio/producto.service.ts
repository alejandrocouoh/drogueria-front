import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string = "http://localhost:8080/v1/";

  constructor(private httpclient:HttpClient) { }

  listarProductos() : Observable <any>{
    return this.httpclient.get( this.url + "productos");
  }

}
