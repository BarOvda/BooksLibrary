<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('author');
            $table->integer('published_year');
            $table->timestamps();
        });


        $data = [
            [ 'name' => 'The Great Gatsby',
            'author' => 'F. Scott Fitzgerald',
            'published_year' => 1925],
            ['name' => 'The Grapes of Wrath',
            'author' => 'John Steinbeck',
            'published_year' => 1939],
            ['name' => 'Nineteen Eighty-Four',
            'author' => 'George Orwell',
            'published_year' => 1949],['name' => 'Ulysses',
            'author' => 'James Joyce',
            'published_year' => 1918],['name' => 'Catch-22',
            'author' => 'Joseph Heller',
            'published_year' => 1961],['name' => 'The Catcher in the Rye',
            'author' => 'J. D. Salinger',
            'published_year' => 1951],['name' => 'Lolita',
            'author' => 'Vladimir Nabokov',
            'published_year' => 1955]
          
        ];
        DB::table('books')->insert($data);
          
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('book');
    }
}
