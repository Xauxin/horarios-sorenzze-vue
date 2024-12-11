<template>
    <v-form>
        <v-row>
            <v-col>
                <v-date-input density="compact" hide-details label="Dia" type="date"></v-date-input>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                
            </v-col>
            <v-col>
                <v-text-field v-model="time" :active="menu" :focus="menu">
                    <v-dialog
            v-model="menu"
            activator="parent"
            width="auto"
          ><v-time-picker
              v-if="menu"
              v-model="time"
              full-width
            ></v-time-picker></v-dialog>
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field density="compact" hide-details label="Horaio em nome de:"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field density="compact" hide-details label="Telefone Para Contato:"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field density="compact" hide-details label="E-mail:" type="email"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-select :items="['Jaleco', 'Pijama Cirúrgico', 'Touca Cirúrgica']" multiple chips></v-select>
            </v-col></v-row>
        <v-row>
            <v-col cols="3">
                <v-btn>Observação</v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn icon="home" to="/"></v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn>Marcar Horario</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script lang="ts">
export default {
    data() {
        return {
            menu: false,
            time: null
        }
    }
}</script>