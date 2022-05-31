<script setup>
import Card from "../components/Card.vue";
</script>

<template>
    <h2 class="font-gothic font-bold text-2xl text-center my-12">Guide de style</h2>

    <h3 class="text-xl font-gothic font-medium mx-4 mt-10 border-b-2">Couleurs</h3>
    <div class="flex justify-center my-12">
        <div class="w-40 h-20 mx-4 rounded-md bg-gray-900 border-gray-100 border-2"></div>
        <div class="w-40 h-20 mx-4 rounded-md bg-blue-850"></div>
        <div class="w-40 h-20 mx-4 rounded-md bg-indigo-400"></div>
        <div class="w-40 h-20 mx-4 rounded-md bg-gray-100"></div>
    </div>

    <h3 class="text-xl font-gothic font-medium mx-4 mt-10 border-b-2">Polices</h3>
    <div class="flex justify-center text-center">
        <div class="flex flex-col">
            <p class="text-3xl font-montserrat mx-14 my-7">Montserrat</p>
            <p class="text-4xl font-paytone mx-14 my-7">Paytone One</p>
            <p class="text-4xl font-gothic mx-14 my-7">Gothic A1</p>
        </div>
    </div>

    <h3 class="text-xl font-gothic font-medium mx-4 mt-10 border-b-2">Icônes</h3>
    <div class="flex m-6 justify-center space-x-24">
        <ArrowNarrowRightIcon class="h-20" />
        <XIcon class="h-20" />
    </div>

    <h3 class="text-2xl font-gothic mx-4 mt-10 border-b-2">Composants</h3>
    <div class="mt-8">
        <Card />
    </div>
</template>

<script>
import { ArrowNarrowRightIcon, XIcon } from "@heroicons/vue/outline";

export default {
  name: "App",
  components: { ArrowNarrowRightIcon, XIcon },
};
</script>