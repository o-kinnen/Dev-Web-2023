
<template>

  <div class="bloc-modale">

    <div class="overlay"></div>

    <div class="modale-card"></div>
    <div class="btn-modale btn btn-danger">
      <table class="clients-table">
        <thead>
        <tr>
          <th>Nom de la société</th>
          <th>Personne de contact</th>
          <th>Fonction</th>
          <th>numéro de téléphone</th>
          <th>adresse e-mail</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{client.nom_societe}}</td>
          <td>{{client.prenom}} {{client.nom}}</td>
          <td>{{client.fonction}}</td>
          <td><a href="tel:{{client.telephone}}">{{client.telephone}}</a></td>
          <td><a href="mailto:{{client.mail_client}}">{{client.mail_client}}</a></td>
        </tr>
        </tbody>
      </table>
      <button color="red" @click="$emit('fermer')">fermer</button>
    </div>
  </div>

</template>


<script>

import axios from "axios";
export default {
  name: "ModaleClients",
  props : ["id_client"],
  methods: {
    getClient() {
      axios.get('http://localhost:3000/clients/' + this.id_client)
          .then(response => {
            this.client = response.data[0];
          })
          .catch(error => {
            console.log(error);
          });
    }
  },
  data(){
    return {
      client : {}
    }
  },
  mounted() {
    this.getClient();
  },
}
</script>


  <style></style>