<template>
  <div>
    <vue-apex-charts
      type="area"
      :options="lineChartSimple.chartOptions"
      :series="lineChartSimple.series"
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
      lineChartSimple: {
        series: [
          {
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }
        ],
        chartOptions: {
          markers: {
            size: 6
          },
          redrawOnParentResize: true,
          chart: {
            zoom: {
              enabled: false
            }
          },
          colors: ["#1eb2a6"],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "straight",
            width: 2
          },
          // title: {
          //   text: "Product Trends by Month",
          //   align: "left"
          // },
          grid: {},
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep"
            ]
          }
        }
      }
    };
  }
};
</script>
