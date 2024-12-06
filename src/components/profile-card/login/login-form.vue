<template>
<v-card color="cards">
    <v-card-text>
        <v-form>
            <v-row class="">
                <v-col>
                    <v-text-field prepend-inner-icon="person" label="Usuário" type="text" autocomplete="username" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field prepend-inner-icon="lock" label="Senha" type="password" autocomplete="current-password" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn submit color="info">
                        Entrar
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn color="info">
                        Cadastre-se
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-card-text>
</v-card>

</template>

<script lang="ts"></script>