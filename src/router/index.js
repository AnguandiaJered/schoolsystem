/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

// gestion eleve
import Annee from '@/pages/eleve/Annee.vue'
import Classe from '@/pages/eleve/Classe.vue'
import Eleve from '@/pages/eleve/Eleve.vue'
import Inscription from '@/pages/eleve/Inscription.vue'

//gestion cote
import Cotation from '@/pages/cote/Cotation.vue'
import Cours from '@/pages/cote/Cours.vue'
import Discipline from '@/pages/cote/Discipline.vue'
import Mension from '@/pages/cote/Mension.vue'
import Periode from '@/pages/cote/Periode.vue'
import Promotion from '@/pages/cote/Promotion.vue'

//gestion frais
import Frais from '@/pages/frais/Frais.vue'
import Paiement from '@/pages/frais/Paiement.vue'
import Prevision from '@/pages/frais/Prevision.vue'

//gestion bibliotheque
import Emprunt_livre from '@/pages/bibliotheque/Emprunt_livre.vue'
import Livre from '@/pages/bibliotheque/Livre.vue'
import Remise_livre from '@/pages/bibliotheque/Remise_livre.vue'

//gestion Personnel
import Affectation from '@/pages/personnel/Affectation.vue'
import Enseignant from '@/pages/personnel/Enseignant.vue'
import User from '@/pages/personnel/User.vue'

//gestion Presence
import Presence from '@/pages/presence/Presence.vue'

// Dashoard
import Dashboard from '@/components/Dashboard.vue'
import Ecole from '@/components/Ecole.vue'

import Login from '@/pages/auth/Login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
  routes:[
    // {
    //   path: '/',
    //   name: 'auth',
    //   component: Login,
    // },
      {
        path: '/admin/dashboard',
        name: 'admin',
        component: Dashboard,
      },
      {
        path: '/admin/utilisateurs',
        name: 'Utilisateurs',
        component: User,
      },
      {
        path: '/admin/entreprise',
        name: 'entreprise',
        component: Ecole,
      },
      {
        path: '/admin/annee',
        name: 'annee',
        component: Annee,
      },
      {
        path: '/admin/classe',
        name: 'classe',
        component: Classe,
      },
      {
        path: '/admin/eleve',
        name: 'eleve',
        component: Eleve,
      },
      {
        path: '/admin/inscription',
        name: 'inscription',
        component: Inscription,
      },
      {
        path: '/admin/cotation',
        name: 'cotation',
        component: Cotation,
      },
      {
        path: '/admin/cours',
        name: 'cours',
        component: Cours,
      },
      {
        path: '/admin/discipline',
        name: 'discipline',
        component: Discipline,
      },
      {
        path: '/admin/mension',
        name: 'mension',
        component: Mension,
      },
      {
        path: '/admin/periode',
        name: 'periode',
        component: Periode,
      },
      {
        path: '/admin/promotion',
        name: 'promotion',
        component: Promotion,
      },
      {
        path: '/admin/frais',
        name: 'frais',
        component: Frais,
      },
      {
        path: '/admin/paiement',
        name: 'paiement',
        component: Paiement,
      },
      {
        path: '/admin/prevision',
        name: 'prevision',
        component: Prevision,
      },
      {
        path: '/admin/empruntLivre',
        name: 'emprunt',
        component: Emprunt_livre,
      },
      {
        path: '/admin/livre',
        name: 'livre',
        component: Livre,
      },
      {
        path: '/admin/remiseLivre',
        name: 'remise',
        component: Remise_livre,
      },
      {
        path: '/admin/affectation',
        name: 'affectation',
        component: Affectation,
      },
      {
        path: '/admin/enseignant',
        name: 'enseignant',
        component: Enseignant,
      },
      {
        path: '/admin/presence',
        name: 'presence',
        component: Presence,
      },
  ]
})


// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
