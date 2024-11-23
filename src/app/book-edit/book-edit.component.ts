import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  @Input() book? : Book;
  @Output() bookEdited = new EventEmitter<Book>();

  editBook(){
    this.bookEdited.emit(this.book);
  }

}
