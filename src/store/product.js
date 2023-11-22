import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useProductStore = defineStore('product',()=>{


    const products = ref(null)


    const getProducts =async ()=>{

        const response = await axios.get('https://fakestoreapi.com/products')

        products.value = response.data

    }
    return {
        products,
        getProducts
    }

})