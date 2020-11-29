$(".sidebar").hover(function(){
   $(".wrapper").toggleClass("collapser");
});

var logged = getLogged();
username = document.getElementById("header_username");
if(username != null)
   username.innerHTML = logged.firstname + " " + logged.surname;