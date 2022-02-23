import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  q = (element: any) => document.querySelector(element)
  qAll = (elements: any) => document.querySelector(elements)

  products: Product[] = [];

  constructor() {
    this.getProducts()
  }

  getProducts() {
    fetch('http://localhost:5000/products', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.products = data
      })
  }

  create(product: Product): void {

    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .catch((err) => console.log(err))

    this.getProducts()

  }

  exibirProduto(idProduto: any) {
    
    const produtoParaExibir = this.products.find(product => product.id == idProduto)
    this.q('.pop-up.excluir.desc').innerHTML = produtoParaExibir?.descricao
    this.q('.pop-up.excluir.preco').innerHTML = produtoParaExibir?.preco
    this.q('.pop-up.excluir.categoria').innerHTML = produtoParaExibir?.categoria
    this.q('.pop-up.excluir.estoque').innerHTML = produtoParaExibir?.estoqueMin
    this.q('.pop-up.excluir.fornecedor').innerHTML = produtoParaExibir?.fornecedor

  }

}
