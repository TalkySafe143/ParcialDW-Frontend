import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {

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

  submitBook() {}
  
}
