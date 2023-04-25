import { createRouter, createWebHistory } from 'vue-router'
import Produits from '../views/Produits.vue'
import Accueil from "../views/Accueil"
import Activite from "@/views/Activite";
import Industrie from "@/views/Industrie";
import Alimentaire from "@/views/Alimentaire";
import Equipement from "@/views/Equipement";
import Realisation from "@/views/Realisation";
import Service from "@/views/Service";
import ConnexionInscription from "@/views/ConnexionInscription";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: "/",
            component: Accueil
        },
        {
            path: "/activite",
            component: Activite
        },
        {
            path: "/industrie",
            component: Industrie
        },
        {
            path: "/alimentaire",
            component: Alimentaire
        },
        {
            path: "/equipement",
            component: Equipement
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
            component: ConnexionInscription
        }
    ]
})

export default router