import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Programmation from '../views/Programmation.vue'
import Artistes from '../views/Artistes.vue'
import Festival from '../views/Festival.vue'
import Mentionslegales from '../views/Mentionslegales.vue'
import Artiste from '../views/Artiste.vue'
import Contact from '../views/Contact.vue'
import Guide from '../views/Guide.vue'
import Concert from '../views/Concert.vue'
import View404 from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/programmation', name: 'Programmation', component: Programmation },
    { path: '/artistes', name: 'Artistes', component: Artistes },
    { path: '/festival', name: 'Festival', component: Festival },
    { path: '/mentionslegales', name: 'Mentionslegales', component: Mentionslegales },
    { path: '/artiste', name: 'Artiste', component: Artiste },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/guide', name: 'Guide', component: Guide },
    { path: '/concert', name: 'Concert', component: Concert },
    { path: '/:pathMatch(.*)', name: '404View', component: View404 },
  ]
})

export default router
