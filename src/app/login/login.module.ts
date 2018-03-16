import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MatButtonModule,MatCheckboxModule,MatInputModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,MatCheckboxModule,MatInputModule,BrowserAnimationsModule,ToastrModule 
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
