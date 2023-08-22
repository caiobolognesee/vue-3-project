<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="spendingAverage.liters"
        label="Litros gastos"
        :rules="litersRules"
      />

      <v-text-field
        v-model="spendingAverage.kilometers"
        label="Quilometros percorridos"
        :rules="kilometersRules"
      />

      <v-btn type="submit" block class="mt-2" @click="calculate()">Calcular</v-btn>

       <v-text-field
        v-model="spendingAverage.kilometersPerLiter"
        label="Quilometros percorridos"
      />
    </v-form>
  </v-sheet>
</template>

<script setup>
import { spendingAverageStore } from '@/stores/spendingAverage'

const spendingAverage = spendingAverageStore()

function calculate() {
  spendingAverage.calculate()
}

// @ts-ignore
window.stores = { spendingAverage }
</script>
