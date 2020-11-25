const activeClassConst = " active-param";
const authorButtonClassConst = "switch-author";
const categoryButtonClassConst = "switch-category";

var logged = getLogged();
var userPoints = logged.points;
var points = document.getElementById("ecoPoints");
points.innerHTML = userPoints;
var userBooks = getUserBooks(logged.id);

function changeForm(div){
    
    document.getElementById("switch_author").setAttribute("class", authorButtonClassConst);
    document.getElementById("switch_category").setAttribute("class", authorButtonClassConst);

    if(!div.getAttribute("class").includes(activeClassConst))
        div.setAttribute("class", div.getAttribute("class") + activeClassConst);
}