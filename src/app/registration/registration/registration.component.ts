import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private user:any = {};
  private usernameSuggestion:String;

  constructor(
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    if (this.user.password == this.user.confirmedPassword) {
      this.toastrService.success('', 'Erfolgreich Registriert');
      this.router.navigate(['dashboard'])
    } else {
      this.toastrService.error('', 'Passwörter stimmen nicht überein.');
    }
  }
  testFailedSignup() {
    this.toastrService.error('', 'Es ist ein Fehler unterlaufen!');
  }
  usernameSuggestionUpdate() {
    if (this.user.firstname != undefined && this.user.lastname != undefined) {
      this.usernameSuggestion = `Vorschlag: ${this.user.firstname.toLowerCase()}.${this.user.lastname.toLowerCase()}`
    }
  }

}
