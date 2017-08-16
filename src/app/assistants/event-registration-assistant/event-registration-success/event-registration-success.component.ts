import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-registration-success',
  templateUrl: './event-registration-success.component.html',
  styleUrls: ['./event-registration-success.component.css']
})
export class EventRegistrationSuccessComponent implements OnInit {

  @Input() registration: any = {};

  constructor() { }

  ngOnInit() {
    console.log(this.registration)
  }

}
