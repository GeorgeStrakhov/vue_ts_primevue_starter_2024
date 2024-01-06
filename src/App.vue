<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Hoho</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap');

:root {
    --font-family: 'Roboto Flex', sans-serif;
}

body {
  font-family: 'Roboto Flex', sans-serif;
  font-weight: 200;
}

</style>
