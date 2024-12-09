<template>
    <v-row class="h-50">
        <v-col>
            <v-sheet class="d-flex justify-space-around aling-start">
               <v-card width="120px" max-height="290px" elevation="10" class="d-flex flex-column" v-for="(cronograma,dia) in configs?.cronogramas" :key="dia" color="cards">
                <v-card-title class="text-center text-h6 text-capitalize mb-0 pb-0">{{dia}}</v-card-title>
                <v-card-subtitle opacity="100" :style="corAbertoFechado(cronograma.aberto)" color="black" class="text-center text-subtitle-1 font-weight-bold">{{ cronograma.aberto ? "Aberto" : "Fechado" }}</v-card-subtitle>
                <v-card-text align="center" class="pa-1 mb-0">
                    <v-card color="grey-darken-2" elevation="5" width="90px" v-for="turno,index in cronograma.turnos"  :key="index" :class="index == 0 ? 'mb-1':'mb-0'">
                        <v-card-title :style="corDoTurno(turno)" class="text-subtitle-2 text-capitalize mb-1 pa-0 pt-1">
                            {{turno.nome}}
                        </v-card-title>
                        <v-card-text class="pa-1">
                            <v-chip variant='flat' size="small" density="compact" class="mb-1">
                                {{ turno.inicio }}
                            </v-chip>
                            <v-chip variant='flat' size="small" density="compact">
                                {{ turno.fim }}
                            </v-chip>
                        </v-card-text>
                    </v-card>
                </v-card-text >
                <v-card-actions align=end class="ma-0 py-0">
                    <v-btn block variant='flat' density="compact" color="warning">Editar</v-btn>
                </v-card-actions>
                </v-card>
            </v-sheet>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="5">
            <v-card color="cards">
                <v-card-title>Configs</v-card-title>
            </v-card>
        </v-col>
        <v-col cols="7">
            <v-card color="cards">
                <v-card-title>Excessões</v-card-title>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { useConfigStore } from '@/stores/configStore';
import { storeToRefs } from 'pinia';
import type {ITurno} from '@/interfaces/confgis'

export default{
    methods:{
        corAbertoFechado(aberto:boolean){
            return{
                backgroundColor: aberto ? 'green' : 'red',
                color: 'white',
                border: '1px white solid'
            }
        },
        corDoTurno(turno:ITurno){
            return{
                color: turno.cor,
                borderBottom: '1px black solid'
            }
        }
        
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