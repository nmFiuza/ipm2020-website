<template>
    <div class="top_navbar">
        <div class="top_menu">
          <div class="page_title">
            <div class="logo">
              <img src="../assets/img/logo.png" class="logo">
            </div>
            <h1 class="title_text">EcoBook</h1>
          </div>
          <ul>
            <li><router-link to='/'>
              <i class="fas fa-home"></i>
              </router-link></li>
            <li><router-link to='/profile'>
              <i class="fas fa-user"></i>
              </router-link></li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.top_navbar {
  width: calc(100%);
  height: 80px;
  display: flex;
  position: fixed;
  top: 0px
}

.top_navbar .top_menu {
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

.top_navbar .top_menu .logo {
  color: #134e13;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
}

.top_navbar .top_menu ul {
  display: flex;
}

.top_navbar .top_menu ul li a {
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

.top_navbar .top_menu ul li a:hover {
  background: #1d771d;
  color: #fff;
}

.top_navbar .top_menu ul li a:hover i {
  color: #fff;
}
</style>