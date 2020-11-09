<template>
  <body>
    <div class="wrapper collapse">
      <Header/>
      <Sidebar/>
      <router-view/>
    </div>
  </body>
</template>

<script>
  import Sidebar from './Sidebar.vue'
  import Header from './Header.vue'

  export default {
    name: 'BasePage',
    props: {

    },
    components: {
      Sidebar,
      Header
    }
  }
</script>

<style >
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

.wrapper {
  display: flex;
  position: relative;
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
