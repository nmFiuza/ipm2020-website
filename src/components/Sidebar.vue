<template>
    <div class="sidebar" id="navbar">
        <ul>
          <li>
            <router-link to='/' class="active">
              <span class="icon"><i class="fas fa-home"></i></span>
              <span class="title">Inicio</span>
            </router-link >
          </li>
          <li class="sublist"><a href="#" >
            <span class="icon"><i class="fas fa-user"></i></span>
            <span class="title">Perfil</span>
            </a>
            <div class="subnav">
              <router-link to='/profile'>Ver Perfil</router-link >
              <router-link to='/profile'>Ver Wishlist</router-link >
              <router-link to='/profile'>Ver Minha Listagem</router-link >
            </div>
          </li>
          <li>
            <router-link to='/catalog'>
              <span class="icon"><i class="fas fa-book"></i></span>
              <span class="title">Catálogos</span>
            </router-link >
          </li>
          <li class="sublist">
            <router-link to='/eco-repository'>
              <span class="icon"><i class="fas fa-leaf"></i></span>
              <span class="title">Eco-Repositório</span>
            </router-link>
            <div class="subnav">
               <router-link to='/eco-repository'>Doar Livro</router-link>
               <router-link to='/eco-repository'>Caixa Mistério</router-link>
            </div>
          </li>
          <li>
            <router-link to='/reviews'>
              <span class="icon"><i class="fas fa-quote-left"></i></span>
              <span class="title">Reviews</span>
            </router-link>
          </li>
          <li>
             <router-link to='/settings'>
              <span class="icon"><i class="fas fa-cog"></i></span>
              <span class="title">Definições</span>
             </router-link>
          </li>
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