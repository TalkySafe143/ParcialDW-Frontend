import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../../services/book-service/book-service.service';
import { Status } from '../../models/Status';
import { BookType } from '../../models/BookType';
import { AuthorFame } from '../../models/AuthorFame';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  // idBook: number;
  // name: string;
  // author: string;
  // createdDate: string;
  // editionNumber: number;
  // price: number;
  // status: Status;
  // type: BookType;
  // authorFame: AuthorFame;

  bookForm = new FormGroup({
    idBook: new FormControl(''),
    name: new FormControl(''),
    author: new FormControl(''),
    createdDate: new FormControl(''),
    editionNumber: new FormControl(''),
    price: new FormControl(''),
    status: new FormControl(''),
    type: new FormControl(''),
    authorFame: new FormControl('')
  })

  submitBook() {

    if (!this.bookForm.valid) return;

    this.bookService.createBook({
      idBook: parseInt(this.bookForm.controls.idBook.value || "0"),
      name: this.bookForm.controls.name.value || "",
      author: this.bookForm.controls.author.value || "",
      createdDate: this.bookForm.controls.createdDate.value || "",
      editionNumber: parseInt(this.bookForm.controls.editionNumber.value || "0"),
      price: parseInt(this.bookForm.controls.price.value || "0"),
      status: this.bookForm.controls.status.value as Status,
      type: this.bookForm.controls.type.value as BookType,
      authorFame: this.bookForm.controls.authorFame.value as AuthorFame,
    }).then(e => this.router.navigate([""]));
  }

}
