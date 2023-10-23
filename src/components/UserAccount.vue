<template>
  <v-menu v-model="showUser" :close-on-content-click="false" location="end">
    <v-card min-width="300">
      <v-list>
        <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" title="John Leider"
          subtitle="Founder of Vuetify">
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-switch v-model="message" color="purple" label="Enable messages" hide-details></v-switch>
        </v-list-item>

        <v-list-item>
          <v-switch v-model="hints" color="purple" label="Enable hints" hide-details></v-switch>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn variant="text" @click="showUserMenu">
          Cancel
        </v-btn>
        <v-btn color="primary" variant="text" @click="showUserMenu">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup>
import { reactive, computed } from 'vue'

const props = defineProps({
  showUserMenu: {
    type: Function,
    required: false
  },
  showData: {
    type: Boolean,
    default: false
  }
})

const teste = reactive({
  teste1: props.showData
})

// a computed ref
const showUser = computed(() => {
  console.log('aq', teste.teste1)
  return teste.teste1
})

</script>

<style scoped>
</style>
