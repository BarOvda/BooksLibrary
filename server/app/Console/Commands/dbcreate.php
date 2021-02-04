<?php

namespace App\Console\Commands;
use Illuminate\Console\Command;

use DB;
use App\Quotation;
use PDO;
class dbcreate extends Command
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    // protected $signature = 'make:dbcreate';
    protected $signature = 'make:database {connection?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';
  
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }


//     protected function getArguments()
// {
//     return [
//         ['name', InputArgument::REQUIRED, 'The name of the database'],
//     ];
// }
    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        //DB::getConnection()->statement('CREATE DATABASE :schema', ['schema' => $this->argument('name')]);

        try{
            $dbname = 'books';
            
                DB::connection('mysql')->select('CREATE DATABASE '. $dbname);
                $this->info("Database '$dbname' created for '$connection' connection");
            }catch (\Exception $e){
            $this->error($e->getMessage());
        }
    }

} 

