<script setup>
import Bouton from '../components/Bouton.vue'
import Card from '../components/Card.vue'
import Creation from "../components/artiste/Creation.vue"
</script>

<template>
    <h2 class="font-gothic font-bold text-2xl text-center my-12">Les artistes</h2>

    <p class="2xl:mx-64 xl:mx-48 lg:mx-32 md:mx-16 md:text-left text-center mx-6 mb-4 font-medium font-montserrat lg:text-lg md:text-base sm:text-sm">Cette page regroupe tous les artistes et groupes qui feront leur apparition durant le festival. Des Gitanes Maïs à NCY Milky Band, en passant par Ibrahim Maalouf qui nous honorera de sa présence ainsi que l'Orchestre Régional de Jazz d'Alsace qui clôturera le festival, le festival vous proposera un plein d'artistes talentueux.</p>
    <p class="2xl:mx-64 xl:mx-48 lg:mx-32 md:mx-16 text-center mx-6 mb-16 font-semibold lg:text-lg text-base font-montserrat md:text-base sm:text-sm">Pour obtenir plus de renseignements sur un artiste ou groupe, cliquez directement sur la carte de ce dernier. Vous pouvez également classer les cartes par ordre alphabétique ou par type d'artiste (artiste seul, groupe ou orchestre).</p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-10 md:space-x-12  w-full">
        <RouterLink to="/artiste" v-for="artistes in listeArtistesSynchro" :key="artistes.id"><Card class="md:w-full" :nom="artistes.nom" :image="artistes.image" /></RouterLink>
    </div>

    <Creation class="flex justify-center mb-12" />
</template>

<script>
import { SaveIcon, TrashIcon, PencilIcon } from '@heroicons/vue/outline'

import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot,
    query,
    orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import {
    getStorage,
    ref,
    getDownloadURL,
    uploadString,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

export default {
  components: { SaveIcon, TrashIcon, PencilIcon },
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
  }
}
</script>