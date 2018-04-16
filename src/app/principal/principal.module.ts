import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatMenuModule,MatToolbarModule,MatInputModule,MatSelectModule,MatButtonModule,MatAutocompleteModule, MatCardModule, MatGridListModule} from '@angular/material'
import {PrincipalRoutes} from './principal-routes';
import { VentasComponent } from './ventas/ventas.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,MatCardModule,MatGridListModule,    
    MatMenuModule,MatToolbarModule,MatInputModule,MatSelectModule,MatAutocompleteModule,MatButtonModule,
    RouterModule.forRoot(PrincipalRoutes)
  ],
  exports: [MatMenuModule,MatToolbarModule,VentasComponent,MatInputModule,MatSelectModule,MatButtonModule,MatAutocompleteModule,ReactiveFormsModule],
  declarations: [VentasComponent]
})
export class PrincipalModule { }
