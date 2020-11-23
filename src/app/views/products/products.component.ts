import { PaginatedProducts } from './../../models/Product';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('confirmModalContent', { static: true }) confirmModalContent;
  products;
  totalNumberProducts;
  currentPage = 1;
  elements = 20;
  pages;
  public layoutType = 'list';

  constructor(
    private productsService: ProductsService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  switchLayout(){
    this.layoutType = this.layoutType === 'list' ? 'grid' : 'list';
  }

  initPaginator() {
    this.pages = Math.round(this.totalNumberProducts / this.elements);
    this.pages = Array(this.pages).fill(0).map((x, i) => i + 1);
  }

  changePage(page) {
    this.currentPage = page;
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getProducts(this.currentPage, this.elements).subscribe((results: PaginatedProducts) => {
      this.totalNumberProducts = results.length;
      this.products = results.list;

      this.initPaginator();
    });
  }

  delProduct(id: string) {
    this.modalService.open(this.confirmModalContent, { ariaLabelledBy: 'deleProductModalLabel' })
      .result
      .then((result) => {
        if (result === 'confirm') {
          // perform to delete product
          this.productsService.delProduct(id)
            .subscribe((result) => {
              this.toastr.success('Product successfully deleted', 'Delete product');
              this.fetchProducts();
            });
        }
      });
  }

}
