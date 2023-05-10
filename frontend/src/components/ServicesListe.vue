<template>
  <br><br>
  <div class="service-list">
    <table class="service-table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Nom du Service</th>
        <th>Description</th>
        <th>Image</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(service, index) in listeService" :key="index">
        <td>{{service.id_service}}</td>
        <td>{{service.nom_service}}</td>
        <td>{{service.service_description}}</td>
        <td  v-if="service.id_service == 1"><img src ="../img/1.png" width = "150" height = "150"></td>
        <td  v-else-if="service.id_service == 2"><img src ="../img/2.png" width = "150" height = "150"></td>
        <td  v-else-if="service.id_service == 3"><img src ="../img/3.jpg" width = "150" height = "150"></td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "ServicesAffichage",
  props: ['listeService']
}
</script>

<style scoped>

.service-list {
  margin: 50px auto;
  max-width: 1000px;
}

.service-table {
  border-collapse: collapse;
  width: 100%;
}

.service-table th {
  background: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 12px 15px;
}

.service-table td {
  font-size: 16px;
  text-align: left;
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

</style>