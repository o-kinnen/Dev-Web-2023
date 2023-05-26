<template>
  <body>
    <header>
      <EnTête/>
    </header>

    <main>
      <section id="presentation">
        <div class="container">
          <h2>Qui somme nous ?</h2>
          <p>blablabla</p>
        </div>
      </section>

      <section id="activite">
        <div class="container">
          <h2 class="center">Nos différents secteurs d'activités</h2>
          <br>
          <div class="activite-container">
            <div class="activite">
              <img src="https://via.placeholder.com/325x200" alt="Produit 1">
              <h3>Industries</h3>
              <p>Petite description</p>
              <a href="/industrie" class="cta">En savoir plus</a>
            </div>
            <div class="activite">
              <img src="https://via.placeholder.com/325x200" alt="Produit 2">
              <h3>Alimentaire</h3>
              <p>Petite description</p>
              <a href="/alimentaire" class="cta">En savoir plus</a>
            </div>
            <div class="activite">
              <img src="https://via.placeholder.com/325x200" alt="Produit 3">
              <h3>Bien d'équipement</h3>
              <p>Petite description</p>
              <a href="/equipement" class="cta">En savoir plus</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div class="container">
          <h2 class="center">Les services proposés</h2>
          <br>
          <div class="services-container">
            <div class="services">
              <img src="https://via.placeholder.com/325x200" alt="Produit 1">
              <h3>Industries</h3>
              <p>Petite description</p>
              <a href="/service" class="cta">En savoir plus</a>
            </div>
            <div class="services">
              <img src="https://via.placeholder.com/325x200" alt="Produit 2">
              <h3>Alimentaire</h3>
              <p>Petite description</p>
              <a href="/service" class="cta">En savoir plus</a>
            </div>
          </div>
        </div>
      </section>

      <section id="realisation">
        <div class="container">
          <h2 class="center">Nos réalisations</h2>

          <div class="realisation-container">
            <div class="realisation">
              <img src="https://via.placeholder.com/325x200" alt="Produit 1">
              <h3>~~~~~~~~~~~~~~~~~~</h3>
              <p>Petite description</p>
              <a href="/realisation" class="cta">En savoir plus</a>
            </div>
            <div class="realisation">
              <img src="https://via.placeholder.com/325x200" alt="Produit 2">
              <h3>~~~~~~~~~~~~~~~~~~</h3>
              <p>Petite description</p>
              <a href="/realisation" class="cta">En savoir plus</a>
            </div>
            <div class="realisation">
              <img src="https://via.placeholder.com/325x200" alt="Produit 3">
              <h3>~~~~~~~~~~~~~~~~~~</h3>
              <p>Petite description</p>
              <a href="/realisation" class="cta">En savoir plus</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <BasDePage/>
    </footer>
  </body>
</template>

<script>
import EnTête from "@/components/EnTête";
import BasDePage from "@/components/BasDePage";
export default {
  name: "AccueilSotrexco",
  components: {BasDePage, EnTête}
}
</script>

<style scoped>

#presentation {
  background-image: url("");
  background-size: cover;
  color: #323232;
  padding: 100px;
}

#presentation h2 {
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 30px;
  text-shadow: 2px 2px #000;
  text-align: center;
}

.activite-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}

.activite {
  margin: 20px;
  text-align: center;
  padding: 20px;

}

.activite h3 {
  margin-top: 10px;
}

#activite h2 {
  padding-top: 20px;
  text-align: center;
}

#services {
  background-color: #f9f9f9;
  padding: 20px;
}

.services-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
}

.services {
  margin: 20px;
  text-align: center;
  padding: 20px;
}

#services h2 {
  text-align: center;
}

.services h3 {
  margin-top: 10px;
}

.realisation-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}

.realisation {
  margin: 20px;
  text-align: center;
  padding: 20px;
}

#realisation {
  padding: 20px;
}

#realisation h2 {
  text-align: center;
}

.realisation h3 {
  margin-top: 10px;
}

/* Styles du pied de page */
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.cta {
  display: block;
  margin-top: 20px;
  background-color: #2c3e50;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
}

</style>