<template>
  <br><br><br><br><br><br>
  <div>
    <div class="titre">
      <h1>{{ titre }}</h1>
    </div>
  </div>
  <br><br><br><br><br>
  <div class="real" v-for="realisation in realisations" :key="realisation.id_realisation">
    <img v-if="realisation.id_realisation==1" src="../img/realisations/img1.jpg"/>
    <img v-else-if="realisation.id_realisation==2" src="../img/realisations/img2.jpg"/>
    <img v-else-if="realisation.id_realisation==3" src="../img/realisations/img3.jpg"/>
    <p>{{realisation.type_realisation}}</p>
    <p>{{realisation.nom_realisation}}</p>
    <p>{{realisation.info_realisation}}</p>
    <button href="">En savoir plus</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "RealisationSotrexco",
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
  img {
      float: left;
      margin-right: 1rem;
    }
    .real {
      clear: left;
      padding: 1rem;
    }
</style>