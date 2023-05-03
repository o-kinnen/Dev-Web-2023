
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
        <tr v-for="(client, index) in clients" :key="index">
          <td>{{client.nom_societe}}</td>
          <td>{{client.prenom}} {{client.nom}}</td>
          <td>{{client.fonction}}</td>
          <td><a href="tel:{{client.telephone}}">{{client.telephone}}</a></td>
          <td><a href="mailto:{{client.mail_client}}">{{client.mail_client}}</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>


  <script>

  /*import axios from "axios";

  export default {
    name: "ModaleClients",
    props : ["clients"],
    methods: {
      getClients() {
        //
        axios.get('http://localhost:3000/clients')
            .then(response => {
              this.clients = response.data;
            })
            .catch(error => {
              console.log(error);
            });
      }
    }
  }*/
  </script>


  <style></style>