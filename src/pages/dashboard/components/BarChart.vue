<template>
  <div>
    <vue-apex-charts
      type="bar"
      height="350"
      :options="barChart.chartOptions"
      :series="barChart.series"
    ></vue-apex-charts>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
const themeColors = ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"];
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
          colors: themeColors,
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
