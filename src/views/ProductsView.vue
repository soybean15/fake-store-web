<template>
  <div>
    <LoadingView/>
  </div>
</template>

<script>
import { useProductStore } from '@/store/product'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import LoadingView from '@/components/LoadingView.vue'
export default {
  components:{LoadingView},
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

<style>

</style>