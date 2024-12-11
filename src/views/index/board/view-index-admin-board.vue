<template>
    <v-row class="h-50 mb-1">
        <v-col>
          <cronograma></cronograma>
        </v-col>
    </v-row>
    <v-row class="h-50">
        <v-col cols="5">
            <configs></configs>
        </v-col>
        <v-col cols="7">
           <excessoes></excessoes>
        </v-col>
    </v-row>
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
                border: '1px white solid'
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