<template>
  <v-card class="d-flex flex-column h-100" elevation="10">
    <v-card-title class="text-center"><profile-card-header /></v-card-title>
    <v-divider class="mx-3"></v-divider>
    <v-card-text class="d-flex flex-column">
      <v-row class="h-50">
        <v-col>
          <horario-marcado v-if="user?.estado.comHorario" />
          <marcar-horario v-else />
        </v-col>
      </v-row>
      <v-row class="h-50">
        <v-col >
          <horarios-passados></horarios-passados>
        </v-col>
      </v-row>
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

        onMounted(()=>{
            authStore.logarComHorarioDandoParaAlterar()
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
