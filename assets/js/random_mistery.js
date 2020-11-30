var logged = getLogged();
var userPoints = logged.points;
var points = document.getElementById("ecoPoints");
points.innerHTML = userPoints;
var userBooks = getUserBooks(logged.id);
var ecorep = getFromStorage(ecorepConst);
var books = ecorep.ecorep;

var numIter = Math.floor(Math.random() * 100) + 25;
var counter = 0;

//Check if there are inputs for a chosen author/genre
var chosenAuthor = getFromStorage(singleAuthorConst);
var chosenGenre = getFromStorage(singleGenreConst);
var selectedBook = getFromStorage(selectedBookConst);
if(selectedBook){
    books = books.filter(b => b.isbn == selectedBook);
    numIter = 2;
} else if(chosenAuthor){//different from empty
    books = books.filter(b => b.author == chosenAuthor);
    numIter = Math.floor(Math.random() * books.length * 2) + 10;
} else if (chosenGenre){
    books = books.filter(b => b.genre.includes(chosenGenre));
    numIter = Math.floor(Math.random() * books.length * 2) + 10;
}

var randimg = document.getElementById("randimg");
var randomizedBook;

var listedBooks = []
userBooks[1].forEach(element => {
    listedBooks.push(element.isbn);
});

function displayNextImage() {
    if (++counter >= numIter) {
        clearInterval(imgRandTime);
        while (listedBooks.includes(randomizedBook)) {
            randomizedBook = books[++counter % (books.length)].isbn;
            randimg.src = "../img/books/" + randomizedBook + ".jpg";
        }
        document.getElementById("confirm_mystery").setAttribute("style", "margin: 50px;");
        console.log(randomizedBook);
        loadToStorage(selectedBookConst, randomizedBook);
        return;
    }
    randomizedBook = books[counter % (books.length)].isbn;
    if(imageBooks.includes(randomizedBook)){
        randimg.src = "../img/books/" + randomizedBook + ".jpg";
    } else {
        randimg.src = "../img/books/default-book.jpg";
    }
    
}
var imgRandTime = setInterval(displayNextImage, 30);

function confirmOrder() {
    var alteredBook;
    for (var i = 0; i < books.length; i++) {
        if (books[i].isbn == randomizedBook) {
            --books[i].qtd;
            alteredBook = books[i];
            break;
        }
    }
    var j;
    for (j = 0; j < ecorep.ecorep.length; j++){
        if(ecorep.ecorep[j].isbn == alteredBook.isbn){
            break;
        }
    }
    if(ecorep.ecorep[j].qtd == 0){
        ecorep.ecorep.splice(j,1);
    } else {
        ecorep.ecorep[j] = alteredBook;
    }
    loadToStorage(singleAuthorConst, "");
    loadToStorage(singleGenreConst, "");
    loadToStorage(selectedBookConst, "");
    loadToStorage(ecorepConst, ecorep);
    askToAddToLibrary();
    window.location.href = "ecorep.html";
}
function askToAddToLibrary() {
    if (window.confirm("Quer adicionar o livro à sua lista de partilha?")) {
        var usersJSON = getFromStorage(usersConst);
        var catalogInfo = getFromStorage(catalogConst);
        var catalog = catalogInfo.catalog;
        for (var user of usersJSON.users)
            if (user.id == logged.id) {
                user.available.push(randomizedBook);
                if(user.wishlist.includes(randomizedBook))
                    user.wishlist.splice(user.wishlist.indexOf(randomizedBook),1);
                break;
            }
        var bookExisted = false;
        for(var c of catalog){
            if(c.isbn == randomizedBook){
                c.ids.push(logged.id);
                bookExisted = true;
                break;
            }
        }
        if(!bookExisted){
            catalog.push( {"isbn" : randomizedBook, "ids" : [logged.id] } )
        }
        loadToStorage(usersConst, usersJSON);
    }
}