import { Component, OnInit, Input } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit {
  /*livros =[{
    nome:'Trono de vidro',
    autor:'Sarah J. Mass',
    descricao: 'Cinderela de Assassinos',
    edicao: '1',
    isbn: '103948102'
  },
  {
    nome:'A chave do tamanho de fadas',
    autor:'Monteiro Lobato',
    descricao: 'encolhimento e confusão',
    edicao: '3',
    isbn: '1791375987'
  }
];*/

  @Input() livros: Livro[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
