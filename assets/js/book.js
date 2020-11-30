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
    li.setAttribute("id", person.user.id);
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
        li.addEventListener("click", function(){
            showTradeModal(this);
        });
        li.setAttribute("class", "row message mx-auto compatible-li");
    } else {
        div5.setAttribute("class", "widget-26-availability bg-soft-danger");
        i.setAttribute("class", "indicator bg-danger");
        span2.setAttribute("class", "text-red");
        span2.innerHTML = "Incompatível";
        li.setAttribute("class", "row message mx-auto");
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
            var textDiv = document.createElement("div");
            textDiv.setAttribute("class","col-sm-10");
            div.setAttribute("style", "width: 100%");
            var imgDiv = document.createElement("div");
            imgDiv.setAttribute("class", "col-sm-2");
            //
            var img = document.createElement("img");
            img.setAttribute("class", "review-img");
            img.setAttribute("src", "../img/users/" + r.user + ".jpg");
            //
            var username = document.createElement("div");
            username.setAttribute("class", "review-name");
            username.innerHTML = r.firstname + " " + r.surname;  
            textDiv.appendChild(username);
            //
            var text = document.createElement("div");
            text.setAttribute("class", "review-text"); 
            text.innerHTML = r.review;
            textDiv.appendChild(text);
            //
            imgDiv.appendChild(img);
            div.appendChild(imgDiv);
            div.appendChild(textDiv);
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

//Show the trade modal

var tradeModal = document.getElementById("book_trade");
var tradeClose = document.getElementById("trade_close");
var tradeDiv = document.getElementById("trade_div");

tradeClose.onclick = function() {
    tradeModal.style.display = "none";
}

function showTradeModal(elem){
    var personID = elem.id;
    for(var person of sharingPeople){
        if(person.user.id == personID){
            for(var isbn of person.trades){
                createBookTradeDiv(isbn);
            }
            break;
        }
    }
    tradeModal.style.display = "block";
}

function createBookTradeDiv(isbn){
    tradeDiv.innerHTML = "";
    //My book for trading
    var td1 = document.createElement("td");
    td1.setAttribute("style", "margin-left: 0px; width: 30%;")
    var div1 = document.createElement("div");
    div1.setAttribute("class", "trade-img");
    var img = document.createElement("img");
    img.setAttribute("src", "../img/books/" + isbn + ".jpg");
    img.setAttribute("style", "object-fit: cover; float: left;");
    div1.appendChild(img);
    td1.appendChild(div1);
    //Trade arrows image
    var td2 = document.createElement("td");
    td2.setAttribute("style", "margin-left: 0px; width: 30%;")
    var div2 = document.createElement("div");
    div2.setAttribute("class", "trade-arrows");
    var img2 = document.createElement("img");
    img2.setAttribute("src", "../img/transfer-arrows.jpg");
    img2.setAttribute("style", "object-fit: cover;");
    div2.appendChild(img2);
    td2.appendChild(div2);
    //Trader's book for trading
    var td3 = document.createElement("td");
    td3.setAttribute("style", "margin-left: 0px; width: 30%;")
    var div3 = document.createElement("div");
    div3.setAttribute("class", "trade-img");
    var img3 = document.createElement("img");
    img3.setAttribute("src", "../img/books/" + book.isbn + ".jpg");
    img3.setAttribute("style", "object-fit: cover; float: right;");
    div3.appendChild(img3);
    td3.appendChild(div3);
    var tr = document.createElement("tr");
    tr.setAttribute("class", "trade-row");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.addEventListener("click", function(){
        tradeCompletion(this);
    })
    tradeDiv.appendChild(tr);
}

//Trade completion phase

var tradeCompletionModal = document.getElementById("trade_completion");
var tradeCompletionClose = document.getElementById("trade_completion_close");
var tradeContainer = document.getElementById("trade-container");

tradeCompletionClose.onclick = function() {
    tradeCompletionModal.style.display = "none";
}

function tradeCompletion(tr){
    //Trade chosen schematic
    tradeContainer.innerHTML = "";
    var tradeTable = document.createElement("table");
    var tbody = document.createElement("tbody");
    tbody.innerHTML = tr.innerHTML;
    tradeTable.appendChild(tbody);
    tradeModal.style.display = "none";
    tradeCompletionModal.style.display = "block";
    //Trade area
    var text_area = document.createElement("textarea");
    text_area.setAttribute("id", "trade_message");
    text_area.setAttribute("rows", "5");
    text_area.setAttribute("class", "model-input");
    text_area.setAttribute("placeholder", "Escreva aqui a sua mensagem");
    text_area.setAttribute("style", "width: 100%");
    text_area.innerHTML = "Olá estou interessado nesta troca.\n\nAceitaria este livro?"
    //Button
    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "submit-trade");
    buttonDiv.setAttribute("class", "add-btn-modal");
    var buttonElem = document.createElement("div");
    buttonElem.setAttribute("class", "add-btn-sign");
    buttonElem.innerHTML = "Enviar Pedido";
    buttonDiv.appendChild(buttonElem);
    buttonDiv.addEventListener("click", function(){
        tradeAccepted(this);
    })
    //---
    tradeContainer.appendChild(tradeTable);
    tradeContainer.appendChild(text_area);
    tradeContainer.appendChild(buttonDiv);
}

//Trade sent phase

var tradeAcceptedModal = document.getElementById("trade_accepted");
var tradeAcceptedClose = document.getElementById("trade_accepted_close");
var tradeContainer = document.getElementById("trade-container");


tradeAcceptedClose.onclick = function(){
    tradeAcceptedModal.style.display = "none";
}

function tradeAccepted(){
    tradeCompletionModal.style.display = "none";
    tradeAcceptedModal.style.display = "block";
}

//Close modals

window.onclick = function(event) {
    if (event.target == tradeModal || event.target == tradeCompletionModal || event.target == tradeAcceptedModal) {
        tradeModal.style.display = "none";
        tradeCompletionModal.style.display = "none";
        tradeAcceptedModal.style.display = "none";
    }
}

function goBackModal(){
    tradeCompletionModal.style.display = "none";
    tradeModal.style.display = "block";
}
