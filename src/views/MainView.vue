<template>
  <NavBar/>
  <div class="home">
    <router-view/>

  </div>
</template>

<script>
// @ is an alias to /src



import NavBar from '@/components/NavBar.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  setup(){


  }
}
</script>
