<template>
  <v-card class="d-flex flex-column" elevation="10">
    <v-card-text class="align-center">
          <view-index-cliente-board v-if="user?.role == 'cliente'"></view-index-cliente-board>
          <view-index-admin-board v-else></view-index-admin-board>
    </v-card-text>
  </v-card>
</template>


<script lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

export default{
  setup() {
      const authStore = useAuthStore()
      const {user} = storeToRefs(authStore)
      //TODO  refatorar authStore para passar sómente a role e refatorar tdoos que só precisaam disso
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
