import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ListaProdutosComponent } from './views/lista-produtos/lista-produtos.component';
import { FormsModule } from '@angular/forms';
import { ExcluirProdutoComponent } from './views/excluir-produto/excluir-produto.component';
import { FormComponent } from './components/template/form/form.component';
import { SnackbarComponent } from './components/template/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    CadastroComponent,
    ListaProdutosComponent,
    ExcluirProdutoComponent,
    FormComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
