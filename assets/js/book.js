var logged = getLogged();
var qs = new URLSearchParams(window.location.search);
const isbn = qs.get('id');
var imageBooks = ["123456789", "987654321", "512278208", "591171946", "709026838", "309998648", "200738799", "681860960", "286061548", "772272548", "934683429", "666532112", "534321113", "878633222"];

var books = getFromStorage(booksConst);
var book;
for(b of books.books){
    if(b.isbn == isbn)
        book = b
}

if(!imageBooks.includes(book.isbn))
    document.getElementById("book-img").setAttribute("src", "../img/books/default-book.jpg");
else
    document.getElementById("book-img").setAttribute("src", "../img/books/" + book.isbn + ".jpg");
document.getElementById("book-isbn").innerHTML = book.isbn;
document.getElementById("book-title").innerHTML = book.name;
document.getElementById("book-author").innerHTML = book.author;
document.getElementById("book-year").innerHTML = book.year;
document.getElementById("book-genres").innerHTML = book.genre;
if(book.synopsis == undefined) 
    document.getElementById("book-synopsis").innerHTML = "Sinopse indisponível.";
else
    document.getElementById("book-synopsis").innerHTML = book.synopsis;

var sharingPeople = [];
var usersJSON = getFromStorage(usersConst);
for(user of usersJSON.users) {
    if(user.available.includes(book.isbn) && user.id != logged.id)
        sharingPeople.push({user: user, trades: []});
}

for(person of sharingPeople) {
    for(bookWanted of person.user.wishlist) {
        for(bookAvailable of logged.available) {
            if(bookWanted == bookAvailable && bookWanted != book.isbn)
                person.trades.push(bookWanted)
        }
    }
}

var sharingList = document.getElementById("sharing-list")
if(sharingPeople.length > 0)
    sharingList.removeChild(document.getElementById("no-content-sharing"));

for(person of sharingPeople) {
    var li = document.createElement("li");
    li.setAttribute("class", "row message mx-auto");
    var img = document.createElement("img");
    img.setAttribute("class", "person-img");
    img.setAttribute("src", "../img/placeholder-user.png");    
    var div = document.createElement("div");
    div.setAttribute("class", "person-info");    
    var username = document.createElement("div");
    username.setAttribute("class", "person-name");
    username.innerHTML = person.user.firstname + " " + person.user.surname;  
    var text = document.createElement("div");
    text.setAttribute("class", "person-text");
    const num = person.user.id*3+5*(person.user.id-1)
    text.innerHTML = "Encontra-se a " + num + " km de si.";
    div.appendChild(username);
    div.appendChild(text);
    li.appendChild(img);
    li.appendChild(div);
    sharingList.appendChild(li);
}

var reviewsJSON = getFromStorage(reviewsConst);
var canReview = true;
for(review of reviewsJSON.reviews) {
    if(review.isbn == book.isbn) {
        if(review.reviews.some(rv => rv.user == logged.id))
            canReview = false;
    }
}
var reviewModal = document.getElementById("review-modal");
var reviewBtn = document.getElementById("review-btn");
var reviewClose = document.getElementById("review-close");

reviewBtn.onclick = function() {
    console.log(canReview);
    if(!canReview)
        window.alert("Máximo de 1 review por pessoa.")
    else
        reviewModal.style.display = "block";
}

reviewClose.onclick = function() {
    reviewModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == reviewModal) {
        reviewModal.style.display = "none";
    }
}

var reviewList = document.getElementById("review-list")
for(review of reviewsJSON.reviews) {
    if(review.isbn == book.isbn) {
        reviewList.removeChild(document.getElementById("no-content-reviews"));
        for(r of review.reviews) {
            var li = document.createElement("li");
            li.setAttribute("class", "row message mx-auto");
            var img = document.createElement("img");
            img.setAttribute("class", "person-img");
            img.setAttribute("src", "../img/placeholder-user.png"); 
            var div = document.createElement("div");
            div.setAttribute("class", "person-info");    
            var username = document.createElement("div");
            username.setAttribute("class", "person-name");
            username.innerHTML = r.firstname + " " + r.surname;  
            var text = document.createElement("div");
            text.setAttribute("class", "person-text"); 
            text.innerHTML = r.review;
            div.appendChild(username);
            div.appendChild(text);
            li.appendChild(img);
            li.appendChild(div);
            reviewList.appendChild(li);
        } 
    }
}

var reviewBtnAdd = document.getElementById("review-btn-add");
reviewBtnAdd.onclick = function(){
    var text = document.getElementById("review-text").value;
    if(text == "")
        window.alert("Texto da review vazio. Por favor preencha o campo de texto antes de submeter.")
    else {
        const newReview = {user: logged.id, firstname: logged.firstname, surname: logged.surname, review: text};
        var found = false;
        for(var review of reviewsJSON.reviews) {
            if(review.isbn == book.isbn) {
                review.reviews.push(newReview);
                found = true
            }
        }
        if(!found){
            var newBook = {isbn : book.isbn, reviews : [ newReview ]}
            reviewsJSON.reviews.push(newBook);
        }

        loadToStorage(reviewsConst, reviewsJSON);
        window.location.reload();
    }
}