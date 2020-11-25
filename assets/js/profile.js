
var logged = getLogged();
document.getElementById("user-name").innerHTML = logged.firstname + " " + logged.surname;
document.getElementById("user-email").innerHTML = logged.email;
document.getElementById("user-address").innerHTML = logged.morada;
document.getElementById("user-points").innerHTML = logged.points;

var userBooks = getUserBooks(logged.id);
var sharelist = document.getElementById("share-list");
var wishlist = document.getElementById("wish-list");

if(userBooks[0].length > 0)
    wishlist.removeChild(document.getElementById("no-content-wishlist"));

if(userBooks[1].length > 0)
    sharelist.removeChild(document.getElementById("no-content-sharelist"));

for(var book of userBooks[1]){
    var li = document.createElement("li");
    li.setAttribute("id", book.isbn);
    li.setAttribute("class", "book");
    
    var img = document.createElement("img");
    img.setAttribute("class", "book-img");
    img.setAttribute("src", "../img/books/" + book.isbn + ".jpg");

    var div = document.createElement("div");
    div.setAttribute("class", "book-info");

    var title = document.createElement("div");
    title.setAttribute("class", "book-name");
    title.innerHTML = book.name;

    var info = document.createElement("div");
    info.setAttribute("class", "book-text");
    info.innerHTML = book.author + ", " + book.year;

    div.appendChild(title);
    div.appendChild(info);

    var icon = document.createElement("i");
    icon.setAttribute("id", "trash-" + book.isbn);
    icon.setAttribute("class", "fas fa-trash trash-book");
    icon.addEventListener("click", function() {
        var usersJSON = getFromStorage(usersConst);  
        for(var user of usersJSON.users){
            if(user.id == logged.id){
                user.available = user.available.filter(b => b!=this.getAttribute("id").split("-")[1])
                if(user.available.length){
                    var noContent = document.createElement("div");
                    noContent.setAttribute("id", "no-content-sharelist");
                    var first = document.createElement("div");
                    first.innerHTML = "Sem Conteúdo";
                    var second = document.createElement("div");
                    second.innerHTML = "Clique em '+ Adicionar Livro' para disponibilizar um livro para troca.";
                    noContent.appendChild(first);
                    noContent.appendChild(second);
                    li.appendChild(noContent);
                }
            }
        }
        loadToStorage(usersConst, usersJSON);
        window.location.reload();
    })

    li.appendChild(img);
    li.appendChild(div);
    li.appendChild(icon);
    sharelist.appendChild(li);
}   

for(var book of userBooks[0]){
    var li = document.createElement("li");
    li.setAttribute("id", book.isbn);
    li.setAttribute("class", "book");
    
    var img = document.createElement("img");
    img.setAttribute("class", "book-img");
    img.setAttribute("src", "../img/books/" + book.isbn + ".jpg");

    var div = document.createElement("div");
    div.setAttribute("class", "book-info");

    var title = document.createElement("div");
    title.setAttribute("class", "book-name");
    title.innerHTML = book.name;

    var info = document.createElement("div");
    info.setAttribute("class", "book-text");
    info.innerHTML = book.author + ", " + book.year;

    div.appendChild(title);
    div.appendChild(info);

    var icon = document.createElement("i");
    icon.setAttribute("id", "trash-" + book.isbn);
    icon.setAttribute("class", "fas fa-trash trash-book");
    icon.addEventListener("click", function() {
        var usersJSON = getFromStorage(usersConst);  
        for(var user of usersJSON.users){
            if(user.id == logged.id){
                user.wishlist = user.wishlist.filter(b => b!=this.getAttribute("id").split("-")[1]);
                if(user.wishlist.length){
                    var noContent = document.createElement("div");
                    noContent.setAttribute("id", "no-content-wishlist");
                    var first = document.createElement("div");
                    first.innerHTML = "Sem Conteúdo";
                    var second = document.createElement("div");
                    second.innerHTML = "Clique em '+ Adicionar Livro' para acrescentar um livro que deseje.";
                    noContent.appendChild(first);
                    noContent.appendChild(second);
                    li.appendChild(noContent);
                }
            }
        }
        loadToStorage(usersConst, usersJSON);
        window.location.reload();
    })

    li.appendChild(img);
    li.appendChild(div);
    li.appendChild(icon);
    wishlist.appendChild(li);
}

{/* <li class="book">
    <img src="../img/books/123456789.jpg" class="book-img">
    <div class="book-info">
        <div class="book-name">Harry Potter and the Philosopher's Stone</div>
        <div class="book-text">J. K. Rowling, 1997</div>
    </div>
    <i class="fas fa-trash trash-book"></i>
</li> */}