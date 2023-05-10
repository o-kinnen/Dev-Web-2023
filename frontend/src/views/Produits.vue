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
      axios.get('http://localhost:3000/produits')
        .then(response => {
          this.produits = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>


<style scoped></style>