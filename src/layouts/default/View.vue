<template>
    <v-layout class="rounded rounded-md">
      <v-app-bar title="Teste" :elevation="1" rounded>
        <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>
          <v-btn icon="mdi-magnify"></v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer expand-on-hover :elevation="5" rail>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" to="/home"></v-list-item>
          <v-list-item prepend-icon="mdi-widgets" title="Dashboard" to="/dashboard"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <router-view></router-view>
      </v-main>
    </v-layout>
</template>

<script lang="ts" setup>
</script>
