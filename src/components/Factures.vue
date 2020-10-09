<template>
  <div class="hello">
    <div class="bg-white rounded-lg p-4 shadow-sm">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Référence</th>
            <!-- <th scope="col">Statut</th> -->
            <th scope="col">Date</th>
            <th scope="col">Client</th>
            <!-- <th scope="col">HT</th> -->
            <!-- <th scope="col">TVA</th> -->
            <th scope="col">TTC</th>
            <th scope="col">Date de paiement</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(facture, index) in $store.invoices" :key='index'>
            <td>{{ facture.uid }}</td>
            <!-- <td></td> -->
            <td>{{ new Date(facture.createdAt*1000) }}</td>
            <td>{{ facture.recipient.company }}</td>
            <!-- <td>{{ facture.pricePretax }}</td> -->
            <!-- <td>{{ facture.taxAmount }}</td> -->
            <td>{{ facture.price }}€ <br><small class="text-muted" v-if="facture.taxAmount">({{ facture.taxAmount }}€ TVA)</small></td>
            <td>{{ new Date(facture.paidAt*1000) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
