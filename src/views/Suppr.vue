<script setup>
import Bouton from "../components/Bouton.vue"
</script>

<template>
    <form @submit.prevent="supprArtiste">
        <div>
            <div>
                <h3 class="font-semibold text-xl text-center mb-4">Suppression d'une fiche Artiste</h3>
            </div>

            <div>
                <div class="flex text-gray-900">
                    <div>
                        <div>
                            <img class="w-full" :src="photoActuelle" />
                        </div>
                    </div>

                    <div class="flex flex-col justify-center space-y-4">
                        <div>
                            <div>
                                <span>Nom</span>
                            </div>
                            <input placeholder="Nom de l'artiste" v-model="artistes.nom" disabled>
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
                            <input type="text" placeholder="Type de l'artiste" v-model="artistes.type" disabled>
                        </div>

                        <div>
                            <div>
                                <span>Dates des concerts</span>
                            </div>
                            <input type="date" format="dd/mm/yyyy" disabled>
                        </div>
                        
                        <h5 role="alert">Attention, vous allez supprimer cet artiste, cette action est irréversible !</h5>
                    </div>
                </div>
            </div>
            <Bouton class="mt-4" type="submit">Supprimer</Bouton>
            <RouterLink to="/artistes">
                <Bouton class="mt-4">Retour</Bouton>
            </RouterLink>
        </div>
    </form>
</template>

<script>
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
    orderBy
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import {
    getStorage,
    ref,
    getDownloadURL,
    uploadString,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

export default {
    data() {
        return {
            artistes: {
                nom: null,
                image: null,
                type: null,
                dates: null,
            },
            refParticipant: null,
            photoActuelle: null
        }
    },
    mounted() {
        console.log("id.artistes", this.$route.params.id);
        this.getArtistes(this.$route.params.id);
    },
    methods: {
        async getArtistes(id) {
            const firestore = getFirestore();
            const docRef = doc(firestore, "artistes", id);
            this.refArtistes = await getDoc(docRef);
            if (this.refArtistes.exists()) {
                this.artistes = this.refArtistes.data();
                this.photoActuelle = this.artistes.image;
            }
            else {
                this.console.log("Cet artiste n'existe pas");
            }
            const storage = getStorage();
            const spaceRef = ref(storage, 'artistes/'+this.artistes.image);
            getDownloadURL(spaceRef)
                .then((url) => {
                    this.photoActuelle = url;
                })
                .catch((error) =>{
                    console.log('erreur downloadURL, error');
                })
        },

        async supprArtiste() {
            const firestore = getFirestore();
            await deleteDoc(doc(firestore, 'artistes', this.$route.params.id));
            const storage = getStorage();
            let docRef = ref(storage, 'artistes/'+this.artistes.image);
            deleteObject(docRef);
            this.$router.push('/artistes');
        },
    },
    previewImage: function (event) {
        this.file = this.$refs.file.files[0];
        this.artistes.image - this.file.name;
        this.imgModifiee = true;
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.imageData = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        }
    },
}
</script>