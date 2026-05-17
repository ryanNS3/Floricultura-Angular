import { Component, inject, OnInit } from "@angular/core";
import { Produto } from "../../../service/@Type/Produto";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ProdutoService } from "../../../service/produto/produto-service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: "app-ver-produto",
  imports: [ReactiveFormsModule],
  templateUrl: "./ver-produto.html",
  styleUrl: "./ver-produto.css",
})
export class VerProduto implements OnInit {
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private service = inject(ProdutoService)
  idProduto : string | null = null
  ProdutoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl(0, [Validators.required, Validators.min(1)]),
    qtd_estoque: new FormControl(0, [Validators.required]),
    tipo: new FormControl('Planta'),
    img: new FormControl('', [Validators.required]),
     // Valor padrão se quiser
  })

  ngOnInit(): void {
      this.idProduto = this.route.snapshot.paramMap.get('id')

      if (this.idProduto){
        this.service.getProdutoPorId(this.idProduto).subscribe({
          next: (produto) =>{
            this.ProdutoForm.patchValue(produto)
          }
        })
      }
  }

   salvar(){
        if (this.idProduto && this.ProdutoForm.valid){
          const dadosAtualizados = this.ProdutoForm.value as Produto

          this.service.updateProduto(this.idProduto, dadosAtualizados).subscribe({
            next: () =>{
              alert('Produto atualizado!')
              this.router.navigate(['/admin/home'])
            }
          })
        }
      }
}


