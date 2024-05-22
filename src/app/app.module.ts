import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes.module";
import { AllBooksComponent } from "./components/all-books/all-books.component";
import { CreateBookComponent } from "./components/create-book/create-book.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        AllBooksComponent,
        CreateBookComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}