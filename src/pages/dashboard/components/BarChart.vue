<template>
  <div>
    <vue-apex-charts
      type="bar"
      :options="barChart.chartOptions"
      :series="barChart.series"
    ></vue-apex-charts>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    VueApexCharts
  },
  data() {
    return {
      barChart: {
        series: [
          {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
          }
        ],
        chartOptions: {
          redrawOnParentResize: true,
          colors: ["#f67575"],
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [
              "South Korea",
              "Canada",
              "United Kingdom",
              "Netherlands",
              "Italy",
              "France",
              "Japan",
              "United States",
              "China",
              "Germany"
            ]
          }
        }
      }
    };
  }
};
</script>
