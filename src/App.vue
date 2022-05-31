<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from "./components/layout/Footer.vue"
</script>

<template>
  <header class="font-paytone p-6 2xl:text-3xl xl:text-4xl lg:text-2xl md:text-lg sm:text-sm">
    <nav class="lg:space-x-24 md:space-x-16 flex justify-center space-x-6">
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