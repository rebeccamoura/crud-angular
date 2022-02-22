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
  
  product: Product = {
    descricao: '',
    preco: null!,
    categoria: '',
    estoqueMin: null!,
    fornecedor: '',
  }
  
  idProduto: any = '';

  constructor( public productService: ProductService, private router: Router ) { }

  ngOnInit(): void {
  }

  popUpExcluirProduto(evento: MouseEvent) {

    document.querySelectorAll('.excluir.d-none').forEach(elemento => elemento.classList.remove('d-none'))
    this.pegarId(evento)
    this.productService.exibirProduto(this.idProduto)    

  }

  pegarId(evento: any) {
    this.idProduto = (<HTMLInputElement>evento.target).parentElement?.parentElement?.getAttribute("id")
  }

  excluirProduto() {

    this.productService.products.forEach(product => {
      if (product.id === Number(this.idProduto)) {

        let itemExcluir = this.productService.products.findIndex(item => item === product)
        this.productService.products.splice(itemExcluir, 1)

      }
    })

    document.querySelector('.background')?.classList.add('d-none')
    document.querySelector('.pop-up.excluir')?.classList.add('d-none')

  }

}
