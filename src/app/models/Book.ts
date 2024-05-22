import { AuthorFame } from "./AuthorFame";
import { BookType } from "./BookType";
import { Status } from "./Status";

export class Book {
    idBook: number;
    name: string;
    author: string;
    createdDate: string;
    editionNumber: number;
    price: number;
    status: Status;
    type: BookType;
    authorFame: AuthorFame;

    constructor(
        idBook: number,
        name: string,
        author: string,
        createdDate: string,
        editionNumber: number,
        price: number,
        status: Status,
        type: BookType,
        authorFame: AuthorFame
    ) {
        this.idBook = idBook;
        this.name = name;
        this.author = author;
        this.createdDate = createdDate;
        this.editionNumber = editionNumber;
        this.price = price;
        this.status = status;
        this.type = type;
        this.authorFame = authorFame;
    }
};