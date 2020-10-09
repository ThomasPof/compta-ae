<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-auto bg-primary">
          <div class="px-3 py-5">
            <div class="list-group">
              <router-link class="list-group-item list-group-item-action" to="/">
                Bilan annuel
              </router-link>
              <router-link class="list-group-item list-group-item-action" to="/factures">
                Factures
              </router-link>
            </div>
          </div>
        </div>
        <div class="col bg-light">
          <div class="p-5">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  // components: {
  //   Sidebar
  // },
  data() {
    return {
      store:this.$store
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/styles/_variables.scss";
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  @import "./assets/styles/_transitions.scss";
  @import "./assets/styles/_global.scss";
</style>
