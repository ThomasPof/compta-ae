<template>
  <div>
    <div class="bg-white rounded-lg p-4 shadow-sm">
      <p>Factures créés en {{ $aeoptions.year }}</p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="text-center" scope="col">#</th>
            <th class="text-center" scope="col">Statut</th>
            <th scope="col">Entreprise</th>
            <!-- <th scope="col">Statut</th> -->
            <th scope="col">Date</th>
            <!-- <th scope="col">HT</th> -->
            <!-- <th scope="col">TVA</th> -->
            <th scope="col">Montant</th>
          </tr>
        </thead>
        <tbody v-if="$aeoptions.year">
          <tr v-for="(facture, index) in invoices" :key='index'>
            <td class="text-center">
              <p class="mb-0 small">
                <a :href="facture.url" target="_blank" class="text-muted">
                  {{ facture.uid }}
                </a>
              </p>
            </td>
            <td class="text-center">
              <p class="mb-0">
                <span class="badge badge-pill badge-secondary" v-if="facture.paidAt">Réglée</span>
                <span class="badge badge-pill badge-primary texte-white" v-else>Attente paiement</span>
              </p>
            </td>
            <td>
              <p class="mb-0">{{ facture.recipient.company }}</p>
            </td>
            <!-- <td></td> -->
            <td>{{ moment(facture.createdAt * 1000).locale('FR').format('ll') }}</td>
            <!-- facture.createdAt -->
            <!-- <td>{{ facture.pricePretax }}</td> -->
            <!-- <td>{{ facture.taxAmount }}</td> -->
            <td class="text-right">
              <p class="mb-0 text-primary font-weight-bold">{{ facture.pricePretax }}€
                <span class="text-muted small" v-if="facture.taxAmount"> (+{{ facture.taxAmount }}€ TVA)</span>
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
        this.invoices.reverse()
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
