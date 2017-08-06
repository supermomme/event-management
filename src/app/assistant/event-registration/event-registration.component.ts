import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeathersService } from '../../feathers/feathers.service';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit, OnDestroy {
  public step = 0;
  private lastStep = 1;
  private registration:any = {};
  private sub: any;
  private params: any;

  constructor(
    private route: ActivatedRoute,
    private feathers: FeathersService
  ) { }

  ngOnInit() {
    this.registration.user = this.feathers.get('user')._id;
    this.sub = this.route.params.subscribe(params => { this.params = params });
    this.feathers.service('event').find({query:{_id:{$in:[this.params.eventId]}}})
    .then(res=>res.total === 1)
    .then(isValidEvent=>{
      if (isValidEvent) {
        this.registration.event = this.params.eventId;
        this.setStep(1);
        return this.feathers.service('purpose').find({query:{_id:{$in:[this.params.purposeId]}}})
      }
      return {total:0};
    })
    .then(res=>res.total === 1)
    .then(isValidPurpose=>{
      if (isValidPurpose) {
        this.registration.purpose = this.params.purposeId;
        this.setStep(1);
      }
    })
    .catch(()=>{})
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setStep(steps: number) {
    if ((this.step === 0 && steps > 0) || (this.step === this.lastStep) && steps < 0) {
      this.step += steps;
    } else if (this.step >= this.lastStep && steps > 0) {
      console.log("Finished")
    }
  }

}
