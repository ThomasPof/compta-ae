<template>
  <div>
    <div class="list-group">
      <router-link class="list-group-item list-group-item-action" to="/">
        <img src="/images/balance-scale-solid.svg" alt="" height="18px" class="mr-2">
        Bilan annuel
      </router-link>
      <router-link class="list-group-item list-group-item-action" to="/factures">
        <img src="/images/receipt-solid.svg" alt="" height="18px" class="mr-2">
        Factures
      </router-link>
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
