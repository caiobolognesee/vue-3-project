<template>
  <div>LOGINNNNNNNNNNNNNNNNNNNNNNNN</div>
  <!-- <v-row class="vh-100 vw-100 row-login">
    <v-col
      sm="5"
      class="d-flex justify-content-center align-items-center left-login"
    >
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>

        <v-form>
          <v-form-group label="E-mail" label-for="email">
            <v-form-input
              id="email"
              type="email"
              placeholder="joaosilva@email.com"
              autocomplete="off"
              v-model="form.email"
            ></v-form-input>
          </v-form-group>

          <v-form-group label-for="password">
            <label class="d-flex justify-content-between">
              Senha
              <small><a href="#">Esqueceu sua senha?</a></small>
            </label>

            <v-form-input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              v-model="form.password"
            ></v-form-input>
          </v-form-group>

          <v-button type="button" variant="primary" block @click="login">
            <i class="fas fa-sign-in-alt"></i> Entrar
          </v-button>

          <hr />

          <v-button
            type="button"
            variant="outline-secondary"
            block
            @click="register"
          >
            <i class="fas fa-user-plus"></i> Não tenho conta
          </v-button>
        </v-form>
      </div>
    </v-col>
  </v-row> -->
</template>

<script lang="ts">
// import { required, minLength, email } from "@vuelidate/validators";

// export default {
//   data() {
//     return {
//       form: {
//         email: "",
//         password: "",
//       },
//     };
//   },
//   validations: {
//     form: {
//       email: {
//         required,
//         email,
//       },

//       password: {
//         required,
//         minLength: minLength(6),
//       },
//     },
//   },
//   methods: {
//     login() {},
//     register() {},
//   },
// };
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

.row-login {
  margin-left: 0;
}

.left-login {
  background-color: #f2f2f2;
}

.title-login {
  font-weight: bold;
}

.img-login {
  width: 600px;
  height: 600px;
}
</style>
