import { Component, inject, NgModule } from "@angular/core";
import { Produto } from "../../../service/@Type/Produto";
import { HttpClient } from "@angular/common/http";
import { ProdutoService } from "../../../service/produto/produto-service";

@Component({
  selector: "app-home-admin",
  imports: [],
  templateUrl: "./home-admin.html",
  styleUrl: "./home-admin.css",
})
export class HomeAdmin {
  private produtoService = inject(ProdutoService)
  listaProdutos:Produto[]= []  
  nomeTabela = "Produtossss"
  httpClient = inject(HttpClient)

  ngOnInit(){
    this.produtoService.getProdutos().subscribe({
      next : (dados) => this.listaProdutos = dados,
      error: (err) => console.log(err)
    })
  }
  
  
}
