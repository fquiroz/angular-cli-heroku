import { Injectable } from '@angular/core'
import { ParseService } from './parse.service'
import { Observable } from 'rxjs/Observable'
import {Producto} from '../domain/producto'


@Injectable()
export class ProductosService {
  constructor(private parseSvc: ParseService) {}

  getAllProductos() :Observable<Producto[]>{
     return this.parseSvc.getAllProductos().map((data ) => {
       return data;
     });
  
  }
}
