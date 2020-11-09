$(".sidebar").hover(function(){
   $(".wrapper").toggleClass("collapse");
});

//Legacy code to swap active navbuttons
var navContainer = document.getElementById("navbar");
// Get all buttons with class="btn" inside the container
var navs = navContainer.children[0].children;
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navs.length; i++) {
   navs[i].children[0].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if(current.length>0)
         current[0].className = "";
      this.className = "active";
   });
}