<template>
  <div>
    <vue-apex-charts
      type="radialBar"
      :options="radialBarChart.chartOptions"
      :series="radialBarChart.series"
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
      radialBarChart: {
        series: [44],
        chartOptions: {
          redrawOnParentResize: true,
          colors: themeColors,
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  show: false,
                  fontSize: "22px"
                },
                value: {
                  show: true,
                  fontSize: "14px",
                  formatter: function(val) {
                    return val + "%";
                  }
                },
                total: {
                  show: false,
                  label: "Total",
                  formatter: function() {
                    return 249;
                  }
                }
              }
            }
          },
          labels: ["Apples"]
        }
      }
    };
  }
};
</script>
