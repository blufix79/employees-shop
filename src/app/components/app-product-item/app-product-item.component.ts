import { Product } from './../../models/Product';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './app-product-item.component.html',
  styleUrls: ['./app-product-item.component.scss']
})
export class AppProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() layoutType: string;
  @Output() delProduct: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // public delProduct(productId: string){
  //   this.delProductEmitter.emit(productId);
  // }
}
