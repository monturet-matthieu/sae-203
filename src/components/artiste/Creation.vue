<script setup>
import Bouton from "../Bouton.vue"
</script>

<template>
    <form @submit.prevent="createArtiste">
        <div>
            <div>
                <h3 class="font-semibold text-xl text-center mb-4">Création d'une fiche Artiste</h3>
            </div>

            <div>
                <div class="flex text-gray-900">
                    <div>
                        <div>
                            <img class="w-full" :src="imageData" />
                        </div>
                    </div>

                    <div class="flex flex-col justify-center space-y-4">
                        <div>
                            <div>
                                <span>Nom</span>
                            </div>
                            <input placeholder="Nom de l'artiste" v-model="artistes.nom" required>
                        </div>

                        <div>
                            <div>
                                <span>Image</span>
                            </div>
                            <div>
                                <input class="md:ml-48" type="file" ref="file" id="file" @change="previewImage">
                            </div>
                        </div>

                        <div>
                            <div>
                                <span>Type d'artiste (solo, groupe, orchestre...)</span>
                            </div>
                            <input type="text" placeholder="Type de l'artiste" v-model="artistes.type" required>
                        </div>

                        <div>
                            <div>
                                <span>Dates des concerts</span>
                            </div>
                            <input type="date" format="dd/mm/yyyy" required>
                        </div>
                    </div>
                </div>
            </div>
            <Bouton class="mt-4" type="submit">Créer</Bouton>
        </div>
    </form>
</template>

<script>
import{ SaveIcon } from '@heroicons/vue/outline'

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
  components: { SaveIcon },
  data(){
    return{
        imageData:null,
        artistes:{
            nom:null,
            image:null,
            type:null,
            dates:null,
        }
    }
  },
  methods:{
    async createArtiste(){
        const storage = getStorage();
        const refStorage = ref(storage, 'artistes/'+this.artistes.image);
        await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
            console.log('Uploaded a base64 string');
            const db = getFirestore();
            const docRef = addDoc(collection(db, 'artistes'), this.artistes);
        });
    },
    previewImage: function(event) {
        this.file = this.$refs.file.files[0];
        this.artistes.image - this.file.name;
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.imageData = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        } 
    },
  },
}
</script>