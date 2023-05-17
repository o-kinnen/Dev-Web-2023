<template>
  <br><br>
  <div v-for="(service, index) in listeService" :key="index">
    <img :src ="images[service.id_service - 1]" width = "150" height = "150">
    <p>{{service.nom_service}}</p>
    <p>{{service.service_description}}</p>
    <p><a :href = "/service/ + service.id_service">En savoir plus</a></p>

  </div>
</template>

<script>

export default {
  name: "ServicesAffichage",
  props: ['listeService'],
  data (){
    return {
      images : [ require('../img/1.png'),require('../img/2.png'),require('../img/3.jpg') ]
    }
  }
}
</script>

<style scoped>


</style>