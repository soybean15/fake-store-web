<template>
  <div class="card bg-base-100 shadow-xl text-white cursor-pointer" v-if="product">
    <figure> 
        <img class="h-[300px] md:h-[250px] w-full object-fill" :src="product.image" alt="Shoes" /></figure>
    <div class="card-body ">
      <div class="card-title text-sm text-start">
        {{product.title}}
        <div class="badge  badge-secondary">P{{product.price}}</div>
      </div>
      <p class="text-xs text-left">If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end" >
        <div class="badge badge-outline">{{product.category}}</div>
       
      </div>
    </div>
  </div>
  <div v-else>
    <div class="flex flex-col gap-4 w-52">
      <div class="flex gap-4 items-center">
        <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
        <div class="flex flex-col gap-4">
          <div class="skeleton h-4 w-20"></div>
          <div class="skeleton h-4 w-28"></div>
        </div>
      </div>
      <div class="skeleton h-32 w-full"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
</style>