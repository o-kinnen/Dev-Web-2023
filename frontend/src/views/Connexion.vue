<template>
    <br><br><br><br><br>
    <div>
    <h1 v-if="mode == 'connexion'">Connexion</h1>
    <h1 v-else>Inscription</h1>
    <p v-if="mode == 'connexion'">Tu n'as pas encore de compte ? <span class="card__action" @click="CreationCompte()">Créer un compte</span></p>
    <p v-else>Tu as déjà un compte ? <span class="card__action" @click="ConnectionCompte()">Se connecter</span></p>
    <div class="form-row">
      <input v-model="mail_client" class="form-row__input" type="text" placeholder="Adresse mail"/>
    </div>
    <div class="form-row" v-if="mode == 'creation'">
      <input v-model="prenom" class="form-row__input" type="text" placeholder="Prénom"/>
      <input v-model="nom" class="form-row__input" type="text" placeholder="Nom"/>
      <input v-model="nom_societe" class="form-row__input" type="text" placeholder="Nom de la société"/>
      <input v-model="telephone" class="form-row__input" type="text" placeholder="Téléphone"/>
      <input v-model="fonction" class="form-row__input" type="text" placeholder="Fonction"/>
    </div>
    <div class="form-row">
      <input v-model="mdp" class="form-row__input" type="password" placeholder="Mot de passe"/>
    </div>
    <div class="form-row">
      <button class="button button--disabled" v-if="mode == 'connexion'">
        Connexion
      </button>
      <button class="button" :class="{'button--disabled': !validationChamp}" v-else>
        Créer mon compte
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "ConnexionSotrexco",
    data: function () {
    return {
      mode: 'connexion',
      mail_client: '',
      prenom: '',
      nom: '',
      nom_societe: '',
      telephone: '',
      fonction: '',
      mdp: '',
    }
  },
  computed: {
    //Fonction de vérification des champs ==> à améliorer
    validationChamp: function () {
        if (this.mode == 'creation'){
            if (this.mail_client != "" && this.prenom != "" && this.nom != "" && this.nom_societe != "" && this.telephone != "" && this.fonction != "" && this.mdp != ""){
                return true;
            } else {
                return false;
            }
        } else {
            if (this.mail_client != "" && this.mdp != ""){
                return true;
            } else {
                return false;
            }
        }
    }
  },
  methods: {
    CreationCompte: function () {
        this.mode = "creation";
    },
    ConnectionCompte: function () {
        this.mode = "connexion";
    }
  }
};
</script>

<style scoped>
  .form-row {
    display: flex;
    margin: 16px 0px;
    gap:16px;
    flex-wrap: wrap;
  }

  .form-row__input {
    padding:8px;
    border: none;
    border-radius: 8px;
    background:#f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    color: black;
  }

  .form-row__input::placeholder {
    color:#aaaaaa;
  }
  .card__action {
    color:#2196F3;
    text-decoration: underline;
  }
  .card__action:hover {
    cursor:pointer;
  }
</style>
