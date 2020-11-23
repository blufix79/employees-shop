import { StoreService } from './../../services/store.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  public productAddForm: FormGroup;
  public employees: [];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private toastr: ToastrService,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.productAddForm = new FormGroup({
        title: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        price: new FormControl('', [Validators.required, Validators.min(0)]),
        employee: new FormControl('', Validators.required),
        description: new FormControl('')
    });
    this.storeService.getStoreInfo()
      .subscribe(storeInfo => {
        this.employees = storeInfo.employees;
      });
  }

  //Getters for validator
  get title(){ return this.productAddForm.get('title'); }
  get category(){ return this.productAddForm.get('category'); }
  get price(){ return this.productAddForm.get('price'); }
  get employee(){ return this.productAddForm.get('employee'); }

  saveProduct(){
    if (this.productAddForm.valid){
      const product = this.productAddForm.value;
      this.productsService.addProduct(product)
      .subscribe(idProduct => {
        this.toastr.success('Prodotto aggiunto correttamente','Aggiunta prodotto');
        this.router.navigateByUrl('/products');
      });
    }
  }
}
