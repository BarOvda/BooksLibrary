<?php

namespace App\Http\Controllers\Api;
use App\Models\Book;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function getAllBooks() {

        $books = Book::paginate(5);
        return response($books, 200);
      }

      public function getBook($id) {
        if (Book::where('id', $id)->exists()) {
          $book = Book::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
          return response($book, 200);
        } else {
          return response()->json([
            "message" => "Book not found"
          ], 404);
        }
      }

      public function createBook(Request $request) {
        $book = new Book;
        $book->name = $request->name;
        $book->author = $request->author;
        $book->published_year = $request->published_year;
        $book->save();
        
        return response()->json([
          "message" => "Book record created"
        ], 201);
      }

      public function updateBook(Request $request, $id) {
        if (Book::where('id', $id)->exists()) {
          $book = Book::find($id);
          if(!is_null($request->name))
            $book->name=$request->name;
          if(!is_null($request->author))
            $book->author=$request->author;
          if(!is_null($request->published_year))
            $book->published_year=$request->published_year;
          error_log($book);
          $book->save();
  
          return response()->json([
            "message" => "records updated successfully"
          ], 200);
        } else {
          return response()->json([
            "message" => "Book not found"
          ], 404);
        }
      }

      public function deleteBook ($id) {
        if(Book::where('id', $id)->exists()) {
          $book = Book::find($id);
          $book->delete();
  
          return response()->json([
            "message" => "records deleted"
          ], 202);
        } else {
          return response()->json([
            "message" => "Book not found"
          ], 404);
        }
      }
}
