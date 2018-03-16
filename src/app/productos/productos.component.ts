import {Component, ViewChild,OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator,MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {Producto} from '../shared/domain/producto';
import {ProductosService} from '../shared/services/productos.service';
import {ParseService} from '../shared/services/parse.service';
import {HttpErrorResponse} from '@angular/common/http'
import * as Parse from 'parse';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers :[ProductosService]

})
export class ProductosComponent  {

  displayedColumns = ['nombre', 'precio'];
  dataSource: Producto[]; 

  constructor(private productoservice:ProductosService) {  
  }
 

  @ViewChild(MatPaginator) paginator: MatPaginator;
//  @ViewChild(MdSort) sort: MdSort;

  ngOnInit() {
    this.productoservice.getAllProductos().subscribe((data:Producto[])=>{
      this.dataSource = data as Producto[] ; 
      console.log('productos OK',data);  
      return data;
    });
    
      
      
    
  }

}








