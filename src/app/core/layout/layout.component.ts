import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../feathers/auth-guard.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  
  constructor(
    private authGuard: AuthGuardService,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
  }

  logout() {
    console.log("LOGOUT")
    this.authGuard.logout()
    .then(user=>this.router.navigate(['login']))
    .catch(err=>this.toastrService.error('Bitte wenden sie sich an einen Administrator', 'Es ist uns ein Fehler unterlaufen'))
  }

}
