<template>
  <NavBar/>
  <div class="home">
    <router-view/>

  </div>
</template>

<script>
// @ is an alias to /src

import { useProductStore } from '@/store/product'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import NavBar from '@/components/NavBar.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  setup(){

    const productStore = useProductStore()
    const { products} =storeToRefs(productStore)
    onMounted(()=>{
      productStore.getProducts()
    })

    return {
      products
    }

  }
}
</script>
