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
          v-model="form.email"
          :rules="rules"
          placeholder="johndoe@gmail.com"
          label="Login"
        />
        <v-text-field
          v-model="form.password"
          type="password"
          :rules="rules"
          persistent-hint
          placeholder="senha"
          label="Senha"
        />
      </div>
    </v-card-item>

    <v-card-actions class="card-actions">
      <v-btn class="mb-3" variant="tonal" color="primary" @click="login"> Entrar</v-btn>
      <v-btn class="mb-3" variant="tonal" color="outline-secondary" @click="register">Esqueceu sua senha?</v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
      form: {
      email: "",
      password: "",
    },

    rules: [
      (email: String) => {
        if (email) return true

        return 'Digite o email!'
      },
      (password: String) => {
        if (password) return true

        return 'Digite a senha!'
      },
    ],
  }),
  methods: {
    login() {},
    register() {},
  },
}
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
