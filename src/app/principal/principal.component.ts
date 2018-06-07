import {FormBuilder, FormGroup} from '@angular/forms';
import { Component, OnInit,ViewChild } from '@angular/core';
import {SidenavComponent} from '../shared/componentes/sidenav/sidenav.component';
import {AuthService} from '../shared/services/auth.service';
import { Router,ActivatedRoute} from "@angular/router";
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers:[AuthService]
})
export class PrincipalComponent implements OnInit {
  options: FormGroup;

  
  
  ngOnInit() {
       }
//   mobileQuery: MediaQueryList;
//   events: string[] = [];
//   opened: boolean;
//   private _mobileQueryListener: () => void;

//  @ViewChild('sidenav') sidenavComponent: SidenavComponent;




//   fillerContent = Array(10).fill(0).map(() =>
//       `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);



 

//   ngOnDestroy(): void {
//     this.mobileQuery.removeListener(this._mobileQueryListener);
//   }

//   shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));





//   constructor(private authService:AuthService,private route: ActivatedRoute,private router:Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
//     this.mobileQuery = media.matchMedia('(max-width: 600px)');
//     this._mobileQueryListener = () => changeDetectorRef.detectChanges();
//     this.mobileQuery.addListener(this._mobileQueryListener);
//    }

//   ngOnInit() {
//   }


  
  





//   logout(){
//     this.authService.logout().subscribe(data=>{
//       console.log('logout OK');
//       this.router.navigate(['/login']);
//     },error=>{
//       console.log('logout Error',error);
//     });
    
//     }

}
