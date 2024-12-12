<template>
  <v-card class="d-flex flex-column" elevation="10">
    <v-card-title class="text-center">Horarios</v-card-title>
    <v-card-subtitle class="text-center">
      <v-row class="d-flex align-center flex-column justify-space-between" v-model="tipoCalendario">
      <v-btn-toggle divided v-model="tipoCalendario">
        <v-col><v-btn>Diario</v-btn></v-col>
        <v-col><v-btn>Semanal</v-btn></v-col>
        <v-col><v-btn>Mensal</v-btn></v-col>
      </v-btn-toggle>
      </v-row>
    </v-card-subtitle>
    <v-divider class="mx-3 mt-2"></v-divider>
    <v-card-text class="align-center">
          <view-horario-cliente-board v-if="user?.role == 'cliente'"></view-horario-cliente-board>
          <view-horario-admin-board v-else :calendar-type="calendarType(tipoCalendario)"></view-horario-admin-board>
    </v-card-text>
  </v-card>
</template>


<script lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

export default{
  data(){
    return{
      tipoCalendario: 0
    }
  },
  methods:{
    calendarType(tipo:number){
      if(tipo == 0){

        return "day"
      } else if (tipo == 2){

        return 'month'
      } else if (tipo == 1){

        return "week"
      }
    }
  },
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
