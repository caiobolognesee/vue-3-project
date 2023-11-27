<template>
  <div class="login">
    <v-card
      class="card"
      :elevation="15"
    >
      <v-card-item>
        <div>
          <h2 class="mt-1 mb-10 text-center">Faça o login</h2>
          <div class="login-image">
            <v-img
            aspect-ratio="16/9"
            src="../../assets/logo.png"
            />
          </div>
          <v-text-field
            v-model="login.user"
            placeholder="johndoe@gmail.com"
            label="Login"
          />
          <v-text-field
            v-model="login.password"
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
          v-if="loginInvalidMessage !== ''"
          type="error"
          variant="outlined"
        >
          {{ loginInvalidMessage }}
        </v-alert>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Login',
  data() {
    return {
      login: {
        user: '',
        password: '',
      },
      loginInvalidMessage: '',
    }
  },
  // computed: {
  //   ...mapGetters({
  //     loginComputed: 'login/login'
  //   })
  // },
  methods: {
    doLogin() {
      if (this.login.user !== 'caio' && this.login.password !== '123') {
        this.loginInvalidMessage = 'Errooooooo'
      }
    },

  }
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
  display: flex;
  align-items: center;
  height: auto;
}
.login-image {
  display: flex;
  height: 250px;
  margin: -40px 0 -80px 0;
}
</style>
