<template>
  <div class="navbar  ">
    <div class="flex-1 ">
     <router-link to="/">  <a class="btn btn-ghost text-sm ">Fake Store</a> </router-link>
    </div>
    <div class="flex-none">

        <router-link to='/home'> <div   :class="{'text-primary':active==='home'}" class="font-bold px-1 cursor-pointer">Home </div></router-link>
        <router-link   to='/products'> <div   :class="{'text-primary':active==='products'}" class="font-bold px-1 cursor-pointer">Products </div></router-link>
     
        <router-link   to='/about'> <div   :class="{'text-primary':active==='about'}" class="font-bold px-1 cursor-pointer">About </div></router-link>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div
          tabindex="0"
          class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import {useNavStore} from '@/store/nav'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';


export default {
    setup(){
        const navStore = useNavStore()

        const {active}= storeToRefs(navStore)

        
        onMounted(()=>{
          
        })
  
        return {
            navStore,
          
            active
        }

       
    }
};
</script>

<style>
</style>