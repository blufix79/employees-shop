import { PaginatedProducts } from './../../models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public totalProducts;
  public totalComments=0;

  constructor(
    private productsService: ProductsService,

  ) { }


  ngOnInit() {
    this.productsService.getProducts(1, 10)
      .subscribe((products: PaginatedProducts) => {
        this.totalProducts = products.length;
        this.statsTotalComments(products);
      });
  }

  statsTotalComments(products){
    //console.log(products);
    let totalComments=0;
    products.list.forEach(element => {
      if(element.data.reviews){
        totalComments += element.data.reviews.length;
      }
    });
    this.totalComments = totalComments;
  }
}
