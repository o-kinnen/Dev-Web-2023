<template>
  <br><br><br><br>
  <h1>Services</h1>
  <h2>Voici les différents services disponibles</h2>
  <a href="mailto:a.kalinowska@students.ephec.be">Contactez-moi</a>
  <br><br>
  <div class="service">
    <servicesListe :listeService="services"></servicesListe>
  </div>
  <p><a :href = "/commande/" >Commander</a></p>
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