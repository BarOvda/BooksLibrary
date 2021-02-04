import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BooksService } from 'src/services/books.service';
import { Book } from "../models/Book";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  baseUrl:string = `${environment.apiUrl}/api/books`;
  perPage:number = 5;
  books:Book[];
  currentPage:number;
  lastPage:String;
  total:number;
  constructor(private booksService: BooksService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData(this.baseUrl);
  }

  reloadData(url:string) {
     this.booksService.getAllBooks(url).subscribe(res=>{
      this.books = res.data;
      this.currentPage = +res.current_page;
      this.lastPage = res.last_page;
      this.total = +res.total;
    });
    console.log(this.books);
  }

  deleteBook(id: number) {
    this.booksService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData(this.baseUrl);
        },
        error => console.log(error));
  }
  updateBook(id: number) {
    this.router.navigate([`/update`,id]);
  }
  handlePageChange(event) {
    this.currentPage = event;
    this.reloadData(this.baseUrl+`?page=${this.currentPage}`);

  }
}