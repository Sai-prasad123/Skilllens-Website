import { Component, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-website-footer',
  templateUrl: './website-footer.component.html',
  styleUrls: ['./website-footer.component.css']
})
export class WebsiteFooterComponent {

  contact = {} as IContact;
  isShow!: boolean;
  topPosToStartShowing = 100;
  serverError!: any;
  loading = false;

  // constructor(private http: HttpService, private utilService: ExternalLibraryService) { }

  ngOnInit(): void {

    this.contact = {} as IContact;
  }


  downloadfile(path: any) {
    // this.utilService.openDialogPdfDownload(path);
  }
  gotoTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  openGet() {
    // document.getElementById("mySidenav").style.width = "320px";
  }

  closeGet() {
    // document.getElementById("mySidenav").style.width = "0";

  }

  RequestQuote(f: NgForm) {
    // this.loading = true;
    // let postVars = {
    //   Name: this.contact.Name,
    //   Email: this.contact.Email,
    //   Mobile: this.contact.Mobile,
    //   Message: this.contact.Message
  };


  //   this.http
  //     .postDataHttpResponse("User/requestCallback", postVars)
  //     .subscribe((data: any) => {
  //       if (data.status == 200 && data.statusText == "OK") {
  //         this.http.openSnackBar('Submitted Successfully', '');
  //         f.resetForm();
  //         this.closeGet();
  //         this.loading = false;
  //       }
  //     },
  //       (error: HttpErrorResponse) => {
  //         if (error.error !== undefined) {
  //           this.serverError = error.error.registration_failure[0];
  //           this.http.openSnackBarError(this.serverError, '');
  //         }
  //         else if (error !== undefined) {
  //           this.serverError = error.message;
  //         }
  //         else {
  //           this.serverError = "Server Error";
  //         }
  //         this.loading = false;
  //       });

  // }

  @HostListener('window:scroll')
  checkScroll(): void {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

}
export interface IContact {
  name: string;
  email: string;
  mobile: string;
  message: string;
}


