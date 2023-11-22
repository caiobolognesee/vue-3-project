<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="end">
    <v-card min-width="300">
      <v-list>
        <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" title="John Leider"
          subtitle="Founder of Vuetify">
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-switch color="purple" label="Enable messages" hide-details></v-switch>
        </v-list-item>

        <v-list-item>
          <v-switch color="purple" label="Enable hints" hide-details></v-switch>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn variant="text" @click="showUserMenu()">
          Cancel
        </v-btn>
        <v-btn color="primary" variant="text" @click="showUserMenu()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    showUserMenu: {
      type: Function as PropType<Function>,
      required: false,
    },
    showData: {
      type: Boolean as PropType<Boolean>,
      default: false,
    },
  },
  data() {
    return {
      menu: false
    }
  },
  computed: {
    teste() {
      if (this.showData) {
        return this.menu = true;
      }
    }
  },
  methods: {
    showUserMenu() {
      // Se necessário, você pode chamar a função showUserMenu aqui
      this.teste
    },
  },
})
</script>

<style scoped>
</style>
