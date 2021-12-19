import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ListaProdutosComponent } from './views/lista-produtos/lista-produtos.component';
import { ExcluirProdutoComponent } from './views/excluir-produto/excluir-produto.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "cadastro",
  component: CadastroComponent
}, {
  path: "produtos",
  component: ListaProdutosComponent
}, {
  path: "excluir-produto",
  component: ExcluirProdutoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
