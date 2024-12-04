<template>
  <v-app-bar height="40" class="mb-0" app>
    <v-row align="end">
      <v-col cols="12" class="d-flex justify-end">
        <v-switch
          v-model="temaAtual"
          false-value="Claro"
          true-value="Escuro"
          hide-details
        >
        <template v-slot:label>
            <v-icon :icon="temaAtual === `Claro` ? `light_mode` : `dark_mode`"></v-icon>
        </template>
    </v-switch>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { useTheme } from "vuetify";
import { ref, watch} from 'vue'

export default {
  setup() {
    const temaAtual = ref("Claro")
    const theme = useTheme();
    const taClaro = (label:string)=>{
        if (label == "Claro"){
            return true
        } else {
            return false
        }
    }

    watch(temaAtual, ()=>{
        console.log(temaAtual.value)
        if(temaAtual.value == "Claro"){
            theme.global.name.value = 'myCustomLightTheme'
        }else{
            theme.global.name.value = 'myCustomDarkTheme'
        }
    })


    return {
    taClaro,
    temaAtual
    };
  },
};
</script>
