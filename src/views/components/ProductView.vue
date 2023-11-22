<template>
  <div class="p-5">
    <div class="h-screen flex flex-col gap-4" v-if="!product">
      <div class="skeleton bg-gray-300 h-[300px] w-full"></div>
      <div class="skeleton bg-gray-300 h-4 w-28"></div>
      <div class="skeleton bg-gray-300 h-4 w-full"></div>
      <div class="skeleton bg-gray-300 h-4 w-full"></div>
    </div>
    <div v-else>
      <div class="card lg:card-side text-gray-600 bg-gray-100 shadow-xl">
        <figure><img :src="product.image" alt="Album" /></figure>
        <div class="card-body">
          <h2 class="card-title text-justify">{{product.title}}</h2>
          <div class="badge text-lg p-3 badge-outline badge-default">{{product.category}}</div>
          <div class="badge text-lg p-3 badge-secondary">P{{product.price}}</div>
          
          <p class="text-justify">{{product.description}}</p>
        
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useProductStore } from "@/store/product";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const productStore = useProductStore();
    const route = useRoute();
    const { product } = storeToRefs(productStore);

    const id = route.params.id;

    onMounted(() => {
      productStore.getProduct(id);
    });
    return {
      product,
    };
  },
};
</script>

<style>
</style>