import { Component } from '@angular/core';
import { BookService } from '../../services/book-service/book-service.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent {
  books: any[] = [];

  constructor(
    private bookService: BookService
  ) {
    this.bookService.getAllBooks().then(data => this.books = data).catch(e => console.error(e));
  }

}
