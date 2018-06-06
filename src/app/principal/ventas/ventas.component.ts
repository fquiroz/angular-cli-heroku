import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {Producto,Address} from '../../shared/domain/producto';
import {ParseService} from '../../shared/services/parse.service';
import {HttpErrorResponse} from '@angular/common/http'
import * as Parse from 'parse';
import {ProductosService} from '../../shared/services/productos.service';
import { MatOption } from '@angular/material';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  providers :[ProductosService]
})
export class VentasComponent implements OnInit {

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  productoSeleccionado:Producto = new Producto();
  address = new Address();
  dataSource: Producto[]; 

  ngOnInit() {
    

  }

  constructor(private productoservice:ProductosService) {
    
    this.stateCtrl = new FormControl();
    this.productoservice.getAllProductos().subscribe((data:Producto[])=>{
   
      this.dataSource = data as Producto[] ; 
      console.log('productos OK',data);  
    
      this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.dataSource.slice())
      );
      return data;
    });
   
  }

  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.address));
  }

  filterStates(name: string) {
    return this.dataSource.filter(state =>{
      this.productoSeleccionado=state;
      //state.nombre.toLowerCase().indexOf(name.toLowerCase()) === 0;
    });
      
  }

  private selected(producto) {
    console.log('prod seleccionado',producto);
    this.productoSeleccionado = producto.option.value;
    //send to parent or do whatever you want to do
    //this.valueChange.emit(user);
  }

  displayFn(prod?: Producto): String | undefined {
    return prod ? prod.nombre : undefined;
  }

}
