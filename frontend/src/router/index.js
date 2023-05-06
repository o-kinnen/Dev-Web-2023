import { createRouter, createWebHistory } from 'vue-router'
import Produits from '../views/Produits.vue'
import Accueil from "../views/Accueil"
import Realisation from "@/views/Realisation";
import Service from "@/views/Service";
import Connexion from "@/views/Connexion";
import Inscription from "@/views/Inscription";
import Realisation1 from "@/views/Realisation1";
import Realisation2 from "@/views/Realisation2";
import Realisation3 from "@/views/Realisation3";


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: "/",
            component: Accueil
        },
        {
            path: "/produits",
            component: Produits
        },
        {
            path: "/realisation",
            component: Realisation
        },
        {
            path: "/realisation/1",
            component: Realisation1
        },
        {
            path: "/realisation/2",
            component: Realisation2
        },
        {
            path: "/realisation/3",
            component: Realisation3
        },
        {
            path: "/service",
            component: Service
        },
        {
            path: "/connexion",
            component: Connexion
        },
        {
            path: "/inscription",
            component: Inscription
        }
    ]
})

export default router