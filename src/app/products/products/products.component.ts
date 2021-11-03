import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ProductsService } from './../service/products.service';
import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  displayedColumns = ['name', 'quantity', 'price'];


  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    ) {
    this.products$ = this.productsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os produtos.')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
