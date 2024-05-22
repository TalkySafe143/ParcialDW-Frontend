import { Injectable } from '@angular/core';
import axios from 'axios';
import { Book } from '../../models/Book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  async getAllBooks() {
    try {
      const data = await axios.get("http://localhost:8080/parcial/");
      return data.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async createBook(book: Book) {
    try {
      const data = await axios.post("http://localhost:8080/parcial/", book);
      return data.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
