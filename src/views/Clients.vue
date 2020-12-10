<template>
  <div>
    <div class="row">
      <div class="col-auto">
        <h2 class="mb-4">Liste des clients</h2>
      </div>
      <div class="col-auto ml-auto">
        <router-link class="btn btn-primary align-items-center d-flex" to="/clients/new">
          <img src="/images/open-iconic/svg/plus.svg" height="14px" class="mr-2">
          Créer un client
        </router-link>
      </div>
    </div>
    <div class="bg-white rounded-lg p-4 shadow-sm">
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
  name: 'Clients',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
