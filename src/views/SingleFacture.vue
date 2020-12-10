<template>
  <div>
    <div class="row">
      <div class="col-auto">
        <h2 class="mb-4">Édition de facture</h2>
      </div>
    </div>

    <form action="">
      <div class="row">

        <div class="col-6">
          <div class="bg-white rounded-lg p-4 shadow-sm mb-4">
            <h3 class="mb-4">Émetteur</h3>
            <FormClient v-bind="$aeoptions.freelanceInfos" :simple="true"/>
          </div>
        </div>

        <div class="col-6">
          <div class="bg-white rounded-lg p-4 shadow-sm mb-4">
            <h3 class="mb-4">Destinataire</h3>
            <FormClient :simple="true"/>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="bg-white rounded-lg p-4 shadow-sm mb-4">
            <h3>Détails</h3>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import chart from'./chart.vue'
import FormClient from '../components/FormClient.vue';

export default {
  name: 'SingleFacture',
  components: {
    // chart,
    FormClient,
  },
}

</script>
