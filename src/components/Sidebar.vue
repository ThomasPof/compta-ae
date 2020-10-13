<template>
  <div>
    <nav class="nav flex-column nav-pills">
      <router-link class="nav-link font-weight-bold d-flex align-items-center mb-3" to="/">
        <!-- <img src="/images/balance-scale-solid.svg" alt="" height="18px" class="mr-2"> -->
        <img src="/images/open-iconic/svg/dashboard.svg" height="18px" class="mr-2">
        Bilan annuel
      </router-link>
      <router-link class="nav-link font-weight-bold d-flex align-items-center mb-3" to="/factures">
        <!-- <img src="/images/receipt-solid.svg" alt="" height="18px" class="mr-2"> -->
        <img src="/images/open-iconic/svg/dollar.svg" height="18px" class="mr-2">
        Factures
      </router-link>
      <router-link class="nav-link font-weight-bold d-flex align-items-center mb-3" to="/options">
        <!-- <img src="/images/receipt-solid.svg" alt="" height="18px" class="mr-2"> -->
        <img src="/images/open-iconic/svg/person.svg" height="18px" class="mr-2">
        Clients
      </router-link>
      <router-link class="nav-link font-weight-bold d-flex align-items-center mb-3" to="/options">
        <!-- <img src="/images/receipt-solid.svg" alt="" height="18px" class="mr-2"> -->
        <img src="/images/open-iconic/svg/cog.svg" height="18px" class="mr-2">
        Mon compte
      </router-link>
      <router-link class="nav-link font-weight-bold d-flex align-items-center mb-3" to="/options">
        <!-- <img src="/images/receipt-solid.svg" alt="" height="18px" class="mr-2"> -->
        <img src="/images/open-iconic/svg/account-logout.svg" height="18px" class="mr-2">
        Se déconnecter
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
