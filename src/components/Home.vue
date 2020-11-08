<template>
  <body>
    <div class="wrapper collapse">
      <div class="top_navbar">
        <div class="top_menu">
          <div class="page_title">
            <div class="logo">
              <img src="../assets/img/logo.png" class="logo">
            </div>
            <h1 class="title_text">EcoBook</h1>
          </div>
          <ul>
            <li><a href="homepage.html">
              <i class="fas fa-home"></i>
              </a></li>
            <li><a href="#">
              <i class="fas fa-user"></i>
              </a></li>
          </ul>
        </div>
      </div>

      <div class="sidebar" id="navbar">
          <ul>
            <li><a href="homepage.html" class="active">
              <span class="icon"><i class="fas fa-home"></i></span>
              <span class="title">Inicio</span>
              </a>
            </li>
            <li class="sublist"><a href="#" >
              <span class="icon"><i class="fas fa-user"></i></span>
              <span class="title">Perfil</span>
              </a>
              <div class="subnav">
                <a href="assets/html/profile.html">Ver Perfil</a>
                <a href="assets/html/wishlist.html">Ver Wishlist</a>
                <a href="assets/html/listings.html">Ver Minha Listagem</a>
              </div>
            </li>
            <li><a href="catalog.html">
              <span class="icon"><i class="fas fa-book"></i></span>
              <span class="title">Catálogos</span>
              </a></li>
            <li class="sublist"><a href="#">
              <span class="icon"><i class="fas fa-leaf"></i></span>
              <span class="title">Eco-Repositório</span>
              </a>
              <div class="subnav">
                <a href="assets/html/donate.html">Doar Livro</a>
                <a href="assets/html/mistery.html">Caixa Mistério</a>
              </div>
            </li>
            <li><a href="reviews.html">
              <span class="icon"><i class="fas fa-quote-left"></i></span>
              <span class="title">Reviews</span>
              </a></li>
            <li><a href="settings.html">
              <span class="icon"><i class="fas fa-cog"></i></span>
              <span class="title">Definições</span>
              </a></li>
        </ul>
      </div>
      
      <div class="main_container">
        <div class="item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
        </div>
        <div class="item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
        </div>
        <div class="item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
        </div>
        <div class="item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi reprehenderit minima blanditiis eum quae aspernatur!
        </div>
      </div>
    </div>
  </body>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      msg: String
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap');
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background: #e1ecf2;
}

.page_title{
  display: flex;
  align-items: center;
  margin-left: 40%;
}

.logo{
  width: 70px;
  height: 70px;
}

.title_text{
  color: #545454;
  padding-left: 10%;
}

.subnav {
  overflow: hidden;
  display: none;
  font-size: 12px;
}

.sublist:hover .subnav {
  display: block;
}

.wrapper {
  display: flex;
  position: relative;
}

.wrapper .top_navbar {
  width: calc(100%);
  height: 80px;
  display: flex;
  position: fixed;
  top: 0px
}

.wrapper .top_navbar .top_menu {
  width: calc(100% - 70px);
  height: 100%;
  background: #fff;
  display: flex;
  margin-left: 90px;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.wrapper .top_navbar .top_menu .logo {
  color: #134e13;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
}

.wrapper .top_navbar .top_menu ul {
  display: flex;
}

.wrapper .top_navbar .top_menu ul li a {
  display: block;
  margin: 0 10px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #134e13;
  border-radius: 50%;
  color: #134e13;
}

.wrapper .top_navbar .top_menu ul li a:hover {
  background: #1d771d;
  color: #fff;
}

.wrapper .top_navbar .top_menu ul li a:hover i {
  color: #fff;
}

.wrapper .sidebar {
  position: fixed;
  background: #134e13;
  width: 200px;
  height: calc(100%);
  transition: all 0.3s ease;
}

.wrapper .sidebar ul li a {
  display: block;
  padding: 20px;
  color: #fff;
  position: relative;
  margin-bottom: 1px;
  color: #eaecea;
  white-space: nowrap;
  
}

.wrapper .sidebar ul li a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #eaecea;
  display: none;
}

.wrapper .sidebar ul li a span.icon {
  margin-right: 10px;
  display: inline-block;
}

.wrapper .sidebar ul li a span.title {
  display: inline-block;
}

.wrapper .sidebar ul li a:hover, .wrapper .sidebar ul li a.active {
  background: #1d771d;
  color: #fff;
}

.wrapper .sidebar ul li a:hover:before, .wrapper .sidebar ul li a.active:before {
  display: block;
}

.wrapper .main_container {
  width: calc(100%);
  margin-top: 60px;
  margin-left: 70px;
  padding: 35px;
}

.wrapper .main_container .item {
  background: #fff;
  margin-bottom: 10px;
  padding: 15px;
  font-size: 14px;
  line-height: 22px;
}

.wrapper.collapse .sidebar {
  width: 90px;
}

.wrapper.collapse .sidebar ul li a {
  text-align: center;
}

.wrapper.collapse .sidebar ul li a span.icon {
  margin: 0;
}

.wrapper.collapse .sidebar ul li a span.title {
  display: none;
}
</style>
