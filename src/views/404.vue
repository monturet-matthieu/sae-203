<script setup>
import Bouton from "../components/Bouton.vue";
</script>

<template>
    <div class="text-center mt-56 mb-4 md:mt-44 md:mb-6 lg:mt-28 lg:mb-8 xl:mt-24">
        <h2 class="font-montserrat font-bold text-base md:text-4xl lg:text-3xl xl:text-5xl">Désolé, cette page n'existe pas.</h2>
    </div>

    <div class="rounded-full bg-gray-100 h-1 md:h-2 xl:h-4 mx-12 mb-8 md:mb-12 md:mx-20 lg:mt-12 lg:mb-12 lg:mx-60 xl:mt-8 xl:mb-16 xl:mx-60 2xl:mx-72"></div>

    <div class="text-center font-montserrat text-sm md:text-base mb-12 lg:pt-4">
        <form class="flex flex-col mx-12 md:mx-32 lg:mx-48 xl:mx-96 space-y-4 lg:space-y-8 " action="https://duckduckgo.com/" method="GET" 
        x-data="{ q:'', }" 
        x-on:submit="q = q + ' site:bluejazz.femin-in.eu'">
            <label for="q">Rechercher un mot-clé :</label>
            <input class="mx-2 border-indigo-400 border-2 focus:border-gray-900 focus:text-gray-900" type="text" id="q" name="q" x-model="q">
            <Bouton class="mx-8 md:mx-24 lg:mx-48 xl:mx-72 " type="submit">Rechercher</Bouton>
        </form>
    </div>

    <div class="font-paytone underline text-center text-base md:text-2xl lg:text-4xl xl:text-3xl text-indigo-400 mb-64 md:mb-40 lg:mb-36 xl:mb-32 2xl:mb-28">
        <RouterLink to="/">Retourner à l'accueil</RouterLink>
    </div>
    <div class="md:pb-3 lg:pb-4 xl:pb-6 2xl:pb-9"></div>
</template>