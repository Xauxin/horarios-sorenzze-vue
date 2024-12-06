<template>
  <v-card class="d-flex flex-column" elevation="10">
    <v-card-title class="text-center">Login</v-card-title>
    <v-divider class="mx-3"></v-divider>
    <v-card-text class="d-flex flex-column justify-space-evenly">
      <login-form class="self-justify-center"></login-form>
      <login-socials></login-socials>
    </v-card-text>
    <v-divider class="mx-3"></v-divider>
    <v-card-actions align=end></v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { watch } from 'vue'
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
export default{
    setup() {
        const authStore = useAuthStore()
        const {user, isLoggedIn} = storeToRefs(authStore)
        const router = useRouter()
        
        watch(isLoggedIn, ()=>{
            if (isLoggedIn.value){
              router.push("/")
            }
        })
        onMounted(()=>{
          const numero = sessionStorage.getItem('login')
          if (numero){
            authStore.login(numero)
          }
          if (isLoggedIn.value){
              router.push("/")
            }

        })
        return{
            user
        }
    },
}


</script>

<route lang="yaml">
  meta:
    layout: default
</route>
