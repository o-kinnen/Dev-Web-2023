<template>
  <br><br><br><br><br><br>
  <h1>Vous êtes sur la page des clients</h1>
  <table class="clients-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Prénom</th>
        <th>Nom</th>
        <th>adresse e-mail</th>
        <th>nom de la société</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(client, index) in clients" :key="index">
        <td>{{client.id_client}}</td>
        <td>{{client.prenom}}</td>
        <td>{{client.nom}}</td>
        <td>{{client.mail_client}}</td>
        <td>{{client.nom_societe}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "ClientsSotrexco",
  data() {
    return {
      clients: []
    }
  },
  mounted() {
    this.getClients();
  },
  methods: {
    getClients() {
      axios.get('http://localhost:3000/clients')
          .then(response => {
            this.clients = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}

</script>

<style scoped>
.clients-table {
  border-collapse: collapse;
  width: 100%;
}

.clients-table th {
  background: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 12px 15px;
}

.clients-table td {
  font-size: 16px;
  text-align: left;
  padding: 12px 15px;
  border-bottom: 1px solid black;
}

</style>