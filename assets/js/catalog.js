
const numberPerPage = 6;
var currentPage = 0;

var filter_button = document.getElementById("filter_button");
var dropdown_book = document.getElementById("dropdown_book");
var dropdown_author = document.getElementById("dropdown_author");
var dropdown_year = document.getElementById("dropdown_year");
var dropdown_genre = document.getElementById("dropdown_genre");
var dropdown_isbn = document.getElementById("dropdown_isbn");
var logged = getLogged();
var myAvailableISBN = [];
var myAvailableBooks = getUserBooks(logged.id)[1];
var myWishlistBooks = getUserBooks(logged.id)[0];
console.log(myAvailableBooks);
console.log(myWishlistBooks);
for (var j of myAvailableBooks) {
    myAvailableISBN.push(j.isbn);
}
//initial list of the catalog
var catalog_books = [];
//list that suffers the changes with the filtering
var filtered_books = [];
var bookList = getFromStorage(booksConst).books;
var catalogList = getFromStorage(catalogConst).catalog;
//Table body to append the book divisions
var tbody = document.getElementById("tbody");

//Dictionary with isbn as key and the ids of the people who own such book as value
var catalogDict = getCatalogInfo();

var isBlock = false;
filter_button.addEventListener("click", function () {
    if (!isBlock) {
        document.getElementById("dropdown_content").setAttribute("style", "display: block;");
    } else {
        document.getElementById("dropdown_content").setAttribute("style", "display: none;");
    }
    isBlock = !isBlock
})

//Json with full info of the books that are in the dictionary
filtered_books = catalog_books = bookList.filter(b => b.isbn in catalogDict);

function filterBooks() {
    var hasFilter = false
    filtered_books = catalog_books;
    if (dropdown_book.value) {
        filtered_books = filtered_books.filter(b => b.name.toLowerCase().includes(dropdown_book.value.toLowerCase()));
        hasFilter = true;
    }
    if (dropdown_author.value) {
        filtered_books = filtered_books.filter(b => b.author.toLowerCase().includes(dropdown_author.value.toLowerCase()));
        hasFilter = true;
    }
    if (dropdown_year.value) {
        filtered_books = filtered_books.filter(b => b.year == dropdown_year.value);
        hasFilter = true;
    }
    if (dropdown_genre.value) {
        filtered_books = filtered_books.filter(b => b.genre.map(v => v.toLowerCase()).includes(dropdown_genre.value.toLowerCase()));
        hasFilter = true;
    }
    if (dropdown_isbn.value) {
        filtered_books = filtered_books.filter(b => b.isbn.includes(dropdown_isbn.value));
        hasFilter = true;
    }
    if (!hasFilter) {
        filtered_books = catalog_books;
    }
    if (filtered_books.length <= 0) {
        tbody.innerHTML = "Sem Resultados";
        create_Pagination();
    } else {
        loadList();
    }
    document.getElementById("dropdown_content").setAttribute("style", "display: none;");
    isBlock = false;
}

function clearFilter() {
    filtered_books = catalog_books;
    dropdown_book.value = "";
    dropdown_author.value = "";
    dropdown_year.value = "";
    dropdown_genre.value = "";
    dropdown_isbn.value = "";
    currentPage = 0;
    loadList();
}
loadList();
//add items to list
function loadList() {
    tbody.innerHTML = "";
    console.log();
    var startValue = currentPage * numberPerPage;
    var endValue = (filtered_books.length - startValue) / numberPerPage > 0 ? startValue + numberPerPage : filtered_books.length - startValue;
    var perPageBooks = filtered_books.slice(startValue, endValue);
    for (var book of perPageBooks) {
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
        img.setAttribute("style", "object-fit: cover;");
        div1.appendChild(img);
        td1.appendChild(div1);
        //Book name and author
        var td2 = document.createElement("td");
        td2.setAttribute("style", "margin-left: 0px; width: 38%; text-align: left;");
        var div2 = document.createElement("div");
        div2.setAttribute("class", "widget-26-book-title");
        var a = document.createElement("a");
        a.innerHTML = title;
        
        var hasBookAvailable = myAvailableBooks.some(bk => bk.isbn == isbn);
        var hasBookWishlist = myWishlistBooks.some(bk => bk.isbn == isbn);
        var enabled;
        if(!hasBookAvailable && !hasBookWishlist)
            enabled = 3;
        else if(hasBookAvailable)
            enabled = 1;
        else if(hasBookWishlist)
            enabled = 2;

        a.setAttribute("href", 'book.html?id=' + book.isbn + "&enabled=" + enabled);
        var p1 = document.createElement("p");
        p1.setAttribute("style", "font-size: 12px;")
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
        if (genres.length > 2)
            div4.innerHTML = genres[0] + " " + genres[1] + " ...";
        else
            for (var g of genres)
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
        for (var id of catalogDict[isbn]) {
            if (id != logged.id) {
                var wishlistedItems = getUserBooks(id)[0];
                hasCompatible = wishlistedItems.some(b => myAvailableISBN.includes(b.isbn));
                if (hasCompatible)
                    break;
            }
        }
        if (hasCompatible) {
            div5.setAttribute("class", "widget-26-availability bg-soft-success");
            i.setAttribute("class", "indicator bg-success");
            span2.innerHTML = "Compatível";
        } else {
            div5.setAttribute("class", "widget-26-availability bg-soft-danger");
            i.setAttribute("class", "indicator bg-danger");
            span2.innerHTML = "Incompatível";
        }
        if(hasBookAvailable){
            div5.setAttribute("style", "display: none;");
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
    create_Pagination();
}

function create_Pagination() {
    var numberOfPaginationButtons = Math.ceil(filtered_books.length / numberPerPage);
    var pagination_ul = document.getElementById("pagination_ul");
    pagination_ul.innerHTML = "";
    if (filtered_books.length > 0) {
        //Previous Button
        var liPrev = document.createElement("li");
        liPrev.setAttribute("class", "page-item");
        var aPrev = document.createElement("a");
        aPrev.setAttribute("class", "page-link no-border");
        aPrev.setAttribute("href", "#");
        aPrev.addEventListener("click", function () {
            goPrev()
        });
        var spanPrev = document.createElement("span");
        spanPrev.innerHTML = "Previous";
        aPrev.appendChild(spanPrev);
        liPrev.appendChild(aPrev);
        pagination_ul.appendChild(liPrev);
        //Buttons in between
        for (var l = 0; l < numberOfPaginationButtons; l++) {
            var liSpec = document.createElement("li");
            liSpec.setAttribute("class", "page-item");
            var aSpec = document.createElement("a");
            aSpec.setAttribute("id", l);
            aSpec.setAttribute("class", "page-link no-border");
            aSpec.setAttribute("href", "#");
            aSpec.addEventListener("click", function () {
                changeToSpecific(this)
            });
            var spanSpec = document.createElement("span");
            spanSpec.innerHTML = l + 1;
            aSpec.appendChild(spanSpec);
            liSpec.appendChild(aSpec);

            pagination_ul.appendChild(liSpec);
        }
        //Next Button
        var liNext = document.createElement("li");
        liNext.setAttribute("class", "page-item");
        var aNext = document.createElement("a");
        aNext.setAttribute("class", "page-link no-border");
        aNext.setAttribute("href", "#");
        aNext.addEventListener("click", function () {
            goNext()
        });
        var spanNext = document.createElement("span");
        spanNext.innerHTML = "Next";
        aNext.appendChild(spanNext);
        liNext.appendChild(aNext);
        pagination_ul.appendChild(liNext);
    }
}

function goPrev() {
    if (currentPage == 0) {
        return
    } else {
        currentPage -= 1;
    }
    loadList()
}

function goNext() {
    var numberOfPaginationButtons = Math.ceil(filtered_books.length / numberPerPage);
    currentPage = (currentPage + 1) % (numberOfPaginationButtons) ? currentPage + 1 : currentPage;
    loadList();
}

function changeToSpecific(elem) {
    currentPage = parseInt(elem.id);
    loadList();
}