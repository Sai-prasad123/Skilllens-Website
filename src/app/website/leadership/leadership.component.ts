import { Component } from '@angular/core';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent {
  constructor() { }

  ngOnInit(): void {

    $(".nav-tabs a").click(() => {
      $(this).tab('show');
    });
  }
}
