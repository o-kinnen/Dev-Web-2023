<template>
  <section id="intro">
    <div>
      <h1>{{ titre }}</h1>
    </div>
  </section>

  <section id="real">
    <div class="real" v-for="realisation in realisations" :key="realisation.id_realisation">
      <img :src="getImage(realisation.id_realisation)" />
      <p>{{ realisation.type_realisation }}</p>
      <p>{{ realisation.nom_realisation }}</p>
      <p>{{ realisation.info_realisation }}</p>
      <a :href="`/realisation/${realisation.id_realisation}`">En savoir plus</a>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { API } from "@/main";

// Utiliser la fonction require.context pour charger toutes les images
const imagesContext = require.context('../img/realisations', false, /\.(png|jpe?g|gif|webp)$/);
const images = imagesContext.keys().map(key => imagesContext(key));

export default {
  name: "RealisationSotrexco",
  data() {
    return {
      images: images,
      realisations: [],
      titre: "Nos différentes réalisations"
    }
  },
  mounted() {
    this.getRealisations();
  },
  methods: {
    getRealisations() {
      axios.get(API + '/realisation')
        .then(response => {
          this.realisations = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getImage(realisationId) {
      // Retourner l'image correspondante à l'identifiant de réalisation
      return this.images[realisationId - 1];
    }
  }
}
</script>

<style scoped>

#intro {
  padding-top: 100px;
}

#intro h1 {
  font-size: 45px;
  font-weight: bold;
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
