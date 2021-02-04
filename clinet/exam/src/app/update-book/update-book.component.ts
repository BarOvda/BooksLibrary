import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/services/books.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {


  id: number;
  book: Book;

  constructor(private route: ActivatedRoute,private router: Router,
    private booksService: BooksService) { }

  ngOnInit() {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.booksService.getBookById(this.id)
      .subscribe(data => {
        this.book = data;
        console.log(this.book)
      }, error => console.log(error));
  }

  updateBook() {

    this.booksService.updateBook(this.id, this.book).toPromise().then(cb=>this.gotoList());

  }

  onSubmit() {

    this.updateBook();    
  }

  gotoList() {
    this.router.navigate(['/books']);
  }
}
