<template>
    <h2 class="font-gothic font-bold text-2xl text-center my-12">Programmation</h2>

    <p class="text-montserrat text-lg xl:mx-64 lg:mx-32 md:16 sm:mx-8 mt-12 text-center">Voici le planning complet de Blue Jazz !</p>
    <p class="text-montserrat text-lg xl:mx-64 lg:mx-32 md:16 sm:mx-8 mb-12 text-center">Vous retrouverez les artistes présents à notre festival, la plupart faisant plusieurs apparitions dans la semaine. Ce planning peut être sujet à des changements de dernière minute, pensez à le consulter régulièrement !</p>
    
    <table class="w-full table-fixed text-center mb-8 border-collapse font-montserrat text-sm font-medium md:text-base lg:text-lg lg:font-semibold">
        <caption class="sr-only">Planning des différents passages d'artistes sur la durée du festival</caption>
            <colgroup>
            <col class="border-2">
            <col class="border-2">
            <col class="border-2">
            <col class="border-2">
            <col class="border-2">
            <col class="border-2">
            </colgroup>
        <thead class="border-4 border-b-2 bg-blue-850">
            <tr>
                <th class="py-4 text-2xl font-extrabold font-paytone" colspan="7">Programmation</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-4 border-b-2">
                <td class="py-2" scope="col">Horaires</td>
                <td class="px-2" scope="col">10 juillet</td>
                <td class="px-2" scope="col">11 juillet</td>
                <td class="px-2" scope="col">12 juillet</td>
                <td class="px-2" scope="col">13 juillet</td>
                <td class="px-2" scope="col">14 juillet</td>
                <td class="px-2" scope="col">15 juillet</td>
            </tr>
            <tr class="border-2 border-x-4">
                <td class="py-16" scope="row">19h-20h</td>
                <td class="flex justify-center mt-6"><XIcon class="w-24 h-24" /></td>
                <td>Stabar</td>
                <td class="flex justify-center mt-6"><XIcon class="w-24 h-24" /></td>
                <td>Emile Parisien</td>
                <td class="flex justify-center mt-6"><XIcon class="w-24 h-24" /></td>
                <td>NCY Milky Band</td>
            </tr>
            <tr class="border-2 border-x-4">
                <td class="py-16" scope="row">20h-21h</td>
                <td class="flex justify-center mt-6"><XIcon class="w-24 h-24" /></td>
                <td>Les Mains Sales</td>
                <td>La Récré</td>
                <td>Maxime Bender Quartet</td>
                <td>Les Mains Sales</td>
                <td>Gabriel Vallejo</td>
            </tr>
            <tr class="border-2 border-x-4">
                <td class="py-16" scope="row">21h-22h</td>
                <td>Les Gitanes Maïs</td>
                <td>Baptiste Herbin</td>
                <td>NCY Milky Band</td>
                <td class="flex justify-center mt-6"><XIcon class="w-24 h-24" /></td>
                <td>Baptiste Herbin</td>
                <td>Orchestre Régional de Jazz Alsace</td>
            </tr>
            <tr class="border-2 border-x-4">
                <td class="py-16" scope="row">22h-23h</td>
                <td>Emile Parisien</td>
                <td>Maxime Bender Quartet</td>
                <td>Denis Badault</td>
                <td>Ibrahim Maalouf</td>
                <td>Gabriel Vallejo</td>
                <td>Orchestre Régional de Jazz Alsace</td>
            </tr>
            <tr class="border-2 border-x-4">
                <td class="py-16" scope="row">23h-0h</td>
                <td>NCY Milky Band</td>
                <td class="flex justify-center mt-6"><XIcon class="w-24 h-24" /></td>
                <td>Les Gitanes Maïs</td>
                <td>Ibrahim Maalouf</td>
                <td>Les Gitanes Maïs</td>
                <td>Orchestre Régional de Jazz Alsace</td>
            </tr>
        </tbody>
        <tfoot class="border-b-4 border-x-4">
            <tr class="border-2">
                <td class="py-16" scope="row">0h-...</td>
                <td>Denis Badault</td>
                <td class="flex justify-center mt-6"><XIcon class="w-24 h-24" /></td>
                <td>Stabar</td>
                <td class="flex justify-center mt-6"><XIcon class="w-24 h-24" /></td>
                <td>La Récré</td>
                <td class="flex justify-center mt-6"><XIcon class="w-24 h-24" /></td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
import { XIcon } from '@heroicons/vue/outline'
export default {
  components: { XIcon }
}
</script>