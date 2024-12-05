<template>
  <v-app class="app">
    <page-header></page-header>
    <v-main>
      <v-row class="h-100 pt-5 px-5">
        <v-col cols="3">
          <router-view name="card" class="h-100" style="max-height: calc(100vh - 120px);"/> 
        </v-col>
        <v-col cols="9">
          <router-view name="board" class="h-100"  style="max-height: calc(100vh - 120px);" />
        </v-col>
      </v-row>
    </v-main>
    <v-footer height="40px" app />
  </v-app>
</template>

<script lang="ts" setup>
//
</script>

