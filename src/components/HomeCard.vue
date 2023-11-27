<template>
  <div class="d-flex align-center flex-column">
    <v-card
      width="2"
      height="150"
      class="card"
      :title="title"
      :text="text"
    >
      <v-btn color="grey" :to="buttonToPage">{{ buttonTitle }}</v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeCard',
  props: ({
    title: {
      type: String,
      required: true
    },
    buttonTitle: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    buttonToPage: {
      type: String,
      required: true
    },
  })
})
</script>

<style scoped>
.card {
  text-align: center;
  background-color: grey;
}
</style>
