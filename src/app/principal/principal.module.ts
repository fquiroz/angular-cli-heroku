import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {PrincipalRoutes} from './principal-routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(PrincipalRoutes)
  ],
  declarations: []
})
export class PrincipalModule { }
