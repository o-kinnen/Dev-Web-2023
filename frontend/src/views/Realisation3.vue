<template>
  <br><br><br><br><br><br>
  <div class="real" v-for="realisation in realisations" :key="realisation.id_realisation">
    <h1>{{ realisation.nom_realisation }}</h1>
    <p>{{ realisation.type_realisation }}</p>
    <p>{{ realisation.info_realisation }}</p>
    <p>Ceci est un exemple de description</p>
    <img src="../img/realisations/img3.jpg" />
  </div>
</template>

<script>
import axios from 'axios';
import { API } from "@/main";
export default {
  name: "RealisationSotrexco",
  data() {
    return {
      realisations: []
    }
  },
  mounted() {
    this.getRealisations();
  },
  methods: {
    getRealisations() {
      axios.get(API + '/realisation/3')
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