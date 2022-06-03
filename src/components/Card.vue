<template>
    <div class="flex flex-col text-center bg-blue-850 rounded-t-xl rounded-b-md mb-16 mx-8 md:mx-24 lg:mx-48 xl:mx-72 2xl:mx-96">
        <img class="rounded-t-3xl xl:h-72 md:h-36 lg:h-48 mb-6 w-full" :src="image" alt="Photo de l'artiste">
        <h3 class="text-lg md:text-xl lg:text-2xl font-bold font-montserrat text-gray-100 mb-8">{{nom}}</h3>
    </div>
</template>

<script>
export default {
    props: {
        nom:String,
        image:String,
    },
}
</script>