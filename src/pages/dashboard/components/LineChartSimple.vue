<template>
  <div>
    <vue-apex-charts
      type="line"
      height="350"
      :options="lineChartSimple.chartOptions"
      :series="lineChartSimple.series"
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
      lineChartSimple: {
        series: [
          {
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }
        ],
        chartOptions: {
          redrawOnParentResize: true,
          chart: {
            zoom: {
              enabled: false
            }
          },
          colors: themeColors,
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "straight"
          },
          title: {
            text: "Product Trends by Month",
            align: "left"
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5
            }
          },
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
