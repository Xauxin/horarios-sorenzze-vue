<template>
  <v-card class="d-flex flex-column h-100" elevation="10">
    <v-card-title class="text-center"><profile-card-header /></v-card-title>
    <v-divider class="mx-3"></v-divider>
    <v-card-text class="d-flex flex-column">
      <view-horario-cliente-card v-if="user?.role == 'cliente'"></view-horario-cliente-card>
      <view-horario-admin-card></view-horario-admin-card>
    </v-card-text>
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
            if (!isLoggedIn.value){
              router.push("/login")
            }
        })
        onMounted(()=>{
          const numero = sessionStorage.getItem('login')
          if (numero){
            authStore.login(numero)
          }
          if (!isLoggedIn.value){
              router.push("/login")
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
