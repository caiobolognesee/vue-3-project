<template>
  <div class="login">
    <v-card
      class="card"
      :elevation="15"
    >
    <v-card-item>
      <div>
        <h2 class="mt-1 mb-10 text-center">Faça o login</h2>
        <v-text-field
          v-model="app.email"
          :rules="app.rules"
          placeholder="johndoe@gmail.com"
          label="Login"
        />
        <v-text-field
          v-model="app.password"
          type="password"
          :rules="app.rules"
          persistent-hint
          placeholder="senha"
          label="Senha"
        />
      </div>
    </v-card-item>

    <v-card-actions class="card-actions">
      <v-btn class="mb-3" variant="tonal" color="primary" @click="login"> Entrar</v-btn>
      <!-- <v-btn class="mb-3" variant="tonal" color="outline-secondary" @click="register">Esqueceu sua senha?</v-btn> -->
    </v-card-actions>
  </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { appStore } from '@/stores/app'

export default defineComponent({

  setup() {
    const app = appStore()

    const itemName = ref('')

    function login() {
      if (app.email !== '') {

      }
    }

    // @ts-ignore
    window.stores = { app }

    return {
      login,
      app
    }
  },
})
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.card {
  margin: auto;
  min-width: 100vh;
}
.card-actions {
  flex-direction: column;
}
.login {
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  height: 100vh;
}
</style>
