import { Route } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import {ventasRoutes} from './ventas/ventas-routes';
import {ProductosRoutes} from '../productos/productos-routes';
export const PrincipalRoutes: Route[] = [
  	{
    	path: 'principal',
		component: PrincipalComponent,
		children :[
		  ...ProductosRoutes,
		  ...ventasRoutes
		]
  	}
];



