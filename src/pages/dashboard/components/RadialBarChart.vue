<template>
  <vue-apex-charts
    type="radialBar"
    :options="radialBarChart.chartOptions"
    :series="radialBarChart.series"
  ></vue-apex-charts>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  props: ["color", "value"],
  components: {
    VueApexCharts
  },
  data() {
    return {
      radialBarChart: {
        series: [this.value],
        chartOptions: {
          colors: [this.color],
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  show: false,
                  fontSize: "22px"
                },
                value: {
                  offsetY: 3,
                  show: true,
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: this.color,
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
              },
              hollow: {
                size: "40%"
              }
              // track: {
              //   dropShadow: {
              //     enabled: true,
              //     top: 2,
              //     left: 0,
              //     blur: 4,
              //     opacity: 0.15
              //   }
              // }
            }
          },
          labels: ["Apples"]
        }
      }
    };
  }
};
</script>
