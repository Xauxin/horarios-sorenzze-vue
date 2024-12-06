<template>
    <v-card align="center" color="cards" elevation="10" class="ma-1">
        <v-card-title  class="text-subtitle-1 text-center">{{ user?.estado?.horarioMarcado?.getDia() }}</v-card-title>
        <v-divider class="mx-3" ></v-divider>
        <v-card-text class="text-h3">{{ user?.estado?.horarioMarcado?.getHora() }}</v-card-text>
        <v-divider class="mx-3" ></v-divider>
        <v-card-actions>
            <v-container class="pa-0 ma-0 d-flex justify-space-evenly">
                <v-btn variant="flat" size="small"  color="primary"  text='info'></v-btn>
                <v-btn variant="flat" size="small"  color="warning" :disabled="user?.estado?.aTempoDeAlterar ? false : true" >editar</v-btn>
                <v-btn variant="flat" size="small"  color="error"  :disabled="user?.estado?.aTempoDeAlterar ? false : true">cancelar</v-btn>
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
