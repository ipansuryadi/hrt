<template>
  <div>
    <vue-apex-charts
      type="bar"
      height="350"
      :options="columnChart.chartOptions"
      :series="columnChart.series"
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
      columnChart: {
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          },
          {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }
        ],
        chartOptions: {
          title: {
            text: "Product Trends by Month",
            align: "left"
          },
          colors: themeColors,
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: "rounded",
              columnWidth: "55%"
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
          },

          xaxis: {
            categories: [
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct"
            ]
          },
          yaxis: {
            title: {
              text: "$ (thousands)"
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return "$ " + val + " thousands";
              }
            }
          }
        }
      }
    };
  }
};
</script>
