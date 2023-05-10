<template>
  <br><br><br><br><br><br>
  <div class="real" v-for="realisation in realisations" :key="realisation.id_realisation">
    <h1>{{realisation.nom_realisation}}</h1>
    <p>{{realisation.type_realisation}}</p>
    <p>{{realisation.info_realisation}}</p>
    <p>Ceci est un exemple de description</p>
    <img src="../img/realisations/img3.jpg"/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "RealisationSotrexco",
  data() {
    return {
      realisations: []
    }
  },
  mounted() {
    this.getRealisations();
    //setInterval(this.getRealisations, 10000); // actualise les données toutes les 10 secondes
  },
  methods: {
    getRealisations() {
      axios.get('http://localhost:3000/realisation/3')
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
    .real {
      clear: left;
      padding: 1rem;
      text-align: center;
    }
</style>