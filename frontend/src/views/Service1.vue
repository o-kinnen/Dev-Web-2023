<template>
<section>
  <div class="service" v-for="service in services" :key="service.id_service">
    <h1>{{ service.nom_service }}</h1>
    <p>{{ service.service_description }}</p>
    <p>Ceci est une explication détaillée de la description</p>
    <img src="../img/1.png" />
  </div>
  <a href="mailto:a.kalinowska@students.ephec.be">Contactez-moi</a>
</section>
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
      axios.get(API + '/service/1')
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

<style scoped>

.service {
  text-align: center;
  border: 1px solid #000;

}

section{
  padding-top: 100px;
  border: 1px solid #000;
  text-align: center;
}



</style>