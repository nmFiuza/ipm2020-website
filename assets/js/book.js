var logged = getLogged();
var qs = new URLSearchParams(window.location.search);
const isbn = qs.get('id');
const enabled = qs.get('enabled');

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

    console.log(sharingPeople);
for(person of sharingPeople) {
    var li = document.createElement("li");
    li.setAttribute("class", "row message mx-auto");
    var img = document.createElement("img");
    img.setAttribute("class", "person-img");
    img.setAttribute("src", "../img/users/" + person.user.id + ".jpg");    
    var div = document.createElement("div");
    div.setAttribute("class", "person-info");    
    var username = document.createElement("div");
    username.setAttribute("class", "person-name");
    username.innerHTML = person.user.firstname + " " + person.user.surname;  
    var text = document.createElement("div");
    text.setAttribute("class", "person-text");
    const num = person.user.id*3+5*(person.user.id-1)
    text.innerHTML = "Encontra-se a " + num + " km de si.";
    
    var div5 = document.createElement("div");
    var i = document.createElement("i");
    var span2 = document.createElement("span");
    if(person.trades.length > 0) {
        div5.setAttribute("class", "widget-26-availability bg-soft-success");
        i.setAttribute("class", "indicator bg-success");
        span2.setAttribute("class", "text-green");
        span2.innerHTML = "Compatível";
    } else {
        div5.setAttribute("class", "widget-26-availability bg-soft-danger");
        i.setAttribute("class", "indicator bg-danger");
        span2.setAttribute("class", "text-red");
        span2.innerHTML = "Incompatível";
    }

    div5.appendChild(i);
    div5.appendChild(span2);

    div.appendChild(username);
    div.appendChild(text);
    li.appendChild(img);
    li.appendChild(div);
    li.appendChild(div5)
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
            var div = document.createElement("div");
            div.setAttribute("class", "row");
            var img = document.createElement("img");
            img.setAttribute("class", "review-img");
            img.setAttribute("src", "../img/users/" + r.user + ".jpg");    
            var username = document.createElement("div");
            username.setAttribute("class", "review-name");
            username.innerHTML = r.firstname + " " + r.surname;  
            var text = document.createElement("div");
            text.setAttribute("class", "review-text"); 
            text.innerHTML = r.review;
            div.appendChild(img);
            div.appendChild(username);
            li.appendChild(div);
            li.appendChild(text);
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

var wishlistBtn = document.getElementById("wishlist-btn");
if(enabled == 1 || enabled == 2) {
    wishlistBtn.style.display = "none";
}
wishlistBtn.onclick = function() {
    var u = getFromStorage(usersConst);
    for(var user of u.users) {
        if(user.id == logged.id) {
            user.wishlist.push(isbn)
            loadToStorage(usersConst, u);
            window.location.replace("../html/profile.html#lista-desejos");
        }
    }
}

var peopleSharing = document.getElementById("people-sharing");
if(enabled == 1) {
    peopleSharing.style.display = "none";
}

if(enabled == 2 || enabled == 3) {
    reviewBtn.style.display = "none";
}