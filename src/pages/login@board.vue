<template>
  <v-card class="d-flex flex-column" elevation="10">

    <v-card-text class="align-center">
      <v-row align="center" class="h-100">
        <v-col align="center">
          <v-img src="./../assets/logo.png" width="500px"></v-img>
          <v-sheet class='text-center'>
            1 - ADMIN<br/>
            2 - COM HORARIO PODE ALTERAR<br/>
            3 - COM HORARIO NAO PODE ALTERAR<br/>
            4 - SEM HORARIO<br/>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
  //
</script>

<route lang="yaml">
  meta:
    layout: default
</route>
