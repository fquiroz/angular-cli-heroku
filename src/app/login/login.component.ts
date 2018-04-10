import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from "@angular/router";
import {AuthService} from '../shared/services';
import {HttpErrorResponse} from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ingreso',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService,ToastrService]
})
export class LoginComponent implements OnInit {

 
  public errorMsg = '';
  usuario:string;
  password:string;

  
  constructor(private route: ActivatedRoute,private router:Router,private auth:AuthService,private toastr: ToastrService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login('fquiroz','fer').subscribe(data=>{
     console.log('login OK');

     this.auth.getRoles('fquiroz');
     this.router.navigate(['principal/productos']);
    },(error:HttpErrorResponse)=>{
      this.toastr.error(error.message, 'Error!');
      console.log('login error:' ,error);
    });
    

  
  }

}
