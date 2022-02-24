import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
    this.pegarElemento()
  }

  pegarElemento() {
    this.productService.getSnackbar(document.querySelector('.snackbar'))
  }

}
