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
      var prevArray = [0,0,0,0,0,0,0,0,0,0,0,0];
      var taxArray = [0,0,0,0,0,0,0,0,0,0,0,0];
      for (let i in this.$invoices) {
        let invoice = this.$invoices[i]
        let thisMonth = new Date(invoice.paidAt*1000).getMonth();
        if(invoice.paidAt && new Date(invoice.paidAt*1000).getFullYear() == this.$aeoptions.year) {
          amountArray[thisMonth] += invoice.pricePretax
          taxArray[thisMonth] += invoice.taxAmount
        } else if( !invoice.paidAt && new Date(invoice.createdAt*1000).getFullYear() == this.$aeoptions.year) {
          prevArray[new Date().getMonth() + 1] += invoice.price
        }
        // console.log(invoice)
      }
      this.dataset = {
        labels: labelsArray ,
        datasets: [
          {
            label: "Revenus HT",
            backgroundColor: "#14213d",
            data: amountArray,
          },
          {
            label: "TVA",
            backgroundColor: "#fca311",
            data: taxArray,
          },
          // {
          //   label: "Prévisionnel",
          //   backgroundColor: "#e5e5e5",
          //   data: prevArray,
          // },

        ],
      }
      this.options= {
        maintainAspectRatio: false,
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
