<template>
  <div>
    <vue-apex-charts
      type="area"
      :options="chartOptions"
      :series="series"
      height="100"
    ></vue-apex-charts>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  props: ["data"],
  components: {
    VueApexCharts
  },
  data() {
    return {
      series: [
        {
          data: this.data
        }
      ],
      chartOptions: {
        markers: {
          size: 6
        },
        redrawOnParentResize: true,
        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        colors: ["#ffa34d"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          width: 2
        },
        grid: {
          show: false
        },
        xaxis: {
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        toolTip: {
          enabled: false
        }
      }
    };
  }
};
</script>
