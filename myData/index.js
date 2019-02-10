//To run the application, type:

//node index.js


const goodreads = require('goodreads-quote-scraper');
 
goodreads('terry pratchett', 40, true);

//To batch quote scraping from a number of authors

//getQuotes();
 
async function getQuotes(){
  try{
    await goodreads('ralph waldo emerson', 2);
    await goodreads('bill bryson', 5);
    await goodreads('harper lee', 1);
  }
  catch(err){
    console.log(err);
  }
}