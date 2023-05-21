<template>
  <br><br><br><br>
  <h1>Vous etes sur la page des services</h1>
  <h2>Voici les différents services disponibles</h2>
  <div>
    <a href="mailto:a.kalinowska@students.ephec.be">Contactez-moi</a>
    <servicesListe :listeService="services"></servicesListe>
  </div>
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

<style scoped></style>