const cheapOptionConst = 200;
const midOptionConst = 300;
const expensiveOptionConst = 400;

var logged = getLogged();
var userPoints = logged.points;
var points = document.getElementById("ecoPoints");
points.innerHTML = userPoints;
var userBooks = getUserBooks(logged.id);

function cheapOption(){
    if(userPoints<cheapOptionConst){
        window.alert("Pontos insuficientes, necessita mais " + (cheapOptionConst-userPoints) + " pontos");
        return;
    }
    if(confirm("Tem a certeza que pretende gastar " + cheapOptionConst + " pontos?")){
        removePointsFromUser(cheapOptionConst);
        window.location.href = "random_mistery.html";
    }
}

function midOption(){
    if(userPoints<midOptionConst){
        window.alert("Pontos insuficientes, necessita mais " + (midOptionConst-userPoints) + " pontos");
        return;
    }
    if(confirm("Tem a certeza que pretende gastar " + midOptionConst + " pontos?")){
        removePointsFromUser(midOptionConst);
        window.location.href = "author_category_mistery.html";
    }
}

function expensiveOption(){
    if(userPoints<expensiveOptionConst){
        window.alert("Pontos insuficientes, necessita mais " + (expensiveOptionConst-userPoints) + " pontos");
        return;
    }
    if(confirm("Tem a certeza que pretende gastar " + expensiveOptionConst + " pontos?")){
        removePointsFromUser(expensiveOptionConst);
        window.location.href = "random_mistery.html";
    }
}

function removePointsFromUser(points){
    var usersJSON = getFromStorage(usersConst);
    for(var user of usersJSON.users)
        if(user.id == logged.id)
            user.points -= points;
    loadToStorage(usersConst, usersJSON);
}