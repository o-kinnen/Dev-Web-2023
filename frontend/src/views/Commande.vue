<template>
  <br><br><br><br>
  <p>Vous voulez commander un service/produit ?</p>
  <form>
    <p>
      <label for="mail">Mail : </label>
      <input type="text" v-model="mail" name="mail">
    </p>
    <p>
      <label for="tel">Tel : </label>
      <input type="text" v-model="tel" name="tel">
    </p>
    <p>
      <label for="type">Objet de la commande</label>
      <input type="radio" v-model="type" value="Produit">
      <label>Produit</label>
      <input type="radio" v-model="type" value="Service">
      <label>Service</label>
    </p>
    <p>
      <label for="nom">Nom : </label>
      <input type="text" v-model="nom" name="nom">
    </p>
    <p>
      <label for="description">Description : </label>
      <input type="text" name="description">
    </p>
    <p>
      <input type="submit" value="Envoyer">
    </p>
  </form>

</template>

<script>
export default {
  name: "CommandeTest",
  data() {
    return {
      type: '',
      tel: '',
      mail: '',
      nom: ''
    }
  }
}

</script>

<style scoped>
form{
  text-align: center;
}

</style>