<template>
  <br><br><br><br><br>
  <div class="realisation" v-for="realisation in listeRealisation" :key="realisation.id">
      <img src="../img/img1.jpg">
      <p>{{realisation.type_realisation}}</p>
      <p>{{realisation.nom_realisation}}</p>
      <p>{{realisation.info_realisation}}</p>
      <button href="">En savoir plus</button>
  </div>
</template>

<script>
export default {
  name: "RealisationsAffichage",
  props : ['listeRealisation'],
  data () {
    return {
    }
  }
};
</script>

<style scoped>
  img {
    float: left;
    margin-right: 1rem;
  }
  .realisation {
    clear: left;
    padding: 1rem;
  }
</style>