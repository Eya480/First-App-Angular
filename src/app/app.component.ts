import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksListComponent } from './book-list/book-list.component';
//Décorateur
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= "first-app";
  logo = "https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png";
}
