
var filter_button = document.getElementById("filter_button");
var dropdown_book = document.getElementById("dropdown_book");
var dropdown_author = document.getElementById("dropdown_author");
var dropdown_year = document.getElementById("dropdown_year");
var dropdown_genre = document.getElementById("dropdown_genre");
var dropdown_isbn = document.getElementById("dropdown_isbn");
var logged = getLogged();
var myAvailableISBN = [];
var myAvailableBooks = getUserBooks(logged.id)[1];
for(var j of myAvailableBooks){
    myAvailableISBN.push(j.isbn);
}
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
    window.location.reload();
}

function clearFilter(){
    filtered_books = catalog_books;
    dropdown_book.value = "";
    dropdown_author.value = "";
    dropdown_year.value = "";
    dropdown_genre.value = "";
    dropdown_isbn.value = "";
    window.location.reload();
}

//Table body to append the book divisions
var tbody = document.getElementById("tbody");
//add items to list
for(var book of filtered_books){
    var title = book.name;
    var author = book.author;
    var genres = book.genre;
    var isbn = book.isbn;
    var year = book.year;
    //Image table division
    var td1 = document.createElement("td");
    td1.setAttribute("style", "margin-left: 0px; width: 10%;")
    var div1 = document.createElement("div");
    div1.setAttribute("class", "widget-26-book-img");
    var img = document.createElement("img");
    img.setAttribute("src", "../img/books/" + isbn + ".jpg");
    div1.appendChild(img);
    td1.appendChild(div1);
    //Book name and author
    var td2 = document.createElement("td");
    td2.setAttribute("style", "margin-left: 0px; width: 38%; text-align: left;");
    var div2 = document.createElement("div");
    div2.setAttribute("class", "widget-26-book-title");
    var a = document.createElement("a");
    a.innerHTML = title;
    a.setAttribute("href", 'book.html?id=' + book.isbn);
    var p1 = document.createElement("p");
    p1.innerHTML = author;
    div2.appendChild(a);
    div2.appendChild(p1);
    td2.appendChild(div2);
    //Book release year
    var td3 = document.createElement("td");
    td3.setAttribute("style", "width: 6%;");
    var div3 = document.createElement("div");
    div3.setAttribute("class", "widget-26-book-info");
    var p2 = document.createElement("p");
    p2.setAttribute("class", "text-muted m-0");
    var span = document.createElement("span");
    span.innerHTML = year;
    span.setAttribute("class", "year");
    p2.appendChild(span);
    div3.appendChild(p2);
    td3.appendChild(div3);
    //Book genres
    var td4 = document.createElement("td");
    td4.setAttribute("style", "width: 21%;");
    var div4 = document.createElement("div");
    div4.setAttribute("class", "widget-26-genre");
    if(genres.length > 2)
        div4.innerHTML = genres[0] + " " + genres[1] + " ...";
    else 
        for(var g of genres)
            div4.innerHTML = g + " ";
    div4.innerHTML = div4.innerHTML.trim();
    td4.appendChild(div4);
    //Compatibility between logged user and the owner of this book;
    var td5 = document.createElement("td");
    td5.setAttribute("style", "width: 15%;");
    var div5 = document.createElement("div");
    var i = document.createElement("i");
    var span2 = document.createElement("span");
    var hasCompatible = false;
    for(var id of catalogDict[isbn]){
        if(id != logged.id){
            var wishlistedItems = getUserBooks(id)[0];
            hasCompatible = wishlistedItems.some(b => myAvailableISBN.includes(b.isbn));
            if(hasCompatible)
                break;
        }
    }
    if(hasCompatible){
        div5.setAttribute("class", "widget-26-availability bg-soft-success");
        i.setAttribute("class", "indicator bg-success");
        span2.innerHTML = "Compatível";
    } else {
        div5.setAttribute("class", "widget-26-availability bg-soft-danger");
        i.setAttribute("class", "indicator bg-danger");
        span2.innerHTML = "Incompatível";
    }
    div5.appendChild(i);
    div5.appendChild(span2);
    td5.appendChild(div5);
    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
}