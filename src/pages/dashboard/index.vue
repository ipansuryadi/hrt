<template>
  <div>
    <div class="is-size-4 pb-3 font-medium">
      Selamat Pagi dan Selamat Beraktivitas
    </div>
    <div class="columns">
      <div
        class="column"
        v-for="(realisasi, index) in realisasiList"
        :key="index"
      >
        <div class="card rounded-md">
          <div class="font-medium p-4" style="height:42px">
            {{ realisasi.label }}
          </div>
          <div class="flex items-center justify-center">
            <radial-bar-chart
              :color="realisasi.radialColor"
              :value="realisasi.radialValue"
            />
            <div class="text-center pr-6" style="min-width:100px">
              <small :style="'color:' + realisasi.textColor">{{
                realisasi.desc
              }}</small>
              <div
                :style="'color:' + realisasi.textColor"
                class="is-size-4 font-bold"
              >
                {{ realisasi.descPercent }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="flex ">
            <div class="flex-1 pr-3">
              Perkembangan Harga Komoditas Strategis
            </div>
            <div class="flex flex-col">
              <div class="select is-small">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
              <div class="p-1"></div>
              <div class="select is-small">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
              <div class="p-1"></div>
            </div>
          </div>
          <area-chart-simple />
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="flex">
            <div class="flex-1 pr-3">
              Perkembangan Komoditas Strategis LTT 2019 - 2020
            </div>
            <div class="flex flex-col">
              <div class="select is-small">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
              <div class="p-1"></div>
              <div class="select is-small">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
              <div class="p-1"></div>
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
            <img class="rounded-lg" src="@/assets/img.jpg" />
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
import AreaChartSimple from "./components/AreaChartSimple";
import BarChart from "./components/BarChart";
import RadialBarChart from "./components/RadialBarChart";
export default {
  props: ["reduce"],
  components: {
    AreaChartSimple,
    BarChart,
    RadialBarChart
  },
  data() {
    return {
      realisasiList: [
        {
          label: "Realisasi Serapan Anggaran",
          desc: "Meningkat",
          descPercent: "+5%",
          textColor: "#1cba63",
          radialColor: "#15aa9e",
          radialValue: 70
        },
        {
          label: "Realisasi Serapan KUR",
          desc: "Menurun",
          descPercent: "-5%",
          textColor: "#f44336",
          radialColor: "#5adea3",
          radialValue: 75
        },
        {
          label: "Realisasi Ekspor",
          desc: "Stabil",
          descPercent: "~0%",
          textColor: "#ffc936",
          radialColor: "#ffa34d",
          radialValue: 75
        },
        {
          label: "Realisasi Absensi Pelaporan SPH SBS",
          desc: "Stabil",
          descPercent: "~5%",
          textColor: "#ffc936",
          radialColor: "#f67575",
          radialValue: 75
        }
      ]
    };
  }
};
</script>
