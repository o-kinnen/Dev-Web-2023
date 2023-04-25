<template>
    <button  class="ajouter" v-on:click="showForm = true">Ajouter un produit</button>
    <form v-if="showForm" @submit.prevent="addProduit">
        <br>
        <label>
            Nom du produit:
            <input type="text" v-model="nomProduit" required>
        </label>
        <br>
        <button class="valider" type="submit">Ajouter</button>
        <button class="annuler" @click="showForm = false">Annuler</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    name: "ProduitsAdd",
    data() {
        return {
            showForm: false,
            nomProduit: ""
        }
    },
    methods : {
        addProduit() {
        if (this.nomProduit.trim() === "") {
        return;
        }
        axios.post(`http://localhost:3000/produits/${this.nomProduit}`)
        .then(() => {
            this.showForm = false;
            this.nomProduit = "";
        })
        .catch(error => {
            console.log(error);
        });
        }
    }
};
</script>

<style scoped>
form {
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 20px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.valider {
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

.annuler {
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

.ajouter {
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

</style>