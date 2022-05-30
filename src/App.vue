<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from "./components/layout/Footer.vue"
</script>

<template>
  <header class="font-paytone p-6 text-4xl">
    <nav class="space-x-24 flex justify-center ">
      <RouterLink class="hover:text-red-600 focus:text-red-600" to="/">Accueil</RouterLink>
      <RouterLink class="hover:text-red-600 focus:text-red-600" to="/programmation">Programmation</RouterLink>
      <RouterLink class="hover:text-red-600 focus:text-red-600" to="/artistes">Artistes</RouterLink>
      <RouterLink class="hover:text-red-600 focus:text-red-600" to="/festival">Festival</RouterLink>
    </nav>
  </header>

  <RouterView />
  <footer class="bg-blue-850 text-xs">
    <Footer />
  </footer>
</template>