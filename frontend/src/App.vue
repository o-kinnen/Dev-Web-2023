<template>
  <body>
  <header>
    <div class="container">
      <h1><router-link to="/">Sotrexco</router-link></h1>
      <nav>
        <ul>
          <li><router-link to="/produits">Produits</router-link></li>
          <li><router-link to="/service">Service proposer</router-link></li>
          <li><router-link to="/realisation">Réalisation</router-link></li>
          <li><router-link to="/connexion">Connexion/Inscription</router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </header>
  </body>
</template>

<script>

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.container {
  margin-left: 10px;
  margin-right: 10px;
}

a {
  color: #333;
  text-decoration: none;
}

/* Styles de la section d'en-tête */
header h1 {
  float: left;
  font-size: 50px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
  padding: 0;
}

header nav {
  float: right;
}

header li {
  display: inline-block;
  margin: 20px 15px;
  position: relative;
}

</style>
