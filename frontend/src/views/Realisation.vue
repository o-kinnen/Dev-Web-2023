<template>
  <br><br><br><br><br><br>
  <div>
    <div class="titre">
      <h1>{{ titre }}</h1>
    </div>
  </div>
  <div>
    <realisationListe :listeRealisation="realisations"></realisationListe>
  </div>
</template>

<script>
import axios from 'axios';
import RealisationListe from "../components/RealisationListe.vue";

export default {
  name: "RealisationSotrexco",
  components : {
    RealisationListe
  },
  data() {
    return {
      realisations: [],
      titre : "Nos différentes réalisations"
    }
  },
  mounted() {
    this.getRealisations();
    setInterval(this.getRealisations, 10000); // actualise les données toutes les 10 secondes
  },
  methods: {
    getRealisations() {
      axios.get('http://localhost:3000/realisation')
        .then(response => {
          this.realisations = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.titre {
  text-align: center;
}
</style>