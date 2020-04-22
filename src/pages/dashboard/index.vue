<template>
  <div>
    <div class="columns">
      <div class="column" v-for="(item, index) in 4" :key="index">
        <div class="box">
          <div class="font-bold">Realisasi Serapan Anggaran</div>
          <div class="flex items-center justify-center">
            <vue-apex-charts
              type="radialBar"
              :options="radialBarChart.chartOptions"
              :series="radialBarChart.series"
            ></vue-apex-charts>
            <div class="text-center">
              <small>Meningkat</small>
              <div class="is-size-4 font-bold">+5%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="flex items-center justify-between">
            <div>
              Perkembangan Harga Komoditas Strategis
            </div>
            <div>
              <div class="select is-small">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex justify-end py-3">
            <div class="select is-small">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>

          <vue-apex-charts
            type="line"
            height="350"
            :options="lineChartSimple.chartOptions"
            :series="lineChartSimple.series"
          ></vue-apex-charts>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="flex justify-between">
            <div>
              Perkembangan Komoditas Strategis LTT 2019 - 2020
            </div>
            <div>
              <div class="select is-small">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex justify-end py-3">
            <div class="select is-small">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
          <vue-apex-charts
            type="bar"
            height="350"
            :options="barChart.chartOptions"
            :series="barChart.series"
          ></vue-apex-charts>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <span class="is-size-5 border-b-4 border-red-400">
          HORTIKULTURA News
        </span>
      </div>
      <div class="column has-text-info flex flex-end justify-end">
        <a>Lihat berita lainnya</a>
      </div>
    </div>
    <div class="columns">
      <div class="column" v-for="(item, index) in 4" :key="index">
        <a>
          <figure class="image is-square">
            <img class="rounded-lg" src="@/assets/bg.jpg" />
            <div
              class="absolute left-0 bottom-0 bg-black w-full opacity-75 rounded-b-lg p-3"
            >
              <div class="text-white font-bold">
                Padi di Indonesia Merupakan Padi Terbaik
              </div>
              <small class="text-white">10 menit yang lalu</small>
            </div>
          </figure>
        </a>
      </div>
    </div>
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
      },
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
      },
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
