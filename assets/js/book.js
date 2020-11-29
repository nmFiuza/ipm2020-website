var qs = new URLSearchParams(window.location.search);
const isbn = qs.get('id');

var books = getFromStorage(booksConst);
var book;
for(b of books.books){
    if(b.isbn == isbn)
        book = b
}

var personModal = document.getElementById("person-modal");
var personBtn = document.getElementById("person-btn");
var personClose = document.getElementById("person-close");

personBtn.onclick = function() {
    personModal.style.display = "block";
}

personClose.onclick = function() {
    personModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == personModal) {
        personModal.style.display = "none";
    }
}

var personBtnAdd = document.getElementById("person-btn-add");


document.getElementById("book-isbn").innerHTML = book.isbn;
document.getElementById("book-title").innerHTML = book.name;
document.getElementById("book-author").innerHTML = book.author;
document.getElementById("book-year").innerHTML = book.year;
document.getElementById("book-genres").innerHTML = book.genre;
// document.getElementById("book-synopsis").innerHTML = book.synopsis;

