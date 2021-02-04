import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  


  constructor(private http: HttpClient) {
 
   }


  public getAllBooks(url:string): Observable<any> {
    return this.http.get<any>(url);
  }

  createBook(book: Object): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/api/books`, book);
  }

  
  updateBook(id: number, value: any): Observable<Object> {
    return this.http.put(`${environment.apiUrl}/api/books/${id}`
    , {name:value.name,author:value.author,published_year:value.published_year});
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/books/${id}`, { responseType: 'text' });
  }
  getBookById(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/books/${id}`);
  }
 }
