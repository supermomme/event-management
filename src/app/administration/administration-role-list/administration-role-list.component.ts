import { Component, OnInit } from '@angular/core';
import { FeathersService } from '../../feathers/feathers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-role-list',
  templateUrl: './administration-role-list.component.html',
  styleUrls: ['./administration-role-list.component.css']
})
export class AdministrationRoleListComponent implements OnInit {
  private roles:any[] = [ ];
  private busy:Promise<any>;

  constructor(
    private feathers: FeathersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.busy = this.feathers.service('role').find()
    .then(res=>res.data)
    .then(roles=>this.roles = roles)
  }

  goToRole(id) {
    this.router.navigate(['admin', 'role', id])
  }

}
