<template>
  <v-sheet
    class="mt-15 mx-auto pa-12"
    color="grey"
    :elevation="10"
    :height="350"
    :width="400"
    border
    rounded
  >
    <v-form fast-fail @submit.prevent>
      <v-text-field
        :rules="[rules.kilometers]"
        v-model="spendingAverage.kilometers"
        label="Quilometros percorridos"
        type="number"
        variant="outlined"
        class="mb-2"
      />

      <v-text-field
        :rules="[rules.liters]"
        v-model="spendingAverage.liters"
        label="Litros gastos"
        type="number"
        variant="outlined"
        class="mb-2"
      />

      <v-btn
        type="submit"
        class="mb-2"
        block
        @click="spendingAverage.calculate(spendingAverage.liters, spendingAverage.kilometers)"
      >
        Calcular
      </v-btn>

      <v-text-field
        v-model="spendingAverage.getKilometersPerLiter"
        readonly
        class="mt-5"
        variant="outlined"
      />
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
    }
  },
  methods: {
  }
})
</script>
