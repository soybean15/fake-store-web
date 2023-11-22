<template>

<div class="main ">
  <router-view/>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.main{
  background: rgb(237,235,237);
background: radial-gradient(circle, rgba(237,235,237,1) 58%, rgba(246,187,228,1) 95%); 
}
</style>
