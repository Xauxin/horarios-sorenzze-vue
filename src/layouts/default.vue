<template>
  <v-app>
    <page-header></page-header>
    <v-main>
      <v-row class="h-100 pt-5 px-5">
        <v-col cols="3">
          <router-view name="card" class="h-100" />
        </v-col>
        <v-col cols="9">
          <router-view name="board" class="h-100" />
        </v-col>
      </v-row>
    </v-main>
    <v-footer height="40" app />
  </v-app>
</template>

<script lang="ts" setup>
//
</script>
