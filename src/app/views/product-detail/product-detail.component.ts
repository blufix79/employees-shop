import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) =>{
      this.productService.getProduct(params.idProduct)
        .subscribe((product: Product) => {
          this.product = product;
        });
    })

  }

}
