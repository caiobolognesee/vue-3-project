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
            v-model="login.user"
            :rules="[rules.user]"
            placeholder="johndoe@gmail.com"
            label="Login"
          />
          <v-text-field
            v-model="login.password"
            :rules="[rules.password]"
            type="password"
            placeholder="senha"
            label="Senha"
          />
        </div>
      </v-card-item>

      <v-card-actions class="card-actions">
        <v-btn
          class="mb-3"
          variant="tonal"
          color="primary"
          to="/home"
          @click="doLogin()"
        >
          Entrar
        </v-btn>

        <v-alert
          v-if="login.loginInvalidMessage !== ''"
          type="error"
          variant="outlined"
        >
          {{ login.loginInvalidMessage }}
        </v-alert>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { loginStore } from '@/store/login'

const login = loginStore();

function doLogin() {
  if (login.user !== 'caio' || login.password !== '123') {
    login.loginInvalidMessage = 'usúario ou senha inválidos'
  }
}

const rules = {
  user: value => !!value || 'Digite seu login!',
  password: value => !!value || 'Digite sua senha!'
}

// @ts-ignore
window.stores = { login }
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
