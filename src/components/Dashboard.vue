<template>
  <div>
    <div class="row" v-if="$aeoptions.year">
      <div class="col-12 col-lg-8">
        <div class="row">
          <div class="col-12">
            <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
              <p>Revenus 2020 : <span class="text-primary font-weight-bold">{{ totCaHt }}€</span></p>
              <ChartIncomes :height="200" v-if="$aeoptions.year"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
              <p class="mb-0">TVA 2020</p>
              <p class="text-primary font-weight-bold">
                {{ tva.tot }}€
              </p>
              <p class="small mb-4">
                Prochaine échéance : <span class="text-primary font-weight-bold">{{ tva[today.sem] }}€</span><br>
                Le <span class="text-primary font-weight-bold">21/12/2020</span>
              </p>
              <div class="row pb-2 mb-2 border-bottom">
                <div class="col">
                  <p class="small mb-0">1<sup>er</sup> sem.</p>
                </div>
                <div class="col">
                  <p class="small mb-0 text-right text-primary">{{ tva.s1 }}€</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="small mb-0">2<sup>ème</sup> sem.</p>
                </div>
                <div class="col">
                  <p class="small mb-0 text-right text-primary">{{ tva.s2 }}€</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
              <p class="mb-0">Cot. Sociales 2020</p>
              <p class="text-primary font-weight-bold">
                {{ cotSoc.tot }}€
              </p>
              <p class="small mb-4">
                Prochaine échéance : <span class="text-primary font-weight-bold">{{ cotSoc[today.trim] }}€</span><br>
                Le <span class="text-primary font-weight-bold">{{ $aeoptions.cotSoc[today.trim].dueTo }}/2020</span>
              </p>
              <div class="row pb-2 border-bottom mb-2">
                <div class="col">
                  <p class="small mb-0">
                    1<sup>er</sup> trim.
                  </p>
                </div>
                <div class="col">
                  <p class="small mb-0 text-right text-primary">{{ cotSoc.trim1 }}€</p>
                </div>
              </div>
              <div class="row pb-2 border-bottom mb-2">
                <div class="col">
                  <p class="small mb-0">2<sup>nd</sup> trim.</p>
                </div>
                <div class="col">
                  <p class="small mb-0 text-right text-primary">{{ cotSoc.trim2 }}€</p>
                </div>
              </div>
              <div class="row pb-2 border-bottom mb-2">
                <div class="col">
                  <p class="small mb-0">3<sup>ème</sup> trim.</p>
                </div>
                <div class="col">
                  <p class="small mb-0 text-right text-primary">{{ cotSoc.trim3 }}€</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="small mb-0">4<sup>ème</sup> trim.</p>
                </div>
                <div class="col">
                  <p class="small mb-0 text-right text-primary">{{ cotSoc.trim4 }}€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <p>Factures impayées</p>
          <div class="row" v-for="(unpaid, key) in invoicesUnpaid" :key="key">
            <div class="col-12 mb-3">
              <p class="mb-0 small font-weight-bold">{{ key }}</p>
              <p class="mb-0 small text-primary">{{ unpaid }}€</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <p>CA 2020 : <span class="text-primary font-weight-bold">{{ totCaHt }}€</span></p>
          <div class="progress">
            <div class="progress-bar bg-primary" role="progressbar" :style="'width: '+ totCaHt * 100 / $aeoptions.seuilsCA.ae +'%'">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import chart from'./chart.vue'
import ChartIncomes from './ChartIncomes.vue';

export default {
  name: 'Dashboard',
  components: {
    // chart,
    ChartIncomes,
  },
  data() {
    return {
      // year : this.$aeoptions.year,
      invoicesUnpaid : {},
      invoicesThisYear : [],
      invoicesPaidThisYear : [],
      totCaHt:0,
      tva: {
        tot: 0,
        s1: 0,
        s2: 0,
      },
      cotSoc: {
        tot: 0,
        trim1: 0,
        trim2: 0,
        trim3: 0,
        trim4: 0,
      },
      today: {
        month : new Date().getMonth(),
        sem: "s" + Math.ceil((new Date().getMonth() ) / 6),
        trim: "trim" + Math.ceil((new Date().getMonth()) / 3),
      }
    }
  },
  beforeUpdate(){
    this.getDashboard()
  },
  mounted() {
    console.log('mounted');
    this.getDashboard()
  },
  methods: {
    getDashboard() {
      this.totCaHt =0
      this.tva = {
        tot: 0,
        s1: 0,
        s2: 0,
      }
      this.cotSoc = {
        tot: 0,
        trim1: 0,
        trim2: 0,
        trim3: 0,
        trim4: 0,
      }
      for(let i in this.$invoices) {
        let invoice = this.$invoices[i];
        // let dateCreated = new Date(invoice.createdAt*1000);
        let datePaid = new Date(invoice.paidAt*1000);
        // console.log(invoice)

        //bilan des impayés
        // console.log(invoice.recipient.company)
        if(!this.invoicesUnpaid[invoice.recipient.company])
          this.invoicesUnpaid[invoice.recipient.company] = 0;
        if(invoice.uid[0] == "F" && !invoice.paidAt)
          this.invoicesUnpaid[invoice.recipient.company] += invoice.pricePretax;
        else if(invoice.uid[0] == "A")
          this.invoicesUnpaid[invoice.recipient.company] -= invoice.pricePretax;

        if(datePaid.getFullYear() == this.$aeoptions.year) {

          if( datePaid.getMonth() < 3 ) {
            this.cotSoc.trim1 += 0.244 * invoice.pricePretax;
            this.tva.s1 += invoice.taxAmount
          } else if ( datePaid.getMonth() < 6 ) {
            this.cotSoc.trim2 += 0.244 * invoice.pricePretax;
            this.tva.s1 += invoice.taxAmount
          } else if ( datePaid.getMonth() < 9 ) {
            this.cotSoc.trim3 += 0.244 * invoice.pricePretax;
            this.tva.s2 += invoice.taxAmount
          } else {
            this.cotSoc.trim4 += 0.244 * invoice.pricePretax;
            this.tva.s2 += invoice.taxAmount
          }
          this.totCaHt += invoice.pricePretax;
          this.cotSoc.tot += 0.244 * invoice.pricePretax;
          this.tva.tot += invoice.taxAmount
        }
      }
      for (let key of Object.keys(this.cotSoc)) {
        this.cotSoc[key] = Math.ceil(this.cotSoc[key]);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
