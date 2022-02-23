import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private productService: ProductService, private router: Router) {}

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

  editarProduto(item: Product, itemId: number) {

    if (!this.product.descricao) {
      this.product.descricao = item.descricao
    }

    if (!this.product.preco) {
      this.product.preco = item.preco
    }

    if (!this.product.categoria) {
      this.product.categoria = item.categoria
    }

    if (!this.product.estoqueMin) {
      this.product.estoqueMin = item.estoqueMin
    }

    if (!this.product.fornecedor) {
      this.product.fornecedor = item.fornecedor
    }

    fetch(`http://localhost:5000/products/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.product)
    })
      .then((resp) => {
        this.productService.getProducts()
        this.router.navigate(['/produtos'])
      })
      .catch(err => console.log(err)) 
    
    this.product.descricao = ''
    this.product.preco = null!
    this.product.categoria = ''
    this.product.estoqueMin = null!
    this.product.fornecedor = ''

  }

  enviarForm(evento: any) {

    if (evento.target.parentElement.parentElement.parentElement.classList.contains('cadastro')) {
      this.criarProduto();
      return;
    }

    this.productService.products.forEach(item => {
      if (item.id === Number(document.querySelector('form')?.id)) {
        this.editarProduto(item, item.id)
        document.querySelector('form')?.parentElement?.parentElement?.classList.add('d-none')

        document.querySelector('form')?.parentElement?.parentElement?.parentElement?.querySelector('.background')?.classList.add('d-none')
      }
    })

  }

}
