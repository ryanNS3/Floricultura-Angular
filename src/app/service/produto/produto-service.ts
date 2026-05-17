import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Produto } from "../@Type/Produto";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {

  private readonly API = "http://localhost:3000/produto"
  httpClient = inject(HttpClient)
  getProdutos(): Observable<Produto[]>{
    return  this.httpClient.get<Produto[]>(this.API).pipe(
      catchError((erro) =>{
        return throwError(()=> new Error("Falha ao buscar os produtos"))
      })
    )
  }

   postProdutos(novoProduto: Produto): Observable<Produto[]>{
    return  this.httpClient.post<Produto[]>(this.API, novoProduto).pipe(
      catchError((erro) =>{
        return throwError(()=> new Error("Falha ao buscar os produtos"))
      })
    ) 
  }

  // Busca um produto específico para preencher o form
getProdutoPorId(id: string): Observable<Produto> {
  return this.httpClient.get<Produto>(`${this.API}/${id}`);
}

// Atualiza o produto completo
updateProduto(id: string | number, produto: Produto): Observable<Produto> {
  return this.httpClient.put<Produto>(`${this.API}/${id}`, produto);
}

   deleteProduto(id: string): Observable<Produto[]>{
    return this.httpClient.delete<Produto[]>(`${this.API}/${id}`).pipe(
      catchError((erro) =>{
        return throwError(()=> new Error("Falha ao buscar os produtos"))
      })
    ) 
  }


}
