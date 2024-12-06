<template>
  <v-card class="d-flex flex-column" elevation="10">
    <v-card-title class="text-center">Login</v-card-title>
    <v-divider class="mx-3"></v-divider>
    <v-card-text class="d-flex flex-column justify-space-evenly">
      <login-form class="self-justify-center"></login-form>
      <login-socials></login-socials>
    </v-card-text>
    <v-divider class="mx-3"></v-divider>
    <v-card-actions align=end></v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
  //
</script>

<route lang="yaml">
  meta:
    layout: default
</route>
