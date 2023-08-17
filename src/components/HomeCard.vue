<template>
  <div class="d-flex align-center flex-column">
    <v-card
        width="2"
        height="150"
        class="card"
        :title="title"
        :text="text"
      >
      <v-btn>{{ buttonTitle }}</v-btn>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps({
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
})
</script>

<style scoped>
.card {
  text-align: center;
}
</style>
