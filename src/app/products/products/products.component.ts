import { ProductsService } from './../service/products.service';
import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;
  displayedColumns = ['name', 'quantity', 'price'];


  constructor(private productsService: ProductsService) {
    //this.productsService = new ProductsService();
    this.products = this.productsService.list();

  }

  ngOnInit(): void {

  }

}
