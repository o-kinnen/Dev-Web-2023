<template>
  <body>
    <header>
      <en-tête/>
    </header>

    <main>
      <div class="card">
        <h1 class="card__title">Espace Perso</h1>
        <p class="card__subtitle">Voilà donc qui je suis...</p>
        <p>{{utilisateur.prenom}}{{utilisateur.nom}} </p>
        <p>{{utilisateur.mail_client}}</p>
        <p>{{ token }}</p>
        <div class="form-row">
          <button @click="deconnexion()" class="button">
            Déconnexion
          </button>
        </div>
      </div>
    </main>

    <footer>
      <bas-de-page/>
    </footer>
  </body>
</template>

<script>
  //import axios from 'axios';
  import { mapState } from 'vuex'
  import EnTête from "@/components/EnTête";
  import BasDePage from "@/components/BasDePage";
  export default {
    name: "ProfileSotrexco",
    components: {BasDePage, EnTête},
    data () {
      return {
        
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
        utilisateur: 'utilisateur', token: "token"
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

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

</style>
