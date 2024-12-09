<template>
  <v-row align="center" class="pb-1">
    <v-col cols="8" class="text-left">{{ "Olá" + " " + user?.firstName }} </v-col>
    <v-col cols="4" class="text-right">
      <profile-avatar />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

export default{
    setup() {
        const authStore = useAuthStore()
        const { user} = storeToRefs(authStore)
        return{
            user
        }
    },
}


</script>
