import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/services/books.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book();
  submitted = false;

  constructor(private booksService: BooksService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.book= new Book();
  }

  save() {
    this.booksService
    .createBook(this.book).subscribe(data => {
      //console.log(data)
      this.book = new Book();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/books']);
  }
}