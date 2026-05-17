import { Component, inject, NgModule, OnInit, signal } from "@angular/core";
import { Produto } from "../../../service/@Type/Produto";
import { HttpClient } from "@angular/common/http";
import { ProdutoService } from "../../../service/produto/produto-service";
import { RouterLink } from "@angular/router";
import { AdminLayout } from "../../../shared/components/layout/admin-layout/admin-layout";

@Component({
  selector: "app-home-admin",
  imports: [RouterLink, AdminLayout],
  templateUrl: "./home-admin.html",
  styleUrl: "./home-admin.css",
})
export class HomeAdmin implements OnInit {
  private produtoService = inject(ProdutoService)
  listaProdutos = signal<Produto[]>([])  
  httpClient = inject(HttpClient)

 excluirProduto(id: string){
 
  this.produtoService.deleteProduto(id).subscribe({
        next: () => {
          // Atualiza o Signal removendo o item da lista local
          this.listaProdutos.update(produtos => 
            produtos.filter(p => p.id !== id)
          );
          console.log('Produto removido!');
        },
        error: (err) => alert(err.message)
      });
 }

  ngOnInit(): void{
    this.produtoService.getProdutos().subscribe({
      next : (dados) => this.listaProdutos.set(dados),
      error: (err) => console.log(err)
    })
  }
  
  
}
