import { Component, OnInit } from '@angular/core';
import { FeathersService } from '../../feathers/feathers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-purpose-list',
  templateUrl: './administration-purpose-list.component.html',
  styleUrls: ['./administration-purpose-list.component.css']
})
export class AdministrationPurposeListComponent implements OnInit {
  private purposes:any[] = [ ];
  private busy:Promise<any>;

  constructor(
    private feathers: FeathersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.busy = this.feathers.service('purpose').find()
    .then(res=>res.data)
    .then(purposes=>this.purposes = purposes)
  }

  goToPurpose(id) {
    this.router.navigate(['admin', 'purpose', id])
  }

}
