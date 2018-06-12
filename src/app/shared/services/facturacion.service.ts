import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Factura } from '../domain/factura';
import { environment } from '../../../environments/environment';
import { IvaTipo } from '../domain/iva-tipo';

@Injectable()
export class FacturacionService {

  private urlfactura = environment.facturacionUrl;

  constructor(private http: HttpClient) { }

 
traerFacturas (): Observable<Factura[]> {
  return this.http.get<Factura[]>(this.urlfactura)
}

traerTiposIva():Observable<IvaTipo[]>{
  return this.http.get<IvaTipo[]>(this.urlfactura+'tiposiva')
  .map((tipos: IvaTipo[]) => {
    return tipos.map((t:IvaTipo)=> {
      return new IvaTipo(t);
    });  
});
}

}
