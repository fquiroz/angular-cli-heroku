import { CabeceraFactura } from "./cabecera-factura";
import { DetalleFactura } from "./detalle-factura";

export class Factura {

    cabecera:CabeceraFactura;
    detalle:DetalleFactura;
    errores:Error[];
}
