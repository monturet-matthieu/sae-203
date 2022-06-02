import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDD8FfQmeRteCJCVLg5en-M_2ABB1_uogE",
    authDomain: "sae-203-98193.firebaseapp.com",
    projectId: "sae-203-98193",
    storageBucket: "sae-203-98193.appspot.com",
    messagingSenderId: "47356131074",
    appId: "1:47356131074:web:dbd437c7fdd752a22a741b"
};

const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)


app.use(router)

app.mount('#app')
