<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-secondary shadow-sm sticky-top px-5">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul> -->
      <p class="mb-0 ml-auto mr-2 text-light">Année affichée : </p>
      <form class="form-inline">
        <select name="year" id="" class="form-control-sm mr-sm-2" v-model="$aeoptions.year">
          <option :value="year" v-for="year in years" :key="year">{{ year }}</option>
        </select>
        <!-- <button class="btn btn-sm btn-outline-light my-2 my-sm-0" type="submit">Ok</button> -->
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      years: []
    }
  },
  mounted() {

    let firstYear = new Date(this.$invoices[0].createdAt*1000).getFullYear();
    for(firstYear; firstYear <= new Date().getFullYear(); firstYear++) {
      this.years.push(firstYear);
    }
  }
}
</script>
