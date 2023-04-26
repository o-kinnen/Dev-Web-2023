import { createRouter, createWebHistory } from 'vue-router'
import Produits from '../views/Produits.vue'
import Accueil from "../views/Accueil"
import Realisation from "@/views/Realisation";
import Service from "@/views/Service";
import Connexion from "@/views/Connexion";
import Inscription from "@/views/Inscription";
import Clients from "@/views/Clients"

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
        },
        {
            path: "/clients",
            component: Clients
        }
    ]
})

export default router