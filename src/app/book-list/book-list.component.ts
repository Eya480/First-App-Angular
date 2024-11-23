import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../model/book';
import { BookEditComponent } from '../book-edit/book-edit.component';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent, BookEditComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BooksListComponent {
  title = "Liste des nouveaux livres :";
  bookToEdit = new Book(0, '', '', 0);
  books = [
    new Book(1, "Atomic Habits", "James Clear", 35),
    new Book(2, "The slight edge", "Jeff Olsen", 30),
    new Book(3, "Power of habits", "Charles Duhigg", 25)
  ]


  action = "";

  changeAction(action : string){
    this.action = action;
  }

  addBook(book : Book){
    this.books = [...this.books, book];
    this.changeAction("");
  }

  showEditForm(book : Book){
    this.changeAction("edit");
    this.bookToEdit = book;
    console.log(this.bookToEdit);
  }

  editBook(book : Book){
    this.books = this.books.map(currentBook => currentBook.id === book.id ? book : currentBook)
    this.changeAction("");
  }

  deleteBook(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer le livre?"))
      this.books = this.books.filter(currentBook => currentBook.id !== id)
  }

}
