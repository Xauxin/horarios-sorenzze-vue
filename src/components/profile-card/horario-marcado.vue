<template>
    <v-card align="center">
        <v-card-text color="surface" class="text-overline font-weight-bold text-center">Você não tem nenhum horário
            marcado</v-card-text>
        <v-card-actions>
            <v-btn variant="flat" block color="primary">Marcar Horario</v-btn>
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
