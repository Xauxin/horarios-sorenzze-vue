<template>
    <v-card align="center" color="cards" elevation="10" class="ma-1">
        <v-container v-if="user?.role=='cliente'">
            <v-card-title  class="text-subtitle-1 text-center">{{ user?.estado?.horarioMarcado?.getDia() }}</v-card-title>
        </v-container>
        <v-container v-else>
            <v-card-title class="text-center">Cliente</v-card-title>
            <v-card-subtitle class="text-center">Segunda, 15 de dezembro de 2024</v-card-subtitle>
        </v-container>
        <v-divider class="mx-3" ></v-divider>
        <v-card-text class="text-h3">{{ user?.role=='cliente' ? user?.estado?.horarioMarcado?.getHora() : "8:50" }}</v-card-text>
        <v-divider class="mx-3" ></v-divider>
        <v-card-actions>
            <v-container class="pa-0 ma-0 d-flex justify-space-evenly">
                <v-btn variant="flat" size="small"  color="primary"  text='info'></v-btn>
                <v-btn variant="flat" size="small"  color="warning" :disabled="user?.role=='cliente' ? user?.estado?.aTempoDeAlterar ? false : true : false " >editar</v-btn>
                <v-btn variant="flat" size="small"  color="error"  :disabled="user?.role=='cliente' ? user?.estado?.aTempoDeAlterar ? false : true : false ">cancelar</v-btn>
            </v-container>
            
        </v-card-actions>
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
