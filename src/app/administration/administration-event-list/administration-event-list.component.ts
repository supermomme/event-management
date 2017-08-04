import { Component, OnInit } from '@angular/core';
import { FeathersService } from '../../feathers/feathers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-event-list',
  templateUrl: './administration-event-list.component.html',
  styleUrls: ['./administration-event-list.component.css']
})
export class AdministrationEventListComponent implements OnInit {
  private events:any[] = [ ];

  constructor(
    private feathers: FeathersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.feathers.service('event').find()
    .then(res=>res.data)
    .then(events=>this.events = events)
  }

  goToEvent(id) {
    this.router.navigate(['admin', 'event', id])
  }

}
