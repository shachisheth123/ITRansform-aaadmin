import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import 'slick-carousel';
@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    ngOnInit() {
        // tslint:disable-next-line:only-arrow-functions
        $(document).ready(function() {
          $('.slider-banner').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 1000,
            // tslint:disable-next-line:max-line-length
            prevArrow: '<i class="fa fa-caret-left prev1" title="Previous" style="color:#fff;position: absolute; left: 20px;top: 44%;transform: translate(-50%);z-index: 5000;font-size: 31px;"></i>',
            // tslint:disable-next-line:max-line-length
            nextArrow: '<i class="fa fa-caret-right next1" title="Next" style="color:#fff;position: absolute; right: 20px;top: 44%;transform: translate(-50%);z-index: 5000;font-size: 31px;"></i>',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      dots: false,
                      arrows: false
                    }
            }]
          });
        });
      }
}
