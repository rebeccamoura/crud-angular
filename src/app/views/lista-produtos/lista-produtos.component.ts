import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor( public productService: ProductService ) { }

  ngOnInit(): void {
  }

  excluirProduto(evento: MouseEvent) {

    document.querySelectorAll('.d-none').forEach(elemento => elemento.classList.remove('d-none'))

    let idProduto = (<HTMLInputElement>evento.target).parentElement?.parentElement?.getAttribute("id")
    this.productService.exibirProduto(idProduto)

    //console.log((<HTMLInputElement>evento.target).parentElement?.parentElement)
    //console.log((<HTMLInputElement>evento.target).parentElement?.parentElement?.getAttribute("id"))

    
    
  }

}
