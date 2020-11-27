
var filter_button = document.getElementById("filter_button");
var dropdown_book = document.getElementById("dropdown_book");
var dropdown_author = document.getElementById("dropdown_author");
var dropdown_year = document.getElementById("dropdown_year");
var dropdown_genre = document.getElementById("dropdown_genre");
var dropdown_isbn = document.getElementById("dropdown_isbn");
//initial list of the catalog
var catalog_books = [];
//list that suffers the changes with the filtering
var filtered_books = [];
var bookList = getFromStorage(booksConst).books;
var catalogList = getFromStorage(catalogConst).catalog;

//Dictionary with isbn as key and the ids of the people who own such book as value
var catalogDict = getCatalogInfo();

var isBlock = false;
filter_button.addEventListener("click", function(){
    if(!isBlock){
        document.getElementById("dropdown_content").setAttribute("style", "display: block;");
    } else {
        document.getElementById("dropdown_content").setAttribute("style", "display: none;");
    }
    isBlock = !isBlock
})

//Json with full info of the books that are in the dictionary
filtered_books = catalog_books = bookList.filter(b => b.isbn in catalogDict);

function filterBooks(){
    var hasFilter = false
    if(dropdown_book.value){
        filtered_books = filtered_books.filter(b => b.name.toLowerCase().includes(dropdown_book.value.toLowerCase()));
        hasFilter = true;
    }
    if(dropdown_author.value){
        filtered_books = filtered_books.filter(b => b.author.toLowerCase().includes(dropdown_author.value.toLowerCase()));
        hasFilter = true;
    }
    if(dropdown_year.value){
        filtered_books = filtered_books.filter(b => b.year == dropdown_year.value);
        hasFilter = true;
    }
    if(dropdown_genre.value){
        filtered_books = filtered_books.filter(b => b.genre.toLowerCase().includes(dropdown_genre.value.toLowerCase()));
        hasFilter = true;
    }
    if(dropdown_isbn.value){
        filtered_books = filtered_books.filter(b => b.isbn == dropdown_isbn.value);
        hasFilter = true;
    }
    if(!hasFilter){
        filtered_books = catalog_books;
    }
}
