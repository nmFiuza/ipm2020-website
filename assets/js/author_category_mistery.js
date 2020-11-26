const activeClassConst = " active-param";
const activeFormConst = "active-form";
const authorButtonClassConst = "switch-author";
const categoryButtonClassConst = "switch-category";

var logged = getLogged();
var userPoints = logged.points;
var points = document.getElementById("ecoPoints");
points.innerHTML = userPoints;
var userBooks = getUserBooks(logged.id);

var userAvailableBooks = [];
for(var b of userBooks[1]){
    userAvailableBooks.push(b.isbn);
}

function changeButton(div) {
    document.getElementById("switch_author").setAttribute("class", authorButtonClassConst);
    document.getElementById("switch_category").setAttribute("class", categoryButtonClassConst);


    if (!div.getAttribute("class").includes(activeClassConst)) {
        div.setAttribute("class", div.getAttribute("class") + activeClassConst);
    }
}

function changeFormAuthor(div){
    changeButton(div);
    document.getElementById("form_author").setAttribute("class", " ");
    document.getElementById("form_category").setAttribute("class", "hidden");
    document.getElementById("form_author").setAttribute("class", activeFormConst);
}

function changeFormCategory(div){
    changeButton(div);
    document.getElementById("form_author").setAttribute("class", "hidden");
    document.getElementById("form_category").setAttribute("class", " ");
    document.getElementById("form_category").setAttribute("class", activeFormConst);
}

var author_dd = document.getElementById("author_dropdown");
var genres_dd = document.getElementById("category_dropdown");
var confirm_button = document.getElementById("confirm");
var ecorep = getFromStorage(ecorepConst).ecorep;
genres = []
for(var er of ecorep){
    if(!userAvailableBooks.includes(er.isbn)){
        var option = document.createElement("option");
        option.innerHTML = er.author;
        option.setAttribute("value", er.author);
        author_dd.appendChild(option);
        
        if(er.genre[0].includes(",")){
            var newGenres = er.genre[0].split(",");
            genres = genres.concat(newGenres);
        }else{
            genres.push(er.genre[0]);
        }
    }
}
genres = genres.map(s => s.trim());
var uniqueGenres = [];
$.each(genres, function(i, el){
    if($.inArray(el, uniqueGenres) === -1) uniqueGenres.push(el);
});
uniqueGenres = uniqueGenres.sort();
for(var genre of uniqueGenres){
    var option = document.createElement("option");
    option.innerHTML = genre
    option.setAttribute("value", genre);
    genres_dd.appendChild(option);
}

function authorSelected(){
    genres_dd.value = "default";
    activeButton()
}

function categorySelected(){
    author_dd.value = "default";
    activeButton()
}

function activeButton(){
    if(genres_dd.value == "default" && author_dd.value == "default"){
        confirm_button.disabled = true;
    } else{
        confirm_button.disabled = false;
    }
}

function confirmOrder(){
    var isAuthorSelected = author_dd.value == "default" ? false : true;
    isAuthorSelected ? loadToStorage(singleAuthorConst, author_dd.value) : loadToStorage(singleGenreConst, genres_dd.value)
    window.location.href = "random_mistery.html";
}