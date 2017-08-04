import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeathersService } from '../../feathers/feathers.service';

@Component({
  selector: 'app-administration-event-edit',
  templateUrl: './administration-event-edit.component.html',
  styleUrls: ['./administration-event-edit.component.css']
})
export class AdministrationEventEditComponent implements OnInit {

  private id: any;
  private sub: any;
  private event: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private feathers: FeathersService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => this.id = params['id']);
    this.feathers.service('event').get(this.id)
    .then(event=>this.event = event)
    .catch(err=>err.code === 404 ? this.router.navigate(['admin', 'event']) : err)
    .catch(err=>console.error(err))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {
    this.feathers.service('event').patch(this.id, this.event)
    .then(res=>console.log(res))
    .catch(error=>console.error(error))
  }

}
