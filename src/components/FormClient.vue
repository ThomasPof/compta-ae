<template>
  <div>
    <div class="row">
      <div class="form-group col-md-12" v-if="!simple">
        <input type="text" class="form-control" id="inputEmail4" placeholder="Société">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-md-6">
        <input type="text" class="form-control" id="inputEmail4" placeholder="Nom" :value="lastname">
      </div>
      <div class="form-group col-md-6">
        <input type="text" class="form-control" id="inputPassword4" placeholder="Prénom" :value="firstname">
      </div>
    </div>
    <div class="row" v-if="!simple">
      <div class="form-group col-md-6">
        <input type="text" class="form-control" id="inputEmail4" placeholder="Numéro TVA" :value="tva">
      </div>
      <div class="form-group col-md-6">
        <input type="text" class="form-control" id="inputEmail4" placeholder="SIREN, SIRET..." :value="siret">
      </div>
    </div>
    <div class="row">
      <div class="form-group col-md-12">
        <textarea class="form-control" id="inputEmail4" placeholder="Adresse" rows="3" :value="address"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-xl-6">
        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" :value="email">
      </div>
      <div class="form-group col-xl-6">
        <input type="phone" class="form-control" id="inputPassword4" placeholder="Téléphone" :value="phone">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormClient',
  props: ['firstname','lastname','address','phone','email','tva','siret','simple'],
}
</script>
