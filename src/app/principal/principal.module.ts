import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatMenuModule,MatToolbarModule} from '@angular/material'
import {PrincipalRoutes} from './principal-routes';
@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,MatToolbarModule,
    RouterModule.forRoot(PrincipalRoutes)
  ],
  exports: [MatMenuModule,MatToolbarModule],
  declarations: []
})
export class PrincipalModule { }
