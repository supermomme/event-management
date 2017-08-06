import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeathersService } from '../../feathers/feathers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-registration-step-2',
  templateUrl: './event-registration-step-2.component.html',
  styleUrls: ['./event-registration-step-2.component.css']
})
export class EventRegistrationStep2Component implements OnInit {

  @Input() registration: any = {};
  @Output() registrationChange = new EventEmitter();
  @Output() stepChange = new EventEmitter<number>();
  private purposes:any;

  constructor(
    private feathers: FeathersService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.feathers.service('purpose').find().then(res=>this.purposes = res.data);
  }

  submit() {
    if (this.registration.purpose && this.registration.purpose.match(/^[0-9a-fA-F]{24}$/)) {
      this.stepChange.emit(1);
    } else {
      this.toastr.warning("","Select a Purpose")
    }
  }
  back() {
    this.stepChange.emit(-1);
  }

}
