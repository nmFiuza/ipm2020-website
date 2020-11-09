<template>
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
</template>

<script>
export default {
    
}
</script>

<style scoped>
.subnav {
  overflow: hidden;
  display: none;
  font-size: 12px;
}

.sublist:hover .subnav {
  display: block;
}

.sidebar {
  position: fixed;
  background: #134e13;
  width: 200px;
  height: calc(100%);
  transition: all 0.3s ease;
}

.sidebar ul li a {
  display: block;
  padding: 20px;
  color: #fff;
  position: relative;
  margin-bottom: 1px;
  color: #eaecea;
  white-space: nowrap;
  
}

.sidebar ul li a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #eaecea;
  display: none;
}

.sidebar ul li a span.icon {
  margin-right: 10px;
  display: inline-block;
}

.sidebar ul li a span.title {
  display: inline-block;
}

.sidebar ul li a:hover,  .sidebar ul li a.active {
  background: #1d771d;
  color: #fff;
}

.sidebar ul li a:hover:before,  .sidebar ul li a.active:before {
  display: block;
}

</style>