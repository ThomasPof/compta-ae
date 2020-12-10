<template>
  <div>
    <div class="row">
      <div class="col-auto">
        <h2 class="mb-4">Édition de client</h2>
      </div>
    </div>

    <form action="">
      <div class="row">

        <div class="col-8 mx-auto">
          <div class="bg-white rounded-lg p-4 shadow-sm mb-4">
            <FormClient :simple="false"/>
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
  name: 'SingleClient',
  components: {
    // chart,
    FormClient,
  },
}

</script>
