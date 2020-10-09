<template>
  <div class="hello">
    <div class="bg-white rounded-lg p-4 shadow-sm">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Référence</th>
            <!-- <th scope="col">Statut</th> -->
            <th scope="col">Date</th>
            <!-- <th scope="col">HT</th> -->
            <!-- <th scope="col">TVA</th> -->
            <th scope="col">Montant</th>
            <th scope="col">Date de paiement</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(facture, index) in $invoices" :key='index'>
            <td>
              <p class="mb-0 font-weight-bold">{{ facture.recipient.company }}</p>
              <p class="mb-0 small">
                <a :href="facture.url" target="_blank" class="text-muted">
                  {{ facture.uid }}
                </a>
              </p>
            </td>
            <!-- <td></td> -->
            <td>{{ facture.createdAt }}</td>
            <!-- <td>{{ facture.pricePretax }}</td> -->
            <!-- <td>{{ facture.taxAmount }}</td> -->
            <td class="text-right">
              <p class="mb-0 text-secondary font-weight-bold">{{ facture.pricePretax }}€</p>
              <div v-if="facture.taxAmount">
                <p class="text-muted mb-1 pb-1 small border-bottom" v-if="facture.taxAmount">+{{ facture.taxAmount }}€ TVA</p>
                <p class="mb-0 small">{{ facture.price }}€ TTC</p>
              </div>
            </td>
            <td>{{ facture.paidAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
