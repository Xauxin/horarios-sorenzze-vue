<template>
    <v-card color="cards" style="height: 100%;" class="d-flex flex-column">
                <v-card-title class="text-center">Configs</v-card-title>
                <v-card-text class="d-flex flex-column" >
                   <v-card color="overcard" v-for="config,key in configsSemCronograma" :key="key" class="mb-2">
                    <v-card-title class="text-button py-1 text-capitalize">
                        <v-row align="center">
                            <v-col class="text-left align-center">
                                {{ keyToCapitalize(key) }}
                            </v-col>
                            <v-col class="text-right">
                                {{ config ? config : "0" }}
                            </v-col>
                        </v-row>
                    </v-card-title>
                   </v-card>
                </v-card-text>
                <v-card-actions align="end">
                    <v-btn block variant="flat">Editar</v-btn>
                </v-card-actions>
            </v-card>
</template>

<script lang="ts">
import { useConfigStore } from '@/stores/configStore';
import { storeToRefs } from 'pinia';


export default{
    methods:{
        keyToCapitalize(key: string): string {
    return key
        .split('_') // Divide a string em um array de palavras
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza a primeira letra de cada palavra
        .join(' '); // Junta as palavras de volta com espaços
}
    },
    setup(){
        const configStore = useConfigStore()
        const {configs} = storeToRefs(configStore)
        const configsSemCronograma = computed(() => {
            if (configs.value) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { cronogramas, ...resto } = configs.value;
                return resto;
            }
            return null; // Ou outro valor padrão adequado
        });
        return{
            configsSemCronograma
        }
    }
}

</script>