import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute } from 'vue-router';

export const useNavStore = defineStore('nav',()=>{


    const active = ref(null)
    const route = useRoute()


    const getActive=()=>{
      
        active.value = route.name
    }

    return {
        active,
        getActive
    }


})