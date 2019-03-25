import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: './modal.html') {
    this.modalRef = this.modalService.show(template);
  }
  noticias = [];
  titulo = '';
  descricao = '';
  date = '';
  checkbox = '';
  categorias = ['cat1','cat2'];
  tags = ['tag1','tag2'];
  radio = String;
  selectCategoria = String;
  selectTags = [];
  editoria = String;
  

  mostrar(noticia) {
    noticia.visivel = true;
  }

  fechar(noticia) {
    noticia.visivel = false;
  }

  cadastrar() {
    const noticia = {
      id: this.noticias.length, 
      titulo: this.titulo,
      descricao: this.descricao, 
      date: this.date, 
      checkbox: this.checkbox,
      categoria: this.selectCategoria,
      tags: this.selectTags,
      editoria: this.radio, 
      visivel: false
    };
    this.noticias.push(noticia);
    this.titulo = null;
    this.descricao = null;
    this.date = null;
    this.checkbox = null;
    this.categorias = ['cat1','cat2'];
    this.tags = ['tag1','tag2'];
    
   }

 

  excluir(noticia) {
    if (confirm("Tem certeza que deseja excluir a notícia: ${noticia.titulo} ?")) {
      this.noticias.splice(this.noticias.findIndex(n => n.id === noticia.id), 1);
    }
  }

  editar(noticia){
    this.titulo = noticia.titulo;
    this.descricao = noticia.descricao;
    this.date = noticia.date;
    this.checkbox = noticia.checkbox;
    this.categorias = ['cat1','cat2'];
    this.tags = ['tag1','tag2'];
    this.noticias.splice(noticia);
  }
}