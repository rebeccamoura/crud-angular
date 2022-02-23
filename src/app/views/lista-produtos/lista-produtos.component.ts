import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  q = (element: any) => document.querySelector(element)
  qAll = (elements: any) => document.querySelectorAll(elements)
  
  idProduto: any = '';

  product: Product[] = this.productService.products ;

  constructor( public productService: ProductService, private router: Router ) { }

  ngOnInit(): void {
  }

  popUpExcluirProduto(evento: MouseEvent) {

    this.qAll('.excluir.d-none').forEach(elemento => elemento.classList.remove('d-none'))
    this.pegarId(evento)
    this.productService.exibirProduto(this.idProduto)    

  }

  popUpEditarProduto(evento: MouseEvent) {

    this.pegarId(evento)
    this.product.forEach(item => {
      if (item.id === Number(this.idProduto)) {

        this.q('.edicao form input.desc').value = item.descricao
        this.q('.edicao form input.price').value = item.preco
        this.q('.edicao form input.categoria').value = item.categoria
        this.q('.edicao form input.estoqueMin').value = item.estoqueMin
        this.q('.edicao form input.fornecedor').value = item.fornecedor
        this.q('.edicao form').id = item.id

      }
    })
    this.qAll('.editar.d-none').forEach(elemento => elemento.classList.remove('d-none'))
  
  }

  pegarId(evento: any) {
    this.idProduto = (<HTMLInputElement>evento.target).parentElement?.parentElement?.getAttribute("id")
  }

  excluirProduto() {

    this.product.forEach(item => {
      if (item.id === Number(this.idProduto)) {

        let itemExcluir = this.product.findIndex(item => item === item)
        this.productService.products.splice(itemExcluir, 1)

      }
    })

    this.q('.background')?.classList.add('d-none')
    this.q('.pop-up.excluir')?.classList.add('d-none')

  }

}
