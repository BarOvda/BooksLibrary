import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BooksService } from '../services/books.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './books-list/books-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BooksListComponent,
    CreateBookComponent,
    UpdateBookComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule ,
    FormsModule,
    NgxPaginationModule
    
    
    
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
