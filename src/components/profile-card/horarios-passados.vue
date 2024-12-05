<template>
      <v-card align="center" color="cards" elevation="10" class="ma-1 overflow-y-auto" max-height="32vh">
        <v-card-title>Horarios Passados:</v-card-title>
        <v-card-text>

                <v-card v-for="horario in user?.estado.horariosPassados" :key="horario" align="center" elevation="10" class="mb-2">
                    <v-card-title class="text-subtitle-2 text-center">{{
                        horario.getDia()
                    }}</v-card-title>
                    <v-divider class="mx-3"></v-divider>
                    <v-card-text class="text-h3">{{
                        horario.getHora()
                    }}</v-card-text>
                    <v-divider class="mx-3"></v-divider>
                    <v-card-actions>
                        <v-btn class="ma-0 pa-0" block variant="flat" :color="horario.compareceu ? 'success' : 'error'">{{ horario.compareceu ? "compareceu" : "Não Compareceu" }}</v-btn>
                    </v-card-actions>
                </v-card>

        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";

export default {
    setup() {
        const authStore = useAuthStore();
        const { user } = storeToRefs(authStore);

        return {
            user,
        };
    },
};
</script>

<style scoped>
  /* width */
  ::-webkit-scrollbar {
    display: none;
    /* padding: 2px;
      width: 8px;
      border-radius: 10px;
       */
  }

  /* Track */
  /* ::-webkit-scrollbar-track {
    margin: 4px;
    border: #8c8c8c 2px solid;
    border-radius: 10px;


  } */

  /* Handle */
  /* ::-webkit-scrollbar-thumb {
    width: 5px;
    border-radius: 10px;
    background:  #8c8c8c;
     */
/* } */

 
</style>