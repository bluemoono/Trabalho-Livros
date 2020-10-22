import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css']
})
export class LivroInserirComponent{
  @Output() livroAdicionado = new EventEmitter<Livro>();

  nome:string;
  autor:string;
  descricao:string;
  edicao:string;
  isbn:string;


  onAddLivro() {
    //console.log('Livro Adicionado');
    const livros: Livro = {
      nome: this.nome,
      autor:this.autor,
      descricao:this.descricao,
      edicao:this.edicao,
      isbn:this.isbn
    };
    this.livroAdicionado.emit(livros);
  }
}
