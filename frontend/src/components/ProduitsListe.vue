<template>
  <br><br>
  <div class="product-list">
    <table class="product-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom du produit</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(produit, index) in listeProduit" :key="index">
          <td>{{produit.id_produit}}</td>
          <td v-if="!produit.editMode">{{ produit.nom }}</td>
          <td v-else><input type="text" v-model="produit.nom"></td>
          <td>
            <button class="edit-button" v-if="!produit.editMode" @click="produit.editMode = true">Modifier</button>
            <button class="update-button" v-else @click="updateProduit(produit)">Valider</button>
            <button class="delete-button" @click="deleteProduit(produit.id_produit)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "ProduitsAffichage",
  props : ['listeProduit'],
  methods : {
    deleteProduit(id) {
      axios.delete(`http://localhost:3000/produits/${id}`)
      .then(() => {
        this.getProduits();
      })
      .catch(error => {
        console.log(error);
      });
    },
    updateProduit(produit) {
      axios.put(`http://localhost:3000/produits/${produit.id_produit}`, produit)
     .then(() => {
      produit.editMode = false;
     })
     .catch(error => {
      console.log(error);
     });
    }
  }
};
</script>

<style scoped>
.product-list {
  margin: 50px auto;
  max-width: 1000px;
}

.product-table {
  border-collapse: collapse;
  width: 100%;
}

.product-table th {
  background: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 12px 15px;
}

.product-table td {
  font-size: 16px;
  text-align: left;
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

.product-table td input[type=text] {
  width: 100%;
  padding: 6px 10px;
  font-size: 16px;
  border: 1px solid #ddd;
}

.product-table .delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.product-table .edit-button {
  background-color: #287ec4;
  color: white;
  border: none;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.product-table .update-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

td button {
  margin : 8px;
}

</style>