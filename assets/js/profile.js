
var logged = getLogged();
console.log(logged)
document.getElementById("user-name").innerHTML = logged.firstname + " " + logged.surname;
document.getElementById("user-email").innerHTML = logged.email;
document.getElementById("user-address").innerHTML = logged.morada;
document.getElementById("user-points").innerHTML = logged.points;