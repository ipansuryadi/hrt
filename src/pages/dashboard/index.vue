<template>
  <div>
    <div class="columns">
      <div class="column" v-for="(item, index) in 4" :key="index">
        <div class="box">
          <div class="font-bold">Realisasi Serapan Anggaran</div>
          <div class="flex items-center justify-center">
            <radial-bar-chart />
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
          <line-chart-simple />
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
          <bar-chart />
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
import LineChartSimple from "./components/LineChartSimple";
import BarChart from "./components/BarChart";
import RadialBarChart from "./components/RadialBarChart";
export default {
  props: ["reduce"],
  components: {
    LineChartSimple,
    BarChart,
    RadialBarChart
  },
  data() {
    return {};
  }
};
</script>
