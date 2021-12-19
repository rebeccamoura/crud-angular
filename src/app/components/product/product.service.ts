import { Injectable } from '@angular/core';
import { ListaProdutosComponent } from 'src/app/views/lista-produtos/lista-produtos.component';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: Product[] = JSON.parse(localStorage.getItem('products')!) || []

  constructor() {
  }

  create(product: Product): void {

    this.products.push(product)
    localStorage.setItem("products", JSON.stringify(this.products))

  }

  exibirProduto(idProduto: any) {
    
    const produtoParaExibir = this.products.find(product => product.id == idProduto)
    console.log(produtoParaExibir)

  }

  delete(evento: any) {}

}
