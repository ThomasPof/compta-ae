<template>
  <div>
    <nav class="nav flex-column nav-pills">
      <router-link class="nav-link font-weight-bold" to="/dashboard">
        <!-- <img src="/images/balance-scale-solid.svg" alt="" height="18px" class="mr-2"> -->
        Bilan annuel
      </router-link>
      <router-link class="nav-link font-weight-bold" to="/factures">
        <!-- <img src="/images/receipt-solid.svg" alt="" height="18px" class="mr-2"> -->
        Factures
      </router-link>
    </nav>
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
