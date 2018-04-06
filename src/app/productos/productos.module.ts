import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import {MatMenuModule} from '@angular/material'
import { MatButtonModule,MatToolbarModule,MatCheckboxModule,MatInputModule,MatPaginatorModule,MatSortModule,MatCardModule,MatTableModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,MatCheckboxModule,MatInputModule,MatPaginatorModule,MatSortModule,MatCardModule,MatTableModule,MatMenuModule,
    SharedModule.forRoot()
  ],
  declarations: [ProductosComponent],
  exports: [CommonModule, MatButtonModule,MatCheckboxModule,MatInputModule,MatPaginatorModule,MatSortModule,MatCardModule,MatTableModule, MatMenuModule,SharedModule]
})
export class ProductosModule { }
