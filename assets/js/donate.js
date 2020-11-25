
const selectedLiClass = " donate-element-selected";

var logged = getLogged();
var points = document.getElementById("ecoPoints");
points.innerHTML = logged.points;
var userBooks = getUserBooks(logged.id);

var donateButton = document.getElementById("donate_button");
if(userBooks[1].length <=0){
    donateButton.disabled = true;
}

//Fill the donatable list with user available books
var donatable = document.getElementById("donatable_list");
for(var book of userBooks[1]){
    var bookISBN = book.isbn;
    //Create the li element
    var li = document.createElement("li");
    li.setAttribute("id", bookISBN);
    li.setAttribute("class", "li-element");
    //Containing div
    var div = document.createElement("div");
    div.setAttribute("class", "donate-element");
    div.addEventListener("click", function(){
        var currentClass = this.getAttribute("class");
        if(currentClass.includes(selectedLiClass)){
            this.setAttribute("class", currentClass.split(" ")[0])
        }else{
            this.setAttribute("class", currentClass + selectedLiClass);
        }
    });
    //Image
    var img = document.createElement("img");
    img.setAttribute("class", "donate-li-img");
    var bookImgPath="../img/books/" + bookISBN + ".jpg";
    img.setAttribute("src", bookImgPath);
    //Informative text
    var subdiv = document.createElement("div");
    subdiv.setAttribute("class", "donate-li-text");
    var title = document.createElement("h4");
    var info = document.createElement("h6");
    title.innerHTML = book.name;
    info.innerHTML = book.author + ", " + book.year; 
    subdiv.appendChild(title);
    subdiv.appendChild(info);
    //Join the elements
    div.appendChild(img);
    div.appendChild(subdiv);
    li.appendChild(div);
    donatable.appendChild(li);
}

donateButton.addEventListener("click", function(){
    var list = document.getElementById("donatable_list");
    if(list.children.length == 0){
        window.alert("Sem livros para doar!");
        return;
    }
    var checkedBooks = [];
    for(var li of list.children)
        if(li.firstChild.getAttribute("class").includes(selectedLiClass))
            checkedBooks.push(li.id);
    if(checkedBooks.length==0)
        window.alert("Nenhum livro selecionado!");
    else{
        removeBooksFromUser(checkedBooks);
        addBooksToEcoRep(checkedBooks);
    }    
        
});


function removeBooksFromUser(checkedBooks){
    var usersJSON = getFromStorage(usersConst);
    for(var user of usersJSON.users){
        if(user.id == logged.id){
            user.available = user.available.filter(b => !checkedBooks.includes(b.toString()));
            user.points += donationWorth*checkedBooks.length;
        }
    }
    loadToStorage(usersConst, usersJSON);
}

function addBooksToEcoRep(checkedBooks){
    var ecorep = getFromStorage(ecorepConst);
    var ecorepBooks = ecorep.ecorep;
    for(var book of ecorepBooks){
        if(checkedBooks.includes(book.isbn.toString())){
            book.qtd++;
            checkedBooks.splice(checkedBooks.indexOf(book.isbn.toString()), 1);
        }
    }
    if(checkedBooks.length > 0){
        for(var isbn of checkedBooks){
            ecorepBooks.push({"isbn" : parseInt(isbn), "qtd" : 1});
        }
    }
    loadToStorage(ecorepConst, ecorep);
    window.location.reload();
}