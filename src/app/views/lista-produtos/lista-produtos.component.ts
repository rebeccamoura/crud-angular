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
    this.productService.products.forEach(item => {
      if(item.id === Number(this.idProduto)) {
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

    fetch(`http://localhost:5000/products/${this.idProduto}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((resp) => {
        this.productService.mostrarMensagem('Produto deletado com sucesso.')
      })
      .then((resp) => {
        this.productService.getProducts()
        this.router.navigate(['/produtos'])
      })
      .catch((err) => this.productService.mostrarMensagem('Ocorreu um erro.'))
    
    this.productService.getProducts()

    this.q('.background')?.classList.add('d-none')
    this.q('.pop-up.excluir')?.classList.add('d-none')

  }

}
