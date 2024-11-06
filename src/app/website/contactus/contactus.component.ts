import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  contactInfo = {} as IContactInfo;
  serverError: any;
  loading = false;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.contactInfo = {} as IContactInfo;
  }

  RequestContact(f: NgForm) {
    this.loading = true;
    var serv = "";
    if (this.contactInfo.assessment) { serv += "[E-Assessment]" }
    if (this.contactInfo.bA) { serv += "[Business Association]" }
    if (this.contactInfo.learning) { serv += "[E-Learning]" }
    if (this.contactInfo.industry) { serv += "[Industry Connect]" }
    let postVars = {
      name: this.contactInfo.name,
      email: this.contactInfo.email,
      mobile: this.contactInfo.mobile,
      message: this.contactInfo.message,
      profession: this.contactInfo.profession,
      service: serv
    };

    console.log(postVars);

    this.http
      .postData("https://api.goodrichitsolutions.com/api/Home/skilllens-mail", postVars)
      .subscribe({
        next: (data: any) => {
          f.resetForm();
          this.loading = false;
          alert(data.message);
        },
        error: (reason: any) => {
          if (reason.error !== undefined) {
            this.serverError = reason.error.registration_failure[0];
          }
          else if (reason !== undefined) {
            this.serverError = reason.message;
          }
          else {
            this.serverError = "Server Error";
          }
          this.loading = false;
        }
      });
  }

}
export interface IContactInfo {
  name: string;
  email: string;
  mobile: string;
  message: string;
  profession: string;
  learning: boolean;
  assessment: boolean;
  industry: boolean;
  bA: boolean;
  service: string;
}
