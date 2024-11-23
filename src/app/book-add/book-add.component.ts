import { Component, EventEmitter, Input, Output } from '@angular/core';
import { last } from 'rxjs';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  @Input() lastId? : number;
  @Output() bookAdded = new EventEmitter<Book>();
  
  
  addBook(title : string, author : string, price : number){
    const newBook = new Book(this.lastId! + 1, title, author, price)
    this.bookAdded.emit(newBook);
  }

}
