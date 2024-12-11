<template>
    <v-card color="cards">
        <v-card-title class="text-center">Excessões</v-card-title>
        <v-card-text>
            <v-slide-group show-arrows    center-active>
                <v-slide-group-item v-for="excessao, index in excessoes" :key="index">
                    <v-card class="mr-2"  width="200px" color="overcard">
                        <v-card-title class="text-center">{{ excessao.nome }}</v-card-title>
                        <v-card-subtitle class="text-center">{{ excessao.getDia()}}</v-card-subtitle>
                        <v-divider class="mx-3" opacity="100%"></v-divider>
                        <v-card-text class="text-center">

                            <v-chip variant='flat' class="mb-1">
                                {{ excessao.inicio }}
                            </v-chip><br/>
                         <v-chip variant='flat'>
                                {{ excessao.fim }}
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-card-text>
        <v-card-actions>
            <v-row>
                <v-col cols="6" >
                    <v-btn block variant="flat">Adcionar Excessao</v-btn>
                </v-col>
                <v-col cols="6" >
                    <v-btn block variant="flat">Ver Todas Excessoes</v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { useConfigStore } from '@/stores/configStore';
import { storeToRefs } from 'pinia';


export default {
    setup() {
        const configStore = useConfigStore()
        configStore.pegarExcessoes()
        const { excessoes } = storeToRefs(configStore)

        return {
            excessoes
        }
    }
}

</script>