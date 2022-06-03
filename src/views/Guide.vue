<script setup>
import Card from "../components/Card.vue";
import Bouton from "../components/Bouton.vue";
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
    <div class="flex m-6 justify-center space-x-2 xl:space-x-24">
        <ArrowNarrowRightIcon class="md:h-72 lg:h-64 xl:h-20" />
        <XIcon class="md:h-72 lg:h-64 xl:h-20" />
        <SaveIcon class="md:h-72 lg:h-64 xl:h-20" />
        <PencilIcon class="md:h-72 lg:h-64 xl:h-20" />
        <TrashIcon class="md:h-72 lg:h-64 xl:h-20" />
    </div>

    <h3 class="text-2xl font-gothic mx-4 mt-10 border-b-2">Composants</h3>
    <div class="flex justify-center mt-8 mb-12">
        <Bouton>Bouton</Bouton>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-10 md:space-x-12  w-full">
        <RouterLink to="/artiste" v-for="artistes in listeArtistesSynchro" :key="artistes.id"><Card class="md:w-full" :nom="artistes.nom" :image="artistes.image" /></RouterLink>
    </div>
</template>

<script>
import { ArrowNarrowRightIcon, XIcon, SaveIcon, TrashIcon, PencilIcon } from "@heroicons/vue/outline";

import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import {
    getStorage,
    ref,
    getDownloadURL,
    uploadString,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

export default {
    name: "App",
    components: { ArrowNarrowRightIcon, XIcon, SaveIcon, TrashIcon, PencilIcon },
    data(){
    return{
        nom:null,
        listeArtistesSynchro:[]
    }
  },
  mounted(){
      this.getArtistesSynchro();
      
  },
  methods:{
      async getArtistesSynchro(){
          const firestore = getFirestore();
          const dbArtistes= collection(firestore, "artistes");
          const query = await onSnapshot(dbArtistes, (snapshot) =>{
              this.listeArtistesSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}
              ));
              console.log(this.listeArtistesSynchro);
              
              this.listeArtistesSynchro.forEach(function(artistes){
                  const storage = getStorage();
                  const spaceRef = ref(storage, 'artistes/'+ artistes.image);
                  getDownloadURL(spaceRef)
                  .then((url) =>{
                      artistes.image = url;
                  })
                  .catch((error) =>{
                      console.log('erreur downloadUrl', error);
                  })
              });
          })
      },
      createArtistes(){},
      updateArtistes(artistes){},
      deleteArtistes(artistes){},
  }
};
</script>