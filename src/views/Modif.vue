<script setup>
import Bouton from "../components/Bouton.vue"
</script>

<template>
    <form @submit.prevent="updateArtiste">
        <div>
            <div>
                <h3 class="font-semibold text-xl text-center mb-4">Modification d'une fiche Artiste</h3>
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
            <Bouton class="mt-4" type="submit">Modifier</Bouton>
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
            imageData: null,
            artistes: {
                nom: null,
                image: null,
                type: null,
                dates: null,
            },
            refParticipant: null,
            imgModifiee: false,
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
                    this.imageData = url;
                })
                .catch((error) =>{
                    console.log('erreur downloadURL, error');
                })
        },

        async updateArtiste() {
            if (this.imgModifiee) {
                const storage = getStorage();
                let docRef = ref(storage, 'artistes/' + this.photoActuelle);
                deleteObject(docRef);
                docRef = ref(storage, "artistes/" + this.artistes.image);
                await uploadString(docRef, this.imageData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.artistes.image);
                })
            }
            const firestore = getFirestore();
            await updateDoc(doc(firestore, 'artistes', this.$route.params.id), this.artistes);
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