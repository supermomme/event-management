import { Component, OnInit } from '@angular/core';
import { FeathersService } from '../../feathers/feathers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-registration-list',
  templateUrl: './administration-registration-list.component.html',
  styleUrls: ['./administration-registration-list.component.css']
})
export class AdministrationRegistrationListComponent implements OnInit {
  private registrations:any[] = [ ];

  constructor(
    private feathers: FeathersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.feathers.service('registration').find()
    .then(res=>res.data)
    .then(registrations=>this.registrations = registrations)
  }

  goToRegistration(id) {
    this.router.navigate(['admin', 'registration', id])
  }

}
