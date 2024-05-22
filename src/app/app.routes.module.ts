import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { AllBooksComponent } from './components/all-books/all-books.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
export const routes: Routes = [
    { path: '', component: AllBooksComponent },
    { path: 'create', component: CreateBookComponent}
    // { path: 'register', component: MainComponent },
    // { path: 'login', component: LoginComponent},
    // { path: "", canActivate: [jwtGuardGuard], children: [
    //     {path: 'user', component: UserComponent},
    //     { path: 'property/:id', component: PropertyComponent },
    //     { path: 'requestRent/:id', component: RequestRentComponent },
    //     { path: 'myProperties', component: MyPropertiesComponent },
    //     { path: 'requestsAndRents', component: RequestsandrentsComponent },
    //     { path: 'editRequest/:id', component: EditRequestComponent },
    //     { path: 'home', component: HomeComponent,},
    //     { path: 'payRent/:id', component: PayComponent },
    //     { path: 'addProperty', component: AddPropertyComponent}
    //   ]
    // },
    // { path: "**", component: NotFoundComponent }
];
  
@NgModule({
imports: [
    RouterModule.forRoot(routes)
],
exports: [RouterModule]
})
export class AppRoutingModule { }