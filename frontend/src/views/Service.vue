<template>
  <section id="intro">
    <div class="container">
      <h2>Bienvenue sur la page des services</h2>
      <p>Voici les différents services disponibles</p>
    </div>
  </section>

  <section id="service">
    <div class="service">
      <servicesListe :listeService="services"></servicesListe>
    </div>
    <div class="contact">
      <p><a :href = "/commande/" >Commander</a></p>
      <p><a href="mailto:a.kalinowska@students.ephec.be">Contactez-moi</a></p>
    </div>
  </section>
</template>

<script>

import axios from 'axios';
import ServicesListe from "../components/ServicesListe.vue";
import { API } from "@/main";

export default {
  name: "ServiceSotrexco",
  components: {
    ServicesListe
  },
  data() {
    return {
      services: []
    }
  },
  mounted() {
    this.getServices();
  },
  methods: {
    getServices() {
      axios.get(API + '/service')
        .then(response => {
          this.services = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

}

</script>

<style scoped>

#intro {
  padding-top: 100px;
}

#intro h2 {
  font-size: 45px;
  font-weight: bold;
  text-align: center;
}

#intro p {
  font-size: 20px;
  text-align: center;
}

.service{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}

servicesListe{
  margin-left: auto;
  margin-right: auto;
}

p{
  text-align: center;
}

</style>