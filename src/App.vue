<script setup lang="ts">
</script>

<template class="main">
    <div class="container">
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

  <!-- <main>
    <TheWelcome />
  </main> -->
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
  background-color: rgba(0, 1, 1, 0.5);
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
