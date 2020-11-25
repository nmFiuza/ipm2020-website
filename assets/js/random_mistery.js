var logged = getLogged();
var userPoints = logged.points;
var points = document.getElementById("ecoPoints");
points.innerHTML = userPoints;
var userBooks = getUserBooks(logged.id);
var books = getFromStorage(booksConst).books;

var numIter = Math.floor(Math.random() * 100) + 25;
var counter = 0;

var randimg = document.getElementById("randimg");
var randomizedBook;

var listedBooks = []
userBooks[1].forEach(element => {
    listedBooks.push(element.isbn);
});

function displayNextImage() {
    if(++counter>=numIter){
        clearInterval(imgRandTime);
        while(listedBooks.includes(randomizedBook)){
            randomizedBook = books[++counter%(books.length)].isbn;
            randimg.src = "../img/books/" + randomizedBook  +".jpg";
        }
        document.getElementById("confirm_mystery").setAttribute("style", "margin: 50px;");
        return;
    }
    randomizedBook = books[counter%(books.length)].isbn
    randimg.src = "../img/books/" + randomizedBook  +".jpg";
}
var imgRandTime = setInterval(displayNextImage, 30);

function confirmOrder(){
    var usersJSON = getFromStorage(usersConst);
    for(var user of usersJSON.users)
        if(user.id == logged.id){
            user.available.push(randomizedBook);
            break;
        }
            
    loadToStorage(usersConst, usersJSON);
    window.location.href = "ecorep.html";
}