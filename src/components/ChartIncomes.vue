<script>
import { Bar } from 'vue-chartjs'

export default {
  name:"ChartIncomes",
  extends: Bar,
  data(){
    return {
      dataset: {},
      options: {},
    }
  },
  methods: {
    renderInvoices() {
      var labelsArray = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
      var amountArray = [0,0,0,0,0,0,0,0,0,0,0,0];
      var taxArray = [0,0,0,0,0,0,0,0,0,0,0,0];
      for (let i in this.$invoices) {
        let invoice = this.$invoices[i]
        let thisMonth = new Date(invoice.paidAt*1000).getMonth();
        if(invoice.paidAt && new Date(invoice.paidAt*1000).getFullYear() == this.$aeoptions.year) {
          amountArray[thisMonth] += invoice.pricePretax
          taxArray[thisMonth] += invoice.taxAmount
        }
        // console.log(invoice)
      }
      this.dataset = {
        labels: labelsArray ,
        datasets: [
          {
            label: "Revenus HT",
            backgroundColor: ["#3f6c51","#3f6c51","#3f6c51","#3f6c51","#3f6c51","#3f6c51","#3f6c51","#3f6c51","#3f6c51","#3f6c51","#3f6c51","#3f6c51"],
            data: amountArray,
          },
          {
            label: "TVA",
            backgroundColor: ["#efd49c","#efd49c","#efd49c","#efd49c","#efd49c","#efd49c","#efd49c","#efd49c","#efd49c","#efd49c","#efd49c","#efd49c"],
            data: taxArray,
          }
        ],
      }
      this.options= {
        legend: {
          position: 'bottom'
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              callback: function(value) {
                      return value + ' €';
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: (item) => item.yLabel + ' €',
          },
        },
      }

    }
  },
  created(){
    this.renderInvoices()
  },
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.dataset,this.options)
  },
  computed: {
    year () {
      return this.$aeoptions.year
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    }
  },
  watch: {
     'year' () {
       console.log(this.$aeoptions.year)
       this.renderInvoices()
       this.renderChart(this.dataset, this.options)
     }
  }
}
</script>
