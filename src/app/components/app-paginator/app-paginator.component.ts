import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './app-paginator.component.html',
  styleUrls: ['./app-paginator.component.scss']
})
export class AppPaginatorComponent implements OnInit {
  @Input() numberProduct;
  public totalNumberProducts;

  constructor() { }

  ngOnInit() {
  }

}
