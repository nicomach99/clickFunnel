<script setup lang="ts">
import Landing from './components/Landing.vue'
import { ref } from 'vue'

const showLanding = ref(false)
const showQuestions = ref(false)
setTimeout(() => showLanding.value = true, 500)
setTimeout(() => showLanding.value = false, 4800)
setTimeout(() => showQuestions.value = true, 6200)
</script>

<template class="main">
  <Landing :show="showLanding"/>
  <div v-if="showQuestions" class="container">
    <div class="logo">
      Aqui tu logo
    </div>
    
    <div class="Texto">
      Te gustaría encontrar tu casa ideal en __________?
    </div>

    <button class="btn">
      Especfica tus necesidades >
    </button>
    </div>
</template>

<style scoped>
.container {
  height: 320px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 1, 1, 0.717);
  border-radius: 15px;
}
.main {
  align-items: center;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
