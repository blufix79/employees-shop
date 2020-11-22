import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './app-product-reviews.component.html',
  styleUrls: ['./app-product-reviews.component.scss']
})
export class AppProductReviewsComponent implements OnInit {
  public isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

}
