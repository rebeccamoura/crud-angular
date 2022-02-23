import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaProdutosComponent } from 'src/app/views/lista-produtos/lista-produtos.component';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: Product = {
    descricao: '',
    preco: null!,
    categoria: '',
    estoqueMin: null!,
    fornecedor: '',
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  criarProduto() {

    let dadosProduto = {...this.product};
    this.productService.create(dadosProduto)

    this.product.descricao = ''
    this.product.preco = null!
    this.product.categoria = ''
    this.product.estoqueMin = null!
    this.product.fornecedor = ''

  }

  editarProduto(idProduto: number) {

    if (this.product.descricao) {
      this.productService.products[idProduto - 1].descricao = this.product.descricao
    }

    if (this.product.preco) {
      this.productService.products[idProduto - 1].preco = this.product.preco
    }

    if (this.product.categoria) {
      this.productService.products[idProduto - 1].descricao = this.product.categoria
    }

    if (this.product.estoqueMin) {
      this.productService.products[idProduto - 1].estoqueMin = this.product.estoqueMin
    }

    if (this.product.fornecedor) {
      this.productService.products[idProduto - 1].fornecedor = this.product.fornecedor
    }

  }

  enviarForm(evento: any) {

    if (evento.target.parentElement.parentElement.parentElement.classList.contains('cadastro')) {
      this.criarProduto();
      return;
    }

    this.productService.products.forEach(item => {
      if (item.id === Number(document.querySelector('form')?.id)) {
        this.editarProduto(item.id)
        document.querySelector('form')?.parentElement?.parentElement?.classList.add('d-none')

        document.querySelector('form')?.parentElement?.parentElement?.parentElement?.querySelector('.background')?.classList.add('d-none')
      }
    })

    //console.log(document.querySelector('form')?.id) //string

  }

}
