import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatMenuModule,MatToolbarModule,MatInputModule,MatSelectModule,
  MatButtonModule,MatAutocompleteModule, MatCardModule,
   MatGridListModule,MatSidenavModule,
  MatDividerModule} from '@angular/material'
import {PrincipalRoutes} from './principal-routes';
import { VentasComponent } from './ventas/ventas.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,MatSidenavModule,
    CommonModule,MatCardModule,MatGridListModule,MatDividerModule , 
    MatMenuModule,MatToolbarModule,MatInputModule,MatSelectModule,MatAutocompleteModule,MatButtonModule,
    RouterModule.forRoot(PrincipalRoutes)
  ],
  exports: [MatMenuModule,MatToolbarModule,VentasComponent,MatSidenavModule,MatInputModule,MatSelectModule,MatButtonModule,MatAutocompleteModule,ReactiveFormsModule],
  declarations: [VentasComponent]
})
export class PrincipalModule { }
