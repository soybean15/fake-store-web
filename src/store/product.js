import axios from "axios";

import { defineStore } from "pinia";
import { ref } from "vue";


export const useProductStore = defineStore('product',()=>{


    const products = ref(null)
    const loading = ref(false)
    const categories = ref(null)



    const getProducts =async ()=>{
        loading.value = true
        try{
            const response = await axios.get('https://fakestoreapi.com/products')

            products.value = response.data
            loading.value = false

            await getCategory()

            
        }catch(e){
            loading.value = false
        }    

    }
    const getCategory=async()=>{
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        categories.value = response.data

    }

    const getProductsByCategory=async(category)=>{
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        products.value = response.data
    }
    return {
        products,
        getProducts,
        loading,categories,
        getProductsByCategory
    }

})