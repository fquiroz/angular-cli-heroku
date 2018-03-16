import { Component, OnInit,ViewChild } from '@angular/core';
import {SidenavComponent} from '../shared/componentes/sidenav/sidenav.component';
import {AuthService} from '../shared/services/auth.service';
import { Router,ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers:[AuthService]
})
export class PrincipalComponent implements OnInit {

  @ViewChild('sidenav') sidenavComponent: SidenavComponent;
  constructor(private authService:AuthService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  logout(){
  this.authService.logout().subscribe(data=>{
    console.log('logout OK');
    this.router.navigate(['/login']);
  },error=>{
    console.log('logout Error',error);
  });
  
  }

}
