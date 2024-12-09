<template>
<v-card color="cards">
    <v-card-title class="text-center text-body-1">
        Ou faça login via:
    </v-card-title>
    <v-card-text>
        <v-row>
            <v-col>
                <v-btn  size="x-large" icon="apple">
                    
                </v-btn>
            </v-col>
            <v-col>
                <v-btn  size="x-large" icon="">
                    <v-img :src="google" height="24" width="24"></v-img>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn  size="x-large" icon="">
                    <v-img :src="instagram" height="24" width="24"></v-img>
                </v-btn>
            </v-col>
        </v-row>
    </v-card-text>
</v-card>

</template>

<script lang="ts">
import google from '@/assets/Google.svg'
import instagram from '@/assets/Instagram.svg'
import apple from '@/assets/Instagram.svg'
export default{
    setup(){
        return{
            google,
            instagram,
            apple
        }
    }
}
</script>