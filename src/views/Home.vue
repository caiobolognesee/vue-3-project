<template>
  <div>
    <home-card-vue
      v-for="card in cards"
      :title="card.title"
      :buttonTitle="card.buttonTitle"
      :text="card.text"
      :buttonToPage="card.buttonToPage"
    />
  </div>
</template>

<script setup>
import HomeCardVue from '@/components/HomeCard.vue'

const cards = [
  {
    title: 'Média de KM/L',
    text: 'Acesse esse módulo para fazer o calculo de gasto médio de quilometros por litro do seu automóvel!',
    buttonTitle: 'Acessar',
    buttonToPage: '/spendingAverage'
  },
  {
    title: 'Média de KM/L',
    text: 'Acesse esse módulo para fazer o calculo de gasto médio de quilometros por litro do seu automóvel!',
    buttonTitle: 'Acessar',
    buttonToPage: '/spendingAverage'
  },
  {
    title: 'Média de KM/L',
    text: 'Acesse esse módulo para fazer o calculo de gasto médio de quilometros por litro do seu automóvel!',
    buttonTitle: 'Acessar',
    buttonToPage: '/spendingAverage'
  },
  {
    title: 'Média de KM/L',
    text: 'Acesse esse módulo para fazer o calculo de gasto médio de quilometros por litro do seu automóvel!',
    buttonTitle: 'Acessar',
    buttonToPage: '/spendingAverage'
  }
]

</script>
