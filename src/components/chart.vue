<script>
import { Doughnut } from 'vue-chartjs'

export default {
  name:"chart",
  extends: Doughnut,
  data(){
    return {
      dataset: {},
    }
  },
  created(){
    var labelsArray = ['Paid','Unpaid'];
    var amountArray = [0,0];
    for (let i in this.$invoices) {
      let invoice = this.$invoices[i]
      if(new Date(invoice.createdAt*1000).getFullYear() == 2020) {
        if(invoice.paidAt)
          amountArray[0] += invoice.pricePretax
        else
          amountArray[1] += invoice.pricePretax
      }
    }
    this.dataset = {
        labels: labelsArray ,
        datasets: [{
            label: "Assets",
            backgroundColor: ["#0f4c81"],
            data: amountArray,
        }],
    }
  },
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.dataset)
  }
}
</script>
