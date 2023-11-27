<template>
  <div>
    <HomeCardVue
      v-for="card in cards"
      :title="card.title"
      :buttonTitle="card.buttonTitle"
      :text="card.text"
      :buttonToPage="card.buttonToPage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeCardVue from '@/components/HomeCard.vue'

export default defineComponent({
  components: {
    HomeCardVue
  },
  data() {
    return {
      cards: [
        {
          title: 'Média de KM/L',
          text: 'Acesse esse módulo para fazer o calculo de gasto médio de quilometros por litro do seu automóvel!',
          buttonTitle: 'Acessar',
          buttonToPage: '/spendingAverage'
        },
        // {
        //   title: 'Média de KM/L',
        //   text: 'Acesse esse módulo para fazer o calculo de gasto médio de quilometros por litro do seu automóvel!',
        //   buttonTitle: 'Acessar',
        //   buttonToPage: '/home'
        // },
        // {
        //   title: 'Média de KM/L',
        //   text: 'Acesse esse módulo para fazer o calculo de gasto médio de quilometros por litro do seu automóvel!',
        //   buttonTitle: 'Acessar',
        //   buttonToPage: '/dashboard'
        // },
        // {
        //   title: 'Média de KM/L',
        //   text: 'Acesse esse módulo para fazer o calculo de gasto médio de quilometros por litro do seu automóvel!',
        //   buttonTitle: 'Acessar',
        //   buttonToPage: '/login'
        // }
      ]
    }
  }
})
</script>
