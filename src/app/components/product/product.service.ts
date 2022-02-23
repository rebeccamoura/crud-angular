import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  q = (element: any) => document.querySelector(element)
  qAll = (elements: any) => document.querySelector(elements)

  products: Product[] = []

  constructor() {
  }

  create(product: Product): void {

    this.products.push(product)

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
