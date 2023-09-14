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
            :rules="login.rules"
            persistent-hint
            placeholder="johndoe@gmail.com"
            label="Login"
          />
          <v-text-field
            v-model="login.password"
            :rules="login.rules"
            persistent-hint
            type="password"
            placeholder="senha"
            label="Senha"
          />
        </div>
      </v-card-item>

      <v-card-actions class="card-actions">
        <v-btn class="mb-3" variant="tonal" color="primary" to="/home" @click="doLogin()">Entrar</v-btn>
        <v-alert v-show="login.canLogin" type="error" variant="outlined">{{ login.loginInvalidMessage }}</v-alert>
        <!-- <v-btn class="mb-3" variant="tonal" color="outline-secondary" @click="register">Esqueceu sua senha?</v-btn> -->
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { loginStore } from '@/store/login'

const login = loginStore();


function doLogin() {
  login.canLogin = true
  if (login.canLogin) {
    if (login.user !== 'caio' || login.password !== '123') {
      login.loginInvalidMessage = 'usúario ou senha inválidos'
    }
  }
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
