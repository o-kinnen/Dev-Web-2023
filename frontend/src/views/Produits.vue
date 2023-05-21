<template>
  <div>
    <produitsListe :listeProduit="produits" :getProduits="getProduits"></produitsListe>
    <produitAdd :getProduits="getProduits"></produitAdd>
  </div>
</template>

<script>
import axios from 'axios';
import ProduitsListe from "../components/ProduitsListe.vue";
import ProduitAdd from "../components/ProduitAdd.vue";
import { API } from "@/main";

export default {
  name: "ProduitsSotrexco",
  components: {
    ProduitsListe,
    ProduitAdd
  },
  data() {
    return {
      produits: []
    }
  },
  mounted() {
    this.getProduits();
  },
  methods: {
    getProduits() {
      axios.get(API + '/produits')
        .then(response => {
          this.produits = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des produits :', error);
        });
    }
  }
}
</script>


<style scoped></style>