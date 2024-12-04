<template>
  <v-card class="d-flex flex-column" elevation="10">
    <v-card-title class="text-center"><profile-card-header /></v-card-title>
    <v-divider class="mx-3"></v-divider>
    <v-card-text class="d-flex flex-column">
      <v-row>
        <v-col>
          <horario-marcado v-if="user?.estado.comHorario" />
          <marcar-horario v-else />
        </v-col>
      </v-row>
      <v-row>
        <v-card align="center">
            <v-card-title>Horarios Passados:</v-card-title>
            <v-card-text color="surface" class="text-overline font-weight-bold text-center">Você não tem nenhum horário marcado</v-card-text>
            
          </v-card>
      </v-row>
    </v-card-text>
    <v-divider class="mx-3"></v-divider>
    <v-card-actions align="end">Card</v-card-actions>
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
