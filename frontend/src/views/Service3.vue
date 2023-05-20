<template>
  <br><br><br><br><br><br>
  <a href="mailto:a.kalinowska@students.ephec.be">Contactez-moi</a>
  <br><br>
  <div v-for="service in services" :key="service.id_service">
    <h1>{{ service.nom_service }}</h1>
    <p>{{ service.service_description }}</p>
    <p>Ceci est une explication détaillée de la description</p>
    <img src="../img/3.jpg" />
  </div>
</template>

<script>
import axios from 'axios';
import { API } from "@/main";
export default {
  name: "ServicesSotrexco",
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
      axios.get(API + '/service/3')
        .then(response => {
          this.services = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped></style>