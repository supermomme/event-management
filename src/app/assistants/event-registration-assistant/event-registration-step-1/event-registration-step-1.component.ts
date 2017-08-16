import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeathersService } from '../../../feathers/feathers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-registration-step-1',
  templateUrl: './event-registration-step-1.component.html',
  styleUrls: ['./event-registration-step-1.component.css']
})
export class EventRegistrationStep1Component implements OnInit {

  @Input() registration: any = {};
  @Output() registrationChange = new EventEmitter();
  @Output() stepChange = new EventEmitter<number>();
  private events:any;

  constructor(
    private feathers: FeathersService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.feathers.service('event').find().then(res=>this.events = res.data);
  }

  submit() {
    if (this.registration.event && this.registration.event.match(/^[0-9a-fA-F]{24}$/)) {
      this.stepChange.emit(1);
    } else {
      this.toastr.warning("","Select an Event")
    }
  }
  back() {
    this.stepChange.emit(-1);
  }

}
