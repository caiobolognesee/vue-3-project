<template>
  <div>
    <home-card-vue
      :title="title"
      :buttonTitle="buttonTitle"
      :text="text"
      :to="buttonToPage"
    />
  </div>
</template>

<script setup>
import HomeCardVue from '@/components/HomeCard.vue'

const title = 'Média de KM/L'
const text = 'Acesse esse módulo para fazer o calculo de gasto médio de quilometros por litro do seu automóvel!'
const buttonTitle = 'Acessar'
const buttonToPage = '/averageSpending'
</script>
