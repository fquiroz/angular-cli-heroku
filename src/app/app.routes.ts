import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login-routes';


import { LoginComponent } from './login/login.component';
import {ProductosRoutes} from './productos/productos-routes';
import {PrincipalRoutes} from './principal/principal-routes'

export const routes: Routes = [
	...LoginRoutes,
	...PrincipalRoutes,
	
	{ path: '**', component: LoginComponent }
];