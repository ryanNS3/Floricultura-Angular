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


}
