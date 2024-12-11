<template>
        <v-sheet class="d-flex justify-space-around aling-start mb-0" color="cards">
            <v-card width="12%" elevation="10" class="d-flex flex-column" v-for="(cronograma,dia) in configs?.cronogramas" :key="dia" color="overcard">
                <v-card-title class="text-center text-h6 text-capitalize mb-0 pa-0">{{dia}}</v-card-title>
                <v-card-subtitle opacity="100" :style="corAbertoFechado(cronograma.aberto)" color="black" class="text-center text-subtitle-1 font-weight-bold">{{ cronograma.aberto ? "Aberto" : "Fechado" }}</v-card-subtitle>
                <v-card-text align="center" class="pa-1 mb-0">
                    <v-card elevation="3" width="%" v-for="turno,index in cronograma.turnos"  :key="index" :class="index == 0 ? 'mb-2 pb-1':'mb-1 pb-1'">
                        <v-card-title class="text-subtitle-2 text-capitalize mb-0 pa-0 pt-0 border-b-thin">
                            {{turno.nome}}
                        </v-card-title>
                        <v-card-text class="py-1 px-0 pb-0">
                            <v-chip variant='flat' style="background-color: #02142c;" size="small" density="compact" class="pa-1 mr-1">
                                {{ turno.inicio }}
                            </v-chip>
                            <v-chip variant='flat' style="background-color: #02142c;" size="small" density="compact" class="pa-1">
                                {{ turno.fim }}
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-card-text >
            </v-card>
        </v-sheet>
</template>

<script lang="ts">
import { useConfigStore } from '@/stores/configStore';
import { storeToRefs } from 'pinia';


export default{
    methods:{
        corAbertoFechado(aberto:boolean){
            return{
                backgroundColor: aberto ? 'green' : 'red',
                color: 'white',
                borderBottom: '1px white solid',
                borderTop: '1px white solid'
            }
        },
        
    },
    setup(){
        const configStore = useConfigStore()
        configStore.pegarConfigs()
        const {configs} = storeToRefs(configStore)
        return{
            configs
        }
    }
}
</script>