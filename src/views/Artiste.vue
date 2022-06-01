<script setup>
import Bouton from "../components/Bouton.vue";
</script>

<template>
        <h2 class="font-gothic font-bold text-2xl text-center mt-12 mb-2">Ibrahim Maalouf</h2>

        <div class="flex justify-center mb-8 lg:mt-8">
                <img class="rounded-lg lg:w-80" src="../../public/img/maalouf.webp" alt="Photo d'Ibrahim Maalouf">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 font-montserrat font-medium text-sm mb-8">
                <div class="my-4 lg:mx-8 xl:mx-16 lg:text-base">
                        <h5 class="font-bold text-lg text-center">À&nbsp;propos</h5>
                        <p class="mx-4 mt-4">Ibrahim Maalouf est un artiste franco-libanais qui a embrasé de nombreuses scènes, dont celles du prestigieux Montreux Jazz Festival ou bien celles des Francofolies plus récemment.</p>
                        <p class="mx-4 mt-4">Pour ce festival, il interprétera un ensemble de ses meilleurs titres, revisités spécialement pour l'occasion.</p>
                </div>

                <div class="my-4 md:mb-16 lg:mx-0 lg:text-center lg:text-base">
                        <h5 class="font-bold text-lg text-center">Ses&nbsp;représentations</h5>
                        <p class="mx-4 mt-4">Ibrahim Maalouf sera présent sur scène le 13 juillet de 22h à minuit.</p>
                        <div class="flex justify-center">
                                <RouterLink to="/concert"><Bouton class="mt-8 md:mt-16 md:mb-16 lg:mt-12 lg:mb-12">En savoir plus sur le concert</Bouton></RouterLink>
                        </div>
                </div>
        </div>
</template>