<template>
  <v-menu location="bottom">
    <template #activator="{ props }">
      <v-btn icon v-bind="props" :ripple="false" size="x-small">
        <v-avatar
          :image=user?.img
        />
      </v-btn>
    </template>
    <v-card>
      <v-card-text class="mx-auto text-center d-flex flex-column">
        <h3>{{user ? user.username : "user"}}</h3>
        <h6>{{user ? user.firstName + " " +user.lastName : "user"}}</h6>
        <p class="text-caption mt-1">{{user?.email}}</p>
        <v-divider class="my-3" />
        <v-btn variant="text" rounded @click="mostrarUser()"> Editar a Conta </v-btn>
        <v-btn variant="text" rounded @click="logout()"> Sair </v-btn>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

export default{
    methods:{
      mostrarUser(){
        console.log(this.user)
      },
      logout(){
        this.authStore.logout()
        }
    },
    setup() {
        const authStore = useAuthStore()
        const { user} = storeToRefs(authStore)
        return{
            authStore,
            user
        }
    },
}


</script>
