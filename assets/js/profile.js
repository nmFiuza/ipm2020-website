
var logged = getLogged();
document.getElementById("user-name").innerHTML = logged.firstname + " " + logged.surname;
document.getElementById("user-email").innerHTML = logged.email;
document.getElementById("user-address").innerHTML = logged.morada;
document.getElementById("user-points").innerHTML = logged.points;

var userBooks = getUserBooks(logged.id);
var sharelist = document.getElementById("share-list");
var wishlist = document.getElementById("wish-list");

document.getElementById("profile_pic").setAttribute("src", "../img/users/" + logged.id + ".jpg")

if(userBooks[0].length > 0)
    wishlist.removeChild(document.getElementById("no-content-wishlist"));

if(userBooks[1].length > 0)
    sharelist.removeChild(document.getElementById("no-content-sharelist"));

    for(var book of userBooks[1]) {
        var li = document.createElement("li");
        li.setAttribute("id", book.isbn);
        li.setAttribute("class", "book");
        //Image
        var img = document.createElement("img");
        img.setAttribute("class", "book-img");
        if (!imageBooks.includes(book.isbn)) {
            img.setAttribute("src", "../img/books/default-book.jpg");
        } else {
            img.setAttribute("src", "../img/books/" + book.isbn + ".jpg");
        }
        //Book info
        var div = document.createElement("div");
        div.setAttribute("class", "book-info");
    
        var title = document.createElement("a");
        title.setAttribute("class", "book-name");
        title.setAttribute("href", 'book.html?id=' + book.isbn + "&enabled=1");
        title.innerHTML = book.name;
    
        var info = document.createElement("div");
        info.setAttribute("class", "book-text");
        info.innerHTML = book.author + ", " + book.year;
    
        div.appendChild(title);
        div.appendChild(info);
        //trash can
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
        //Setup rows and cols
        var row = document.createElement("div");
        row.setAttribute("class", "row align-items-center");
        row.setAttribute("style", "width: 100%;");
        var col1 = document.createElement("div");
        col1.setAttribute("class", "col-sm-2");
        col1.setAttribute("style", "height: 100%;");
        var col2 = document.createElement("div");
        col2.setAttribute("class", "col-sm-8");
        var col3 = document.createElement("div");
        col3.setAttribute("class", "col-sm-2");
        col3.setAttribute("style", "text-align:center");
        //append everything
        col1.appendChild(img);
        col2.appendChild(div);
        col3.appendChild(icon);
        row.append(col1);
        row.append(col2);
        row.append(col3);
        li.appendChild(row);
        sharelist.appendChild(li);
    }   

for(var book of userBooks[0]){
    var li = document.createElement("li");
    li.setAttribute("id", book.isbn);
    li.setAttribute("class", "book");
    
    var img = document.createElement("img");
    img.setAttribute("class", "book-img");
    if (!imageBooks.includes(book.isbn)) {
        img.setAttribute("src", "../img/books/default-book.jpg");
    } else {
        img.setAttribute("src", "../img/books/" + book.isbn + ".jpg");
    }

    var div = document.createElement("div");
    div.setAttribute("class", "book-info");

    var title = document.createElement("a");
    title.setAttribute("class", "book-name");
    title.setAttribute("href", 'book.html?id=' + book.isbn + "&enabled=2");
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

    //Setup rows and cols
    var row = document.createElement("div");
    row.setAttribute("class", "row align-items-center");
    row.setAttribute("style", "width: 100%;");
    var col1 = document.createElement("div");
    col1.setAttribute("class", "col-sm-2");
    col1.setAttribute("style", "height: 100%;");
    var col2 = document.createElement("div");
    col2.setAttribute("class", "col-sm-8");
    var col3 = document.createElement("div");
    col3.setAttribute("class", "col-sm-2");
    col3.setAttribute("style", "text-align:center");
    //append everything
    col1.appendChild(img);
    col2.appendChild(div);
    col3.appendChild(icon);
    row.append(col1);
    row.append(col2);
    row.append(col3);
    li.appendChild(row);
    wishlist.appendChild(li);
}

var shareModal = document.getElementById("share-modal");
var shareBtn = document.getElementById("share-btn");
var shareClose = document.getElementById("share-close");

var wishModal = document.getElementById("wish-modal");
var wishBtn = document.getElementById("wish-btn");
var wishClose = document.getElementById("wish-close");

shareBtn.onclick = function() {
    shareModal.style.display = "block";
}

shareClose.onclick = function() {
    shareModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == shareModal) {
        shareModal.style.display = "none";
    }
}

wishBtn.onclick = function() {
    wishModal.style.display = "block";
}

wishClose.onclick = function() {
    wishModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == wishModal) {
        wishModal.style.display = "none";
    }
}

var shareBtnAdd = document.getElementById("share-btn-add");
var wishBtnAdd = document.getElementById("wish-btn-add");

shareBtnAdd.onclick = function(){
    var isbn = document.getElementById("share-isbn").value;
    var title = document.getElementById("share-title").value;
    var author = document.getElementById("share-author").value;
    var year = document.getElementById("share-year").value;
    var genre = document.getElementById("share-genres").value;

    if(isbn == "" || title == "" || author == "" || year == "" || genre == "")
        window.alert("Campos não preenchidos!")
    else {
        year = parseInt(year);
        var u = getFromStorage(usersConst);
        for(var user of u.users){
            if(user.id == logged.id){
                if(user.available.includes(isbn))
                    window.alert("Este livro já se encontra na sua lista de partilha!")
                else if(user.wishlist.includes(isbn))
                    window.alert("Não pode ter o mesmo livro em ambas as listas!")
                else{
                    user.available.push(isbn)
                    loadToStorage(usersConst, u);
                
                    var b = getFromStorage(booksConst);
                    if(b.books.filter(bk => bk.isbn == isbn).length === 0){
                        var book = {"name": title, 
                                    "author": author,
                                    "year": year,
                                    "genre": [genre],
                                    "isbn": isbn }
                        b.books.push(book);
                        loadToStorage(booksConst, b);
                    }
                
                    var c = getFromStorage(catalogConst);
                    var bool = false;
                    for(var bk of c.catalog){
                        if(bk.isbn == isbn){
                            bk.ids.push(logged.id);
                            bool = true;
                        }
                    }
                    if(!bool)
                        c.catalog.push({"isbn": isbn, "ids": [logged.id]})
                    loadToStorage(catalogConst, c);
                    window.location.reload();
                }
            }
        }  
    }    
       
}

wishBtnAdd.onclick = function(){
    var isbn = document.getElementById("wish-isbn").value;
    var title = document.getElementById("wish-title").value;
    var author = document.getElementById("wish-author").value;
    var year = document.getElementById("wish-year").value;
    var genre = document.getElementById("wish-genres").value;
    
    if(isbn == "" || title == "" || author == "" || year == "" || genre == "")
        window.alert("Campos não preenchidos!")
    else {
        year = parseInt(year);
        var u = getFromStorage(usersConst);
        for(var user of u.users){
            if(user.id == logged.id){
                if(user.wishlist.includes(isbn))
                    window.alert("Este livro já se encontra na sua lista de desejos!")
                else if(user.available.includes(isbn))
                    window.alert("Não pode ter o mesmo livro em ambas as listas!")
                else {
                    user.wishlist.push(isbn)
                    loadToStorage(usersConst, u);
                
                    var b = getFromStorage(booksConst);
                    if(b.books.filter(bk => bk.isbn == isbn).length === 0){
                        var book = {"name": title, 
                                    "author": author,
                                    "year": year,
                                    "genre": [genre],
                                    "isbn": isbn }
                        b.books.push(book);
                        loadToStorage(booksConst, b);
                    }
                    window.location.reload();
                }
            }
        }
    }   
}

var shareGenres = document.getElementById("share-genres");
var wishGenres = document.getElementById("wish-genres");
var genres = getFromStorage(genresConst).genres;
for(var genre of genres){
    var option = document.createElement("option");
    var option2 = document.createElement("option");
    option.innerHTML = genre;
    option2.innerHTML = genre;
    option.setAttribute("value", genre);
    option2.setAttribute("value", genre);
    shareGenres.appendChild(option);
    wishGenres.appendChild(option2);
}
