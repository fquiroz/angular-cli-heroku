import { NgModule ,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule,MatIconModule,MatNavList}  from '@angular/material';
import { SharedRoutingModule } from './shared-routing.module';
import { ParseService,AuthService,ProductosService,NewsService } from './services/index';
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    SharedRoutingModule
  ],
  declarations: [],
  exports: [CommonModule, MatSidenavModule,MatIconModule,SharedRoutingModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
        providers: [ParseService,AuthService,ProductosService,NewsService]
    };
}
 }
