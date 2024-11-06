import { Component } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  constructor() { }

  ngOnInit(): void {

    $(".nav-tabs a").click(function () {
      $().tab('show');
    });


    $("#ones").click(function () {
      $("#one").css({ "opacity": "1", "filter": "grayscale(0%)", "transform": "scale(1.05)" });
      $("#two").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
      $("#three").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
      $("#four").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
    });

    $("#twos").click(function () {
      $("#two").css({ "opacity": "1", "filter": "grayscale(0%)", "transform": "scale(1.05)" });
      $("#one").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
      $("#three").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
      $("#four").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
    });

    $("#threes").click(function () {
      $("#three").css({ "opacity": "1", "filter": "grayscale(0%)", "transform": "scale(1.05)" });
      $("#two").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
      $("#one").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
      $("#four").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
    });

    $("#fours").click(function () {
      $("#four").css({ "opacity": "1", "filter": "grayscale(0%)", "transform": "scale(1.05)" });
      $("#two").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
      $("#three").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
      $("#one").css({ "opacity": "0.5", "filter": "grayscale(100%)" });
    });






  }

}
