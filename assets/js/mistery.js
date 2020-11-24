var logged = getLogged();
var points = document.getElementById("ecoPoints");
points.innerHTML = logged.points;
var userBooks = getUserBooks(logged.id);