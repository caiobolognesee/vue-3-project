<template>
    <v-layout>
      <v-app-bar color="grey" title="Caio Bolognese" :elevation="1" rounded>
        <template v-slot:append>
          <v-btn icon="mdi-linkedin" target="_blank" href="https://www.linkedin.com/in/caio-bolognese-43a41613b/" />
          <v-btn icon="mdi-instagram" target="_blank" href="https://instagram.com/caio.bolognese?igshid=MjEwN2lyYWYwYw==" />
          <v-btn icon="mdi-facebook" target="_blank" href="https://www.facebook.com/profile.php?id=100090405788391" />
        </template>
      </v-app-bar>

      <v-navigation-drawer expand-on-hover :elevation="5" rail>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" to="/home" />
          <!-- <v-list-item prepend-icon="mdi-widgets" title="Dashboard" to="/dashboard" /> -->
          <v-list-item prepend-icon="mdi-gas-station" title="Spending Average" to="/spendingAverage" />
        </v-list>
        <template v-slot:append>
              <v-list-item prepend-icon="mdi-logout" title="Sair" to="/login" @click="logout()"/>
          </template>
      </v-navigation-drawer>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <router-view></router-view>
      </v-main>
    </v-layout>
</template>

<script setup>
</script>

<style scoped>
.logout{
  align-content: center;
}
.background-navbar {
  background-color:darkgray
}
</style>
