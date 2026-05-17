import { Component, inject } from "@angular/core";
import { Produto } from "../../../service/@Type/Produto";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ProdutoService } from "../../../service/produto/produto-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-criar-produto",
  imports: [ReactiveFormsModule],
  templateUrl: "./criar-produto.html",
  styleUrl: "./criar-produto.css",
})
export class CriarProduto {
  private service = inject(ProdutoService)
  private router = inject(Router)
  criarProdutoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl(0, [Validators.required, Validators.min(1)]),
    qtd_estoque: new FormControl(0, [Validators.required]),
    tipo: new FormControl('Planta'),
    img: new FormControl('', [Validators.required]),
     // Valor padrão se quiser
  })
  adicionarProduto(){
    if (this.criarProdutoForm.valid){
      const novoProduto = this.criarProdutoForm.value as Produto
      this.service.postProdutos(novoProduto).subscribe({
        next: ()=>{
          alert("Produto criado com sucesso")
          this.router.navigate(["/admin/home"])
        },
        error: (err) => console.error(err)
      })
    }
    else{
      alert("Preencha os campos corretamente")
    }

   
  }
}
