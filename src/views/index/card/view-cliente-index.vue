<template>
    <v-row class="h-50">
      <v-col>
        <cliente-horario-marcado v-if="user?.estado?.comHorario" />
        <cliente-marcar-horario v-else />
      </v-col>
    </v-row>
    <v-row class="h-50">
      <v-col >
        <cliente-horarios-passados></cliente-horarios-passados>
      </v-col>
    </v-row>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

export default{
  setup() {
      const authStore = useAuthStore()
      const {user} = storeToRefs(authStore)

      return{
          user
      }
  },
}


</script>