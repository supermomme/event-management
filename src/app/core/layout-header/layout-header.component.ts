import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../feathers/auth-guard.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {

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
    .then(()=>this.toastrService.success('','Erfolgreich ausgelogt!'))
    .then(()=>this.router.navigate(['login']))
    .catch(err=>this.toastrService.error('Bitte wenden sie sich an einen Administrator', 'Es ist uns ein Fehler unterlaufen'))
  }

}
