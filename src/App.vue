<template>
  <div id="app">
    <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-auto bg-light">
          <div class="px-3 py-5">
            <Sidebar/>
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
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar,
  },
  data() {
    return {
      invoices: this.$invoices,
      aeoptions: this.$aeoptions,
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/styles/_variables.scss";
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  @import "./assets/styles/_transitions.scss";
  @import "./assets/styles/_global.scss";
  @import "./assets/styles/_sidebar.scss";
  @import "./assets/styles/_forms.scss";
</style>
