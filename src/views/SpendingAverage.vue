<template>
  <v-sheet width="350" class="mx-auto bg-deep-purple pa-12">
    <v-form class="mt-15" fast-fail @submit.prevent>
      <v-text-field
        :rules="spendingAverage.rules"
        v-model="spendingAverage.kilometers"
        label="Quilometros percorridos"
        type="number"
        variant="outlined"
      />

      <v-text-field
        :rules="spendingAverage.rules"
        v-model="spendingAverage.liters"
        label="Litros gastos"
        type="number"
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
        v-model="spendingAverage.getKilometersPerLiter"
        readonly
        class="mt-5"
        label="Quilometros percorridos"
        variant="outlined"
      />
    </v-form>
  </v-sheet>
</template>

<script setup>
import { spendingAverageStore } from '@/stores/spendingAverage'
import { computed } from 'vue'
import { registerModule as registerSpendingAverageStore, unregisterModule as unregisterSpendingAverageStore } from '@/stores/spendingAverage'

const spendingAverage = spendingAverageStore()

function created() {
  this.registerStores()
}

function destroyed() {
  this.unregisterStores()
}

function registerStores() {
  registerSpendingAverageStore(this.$store)
}

function unregisterStores() {
  unregisterSpendingAverageStore(this.$store)
}

// @ts-ignore
window.stores = { spendingAverage }
</script>
