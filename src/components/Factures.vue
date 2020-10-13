<template>
  <div>
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
            <th scope="col">Statut</th>
          </tr>
        </thead>
        <tbody v-if="$aeoptions.year">
          <tr v-for="(facture, index) in invoices" :key='index'>
            <td>
              <p class="mb-0 font-weight-bold">{{ facture.recipient.company }}</p>
              <p class="mb-0 small">
                <a :href="facture.url" target="_blank" class="text-muted">
                  {{ facture.uid }}
                </a>
              </p>
            </td>
            <!-- <td></td> -->
            <td>{{ moment(facture.createdAt * 1000).locale('FR').format('ll') }}</td>
            <!-- facture.createdAt -->
            <!-- <td>{{ facture.pricePretax }}</td> -->
            <!-- <td>{{ facture.taxAmount }}</td> -->
            <td class="text-right">
              <p class="mb-0 text-primary font-weight-bold">{{ facture.pricePretax }}€</p>
              <div v-if="facture.taxAmount">
                <p class="text-muted mb-1 pb-1 small border-bottom" v-if="facture.taxAmount">+{{ facture.taxAmount }}€ TVA</p>
                <p class="mb-0 small">{{ facture.price }}€ TTC</p>
              </div>
            </td>
            <td>
              <p class="mb-0">
                <span class="badge badge-secondary" v-if="facture.paidAt">Réglée</span>
                <span class="badge badge-primary texte-white" v-else>Attente paiement</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Factures',
  data() {
    return {
      invoices: []
    }
  },
  methods: {
    getFactures() {
      this.invoices = []
      for (let i in this.$invoices) {
        let invoice = this.$invoices[i]
        if(new Date(invoice.createdAt*1000).getFullYear() == this.$aeoptions.year && invoice.uid[0] != "A") {
          // let dateCreated = new Date(invoice.createdAt * 1000)
          // let month = dateCreated.getMonth() + 1
          // month = ("0"+month).slice(-2)
          // let day = ("0"+dateCreated.getDay()).slice(-2)
          // invoice.createdAt = day+"/"+month+"/"+dateCreated.getFullYear()
          this.invoices.push(invoice)

        }
        // console.log(invoice)
      }
    }
  },
  created() {
    this.getFactures();
  },
  beforeUpdate() {
    this.getFactures()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
