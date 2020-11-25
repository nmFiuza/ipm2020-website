const activeClassConst = " active-param";
const activeFormConst = "active-form";
const authorButtonClassConst = "switch-author";
const categoryButtonClassConst = "switch-category";

var logged = getLogged();
var userPoints = logged.points;
var points = document.getElementById("ecoPoints");
points.innerHTML = userPoints;
var userBooks = getUserBooks(logged.id);

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
var authors = getFromStorage(authorsConst).authors;
var genres = getFromStorage(genresConst).genres;
for(var author of authors){
    var option = document.createElement("option");
    option.innerHTML = author;
    option.setAttribute("value", author);
    author_dd.appendChild(option);
}
for(var genre of genres){
    var option = document.createElement("option");
    option.innerHTML = genre;
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