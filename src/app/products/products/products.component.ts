import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    { _id: '1', name: 'Refrigerante (2L)', quantity: 1, price: 6 }
  ];
  displayedColumns = ['name', 'quantity', 'price'];

  constructor() {}

  ngOnInit(): void {
  }

}
