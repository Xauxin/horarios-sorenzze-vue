<template>
    <v-form class="d-flex flex-column">
        <v-row class="pa-0 ma-0">
            <v-col>
                <v-date-input density="compact" hide-details label="Dia" type="date"></v-date-input>
            </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
            <v-col>
                <v-text-field  density="compact" v-model="horaInicio" :active="menu1" hide-details :focus="menu1" label="De:">
                    <v-dialog v-model="menu1" activator="parent" width="auto"><v-time-picker v-if="menu1"
                            v-model="horaInicio" full-width></v-time-picker></v-dialog>
                </v-text-field>
            </v-col>
            <v-col>
                <v-text-field density="compact" v-model="horaFim" :active="menu2" hide-details :focus="menu2"  label="Ate:">
                    <v-dialog v-model="menu2" activator="parent" width="auto"><v-time-picker v-if="menu2"
                            v-model="horaFim" full-width></v-time-picker></v-dialog>
                </v-text-field>
            </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
            <v-col>
                <v-text-field density="compact" hide-details label="Horaio em nome de:"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
            <v-col>
                <v-text-field density="compact" hide-details label="Telefone Para Contato:"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
            <v-col>
                <v-text-field density="compact" hide-details label="E-mail:" type="email"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
            <v-col>
                <v-combobox single-line label="Produtos Interessado" density="compact" :items="['Jaleco', 'Pijama Cirúrgico', 'Touca Cirúrgica']" multiple style="text-wrap: nowrap; overflow: hidden; text-overflow: ellipsis;" class="no-wrap-combobox"></v-combobox>
            </v-col></v-row>
        <v-row class="pa-0 ma-0" align="end">
            <v-col cols="3">
                <v-btn>Obs</v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn to="/">Voltar</v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn>Confirmar</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script lang="ts">
export default {
    data() {
        return {
            menu1: false,
            menu2: false,
            horaInicio: null,
            horaFim: null
        }
    }
}</script>


<style scoped>
.v-field__input {
  overflow: scroll;
  flex-wrap: nowrap;
}
.v-chip {
  overflow: initial;
}
</style>