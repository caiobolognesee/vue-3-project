<template>
  <v-sheet width="350" class="mx-auto bg-deep-purple pa-12">
    <v-form class="mt-15" fast-fail @submit.prevent>
      <v-text-field
        v-model="spendingAverage.liters"
        label="Litros gastos"
        :rules="spendingAverage.rules"
        variant="outlined"
      />

      <v-text-field
        v-model="spendingAverage.kilometers"
        label="Quilometros percorridos"
        :rules="spendingAverage.rules"
        variant="outlined"
      />

      <v-btn
        type="submit"
        block
        @click="spendingAverage.calculate(spendingAverage.liters, spendingAverage.kilometers)"
      >
        Calcular
      </v-btn>

      <v-text-field
        class="mt-5"
        v-model="spendingAverage.getKilometersPerLiter"
        label="Quilometros percorridos"
        variant="outlined"
      />
       <v-input
      :success-messages="['Success']"
      success
      disabled
    >
      Input
    </v-input>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { spendingAverageStore } from '@/stores/spendingAverage'
import { computed } from 'vue'

const spendingAverage = spendingAverageStore()

// @ts-ignore
window.stores = { spendingAverage }
</script>
