<script setup lang="ts">
import Landing from './components/Landing.vue'
import sendMail from './sendEmail'
import { ref } from 'vue'

const showLanding = ref(false)
const showQuestions = ref(false)
setTimeout(() => showLanding.value = true, 500)
setTimeout(() => showLanding.value = false, 4800)
setTimeout(() => showQuestions.value = true, 6200)

const contacto = ref('')
const lugar = ref('')
const showLast = ref(false)
const btnClicked = () => {
  console.log(contacto.value)
  console.log(lugar.value)
  sendMail('Contacto: ' + contacto.value.toString() + ' - ' + 'Lugar: ' + lugar.value)
  
  showQuestions.value = false
  setTimeout(() => showLanding.value = true, 500)
  setTimeout(() => showLanding.value = false, 4800)
  setTimeout(() => showLast.value = true, 6200)
  
  
}

</script>

<template class="main">
  <Landing :show="showLanding"/>
  <div v-if="showQuestions && !showLast" class="container">
    <div class="initial-form">
      <span class="title">Completa los datos para comenzar</span>
    </div>
    <div class="form-panel">
      <span class="input-label">Telefono/correo:</span>
      <br>
      <input type="text" class="form-input" v-model="contacto">
      <br>
      <span class="input-label">Deseo encontar una propiedad en:</span>
      <br>
      <input type="text" class="form-input" v-model="lugar">
    </div>

    <button class="btn" @click="btnClicked">
      BUSCAR
    </button>
    <img src="./assets/home.png" alt="house img" class="house-img">
  </div>
  <div v-if="showLast">
      <span class="title">¡Listo!</span>
      <br>
      <span class="title">Estamos buscando la mejor opción y nos pondremos en contacto contigo.</span>
    </div>
</template>

<style scoped>
body {
  background-color: #FFFFFF;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border-radius: 15px;
  font-family: unset;
  color: #FFFFFF;
  .title {
    font-family: "Bebas Neue", sans-serif;
    font-size: 64px;
  }
  .form-panel {
    border-radius: 9px;
    background: rgba(217, 217, 217, 0.10);
    padding: 16px;
    align-self: start;
    font-family: "JetBrains Mono", sans-serif;
    .form-input {
      color: black;
      margin-bottom: 24px;
      width: 362px;
      height: 35px;
      padding-left: 8px;
      border: 2px white;
      background-color: #ffffffd5;
      border-radius: 3px;
    }
  }
  .btn {
    align-self: start;
    width: 393px;
    margin-top: 16px;
    height: 53px;
    border-radius: 13px;
    border: 1px solid rgba(0, 0, 0, 0.14);
    background: #07AB2B;
    font-family: "Bebas Neue", sans-serif;
    font-size: 32px;
    &:hover {
      background: #0fc035;
      cursor: pointer;
      border: 2px solid white;
    }
  }
  .house-img {
      position: absolute;
      left: 479px;
      top: 68px;
      width: 335px;
    }
}
.main {
  align-items: center;
  background-color: #FFFFFF;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
  color: #FFBD59;
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
