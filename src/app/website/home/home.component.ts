import { Component } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // onstructor(private utilService: ExternalLibraryService) { }

  ngOnInit(): void {
    
  }

  downloadfile(path: any) {
    // this.utilService.openDialogPdfDownload(path);
  }
}
