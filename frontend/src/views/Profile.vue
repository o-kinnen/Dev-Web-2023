<template>
  <br><br><br><br><br><br>
  <div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <p class="card__subtitle">Voilà donc qui je suis...</p>
    <p>{{profile.prenom}} {{profile.nom}} {{profile.mail_client}}</p>
    <div class="form-row">
      <button @click="deconnexion()" class="button">
        Déconnexion
      </button>
    </div>
  </div>
</template>
<script>
  //import axios from 'axios';
  import { mapState } from 'vuex'
  export default {
    name: "ProfileSotrexco",
    data () {
      return {
        profile: []
      }
    },
    mounted: function () {
      //this.getInfos();
      console.log(this.$store.state.utilisateur);
      if (this.$store.state.utilisateur.id_client == -1){
        this.$router.push('/connexion');
        return;
      }
      //this.$store.dispatch('recevoirUtilisateurInfos');
    },
    computed: {
      ...mapState({
        utilisateur: 'utilisateurInfos',
      })
    },
    methods: {
      /*getInfos() {
        axios.get('http://localhost:3000/infos')
          .then(response => {
            this.profile = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },*/
      deconnexion: function (){
        this.$store.commit('deconnexion');
        this.$router.push('/connexion');
      }
    }
  }
</script>
  
<style scoped>
</style>