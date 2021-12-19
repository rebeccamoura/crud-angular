import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  product: Product = {
    descricao: '',
    preco: null!,
    categoria: '',
    estoqueMin: null!,
    fornecedor: '',
  }

  id: number = 0;

  constructor(private productService: ProductService) {
    if (localStorage.getItem("products")) {
      this.id = JSON.parse(localStorage.getItem("products")!).length
    }
  }

  ngOnInit(): void {
  }

  criarProduto() {
    
    this.id++
    let dadosProduto = {...this.product};
    dadosProduto.id = this.id
    this.productService.create(dadosProduto)

    this.product.descricao = ''
    this.product.preco = null!
    this.product.categoria = ''
    this.product.estoqueMin = null!
    this.product.fornecedor = ''

  }

}
