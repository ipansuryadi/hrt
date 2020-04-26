<template>
  <div>
    <div class="text-lg pb-3 font-medium">Harga</div>
    <div class="text-base font-medium pb-3">
      Perubahan dan rata-rata harga tanggal 13 April 2020
    </div>
    <div class="flex items-center pb-3">
      <div class="pr-3">Lihat Berdasarkan</div>
      <div class="select is-small">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
    <div class="flex items-baseline has-text-primary justify-between">
      <div class="text-lg font-medium pb-1">Sentra</div>
      <div class="text-xs text-right">Lihat semua</div>
    </div>
    <div class="columns font-medium">
      <div class="column" v-for="(sentra, index) in sentraList" :key="index">
        <div class="pb-2">{{ sentra.title }}</div>
        <div class="card p-2 rounded-md">
          <div class="text-xs">{{ sentra.product }}</div>
          <div class="flex">
            <div class="flex-1">
              <small-line-chart :data="sentra.values" />
            </div>
            <div class="flex-1">
              <div
                class="has-text-info pb-2 pt-5 font-bold text-lg text-center"
              >
                {{ sentra.priceAfter | formatCurrencyPerKg }}
              </div>
              <div
                class="p-1 rounded font-medium text-xs text-white flex items-center justify-between"
                :style="'background-color:' + sentra.color"
              >
                <div>
                  <span class="icon">
                    <i class="fas fa-arrow-up"></i>
                  </span>
                  <span>{{ sentra.percentage }}%</span>
                </div>
                <div>
                  <span class="pr-2">
                    {{ sentra.priceBefore | formatCurrencyPerKg }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-baseline has-text-primary justify-between">
      <div class="text-lg font-medium pb-1">Non Sentra</div>
      <div class="text-xs text-right">Lihat semua</div>
    </div>
    <div class="columns font-medium">
      <div class="column" v-for="(sentra, index) in nonSentraList" :key="index">
        <div class="pb-2">{{ sentra.title }}</div>
        <div class="card p-2 rounded-md">
          <div class="text-xs">{{ sentra.product }}</div>
          <div class="flex">
            <div class="flex-1">
              <small-line-chart :data="sentra.values" />
            </div>
            <div class="flex-1">
              <div
                class="has-text-info pb-2 pt-5 font-bold text-lg text-center"
              >
                {{ sentra.priceAfter | formatCurrencyPerKg }}
              </div>
              <div
                class="p-1 rounded font-medium text-xs text-white flex items-center justify-between"
                :style="'background-color:' + sentra.color"
              >
                <div>
                  <span class="icon">
                    <i class="fas fa-arrow-up"></i>
                  </span>
                  <span>{{ sentra.percentage }}%</span>
                </div>
                <div>
                  <span class="pr-2">
                    {{ sentra.priceBefore | formatCurrencyPerKg }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="is-full text-lg font-medium pb-2">
      Judul dari gambar dibawah ini
    </div>
    <div class="flex pb-3">
      <div class="flex items-center pr-6">
        <div class="pr-3 text-sm">Lihat Berdasarkan komoditas</div>
        <div class="select is-small">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
      <div class="flex items-center">
        <div class="pr-3 text-sm">Jenis Pasar</div>
        <div class="select is-small">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>
    <div class="columns is-gapless">
      <div class="column is-9">
        <indonesia-map />
      </div>
      <div class="column">
        <div class="font-medium pb-3">Petunjuk</div>
        <div
          class="flex mr-5 pb-2"
          v-for="(legend, index) in mapLegends"
          :key="index"
        >
          <div
            class="w-3 h-3 mr-2 mt-1"
            :style="'background:' + legend.color"
          ></div>
          <div class="text-xs">{{ legend.label }}</div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div>Harga Tertinggi</div>
        <div>z</div>
      </div>
      <div class="column">
        <div>Harga Terendah</div>
        <div>z</div>
      </div>
      <div class="column">
        <div>Harga Dari Pasar Induk</div>
        <div>z</div>
      </div>
    </div>
    <div class="text-base font-medium pb-3">
      Early Warning System Harga Tanggal 13 April 2020
    </div>
    <div class="flex items-center pb-3">
      <div class="pr-3 text-xs">Urutkan Berdasarkan</div>
      <div class="select is-small">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
      <div class="flex mr-5 pb-1 pl-6">
        <div class="w-3 h-3 mr-2 mt-1" style="background:#1eb2a6"></div>
        <div class="text-xs">Terkendali (Rasio 1.00 - 2.00)</div>
      </div>
      <div class="flex mr-5 pb-1">
        <div class="w-3 h-3 mr-2 mt-1" style="background:#f44336"></div>
        <div class="text-xs">
          Waspada (Rasio > 2.00 dan/atau &lt; Rasio 1.00)
        </div>
      </div>
    </div>
    <div><async-data-table /></div>
  </div>
</template>
<script>
import IndonesiaMap from "../../components/IndonesiaMap";
import SmallLineChart from "./components/SmallLineChart";
import AsyncDataTable from "../ekspor-impor/ekspor/components/AsyncDataTable";
export default {
  data() {
    return {
      sentraList: [
        {
          title: "Harga Tingkat Produsen",
          product: "Bawang Merah Ukuran Sedang",
          priceAfter: "121000",
          priceBefore: "114900",
          percentage: "5",
          color: "#f44336",
          values: [1, 3, 1]
        },
        {
          title: "Harga Tingkat Grosir",
          product: "Bawang Merah Ukuran Sedang",
          priceAfter: "121000",
          priceBefore: "114900",
          percentage: "5",
          color: "#1cba63",
          values: [2, 1, 4]
        },
        {
          title: "Harga Tingkat Konsumen",
          product: "Bawang Merah Ukuran Sedang",
          priceAfter: "121000",
          priceBefore: "114900",
          percentage: "5",
          color: "#fec936",
          values: [3, 2, 1]
        }
      ],
      nonSentraList: [
        {
          title: "Harga Tingkat Produsen",
          product: "Bawang Merah Ukuran Sedang",
          priceAfter: "121000",
          priceBefore: "114900",
          percentage: "5",
          color: "#f44336",
          values: [3, 3, 1]
        },
        {
          title: "Harga Tingkat Grosir",
          product: "Bawang Merah Ukuran Sedang",
          priceAfter: "121000",
          priceBefore: "114900",
          percentage: "5",
          color: "#1cba63",
          values: [3, 2, 2]
        },
        {
          title: "Harga Tingkat Konsumen",
          product: "Bawang Merah Ukuran Sedang",
          priceAfter: "121000",
          priceBefore: "114900",
          percentage: "5",
          color: "#fec936",
          values: [2, 1, 3]
        }
      ],
      mapLegends: [
        {
          label: "Daerah dengan harga tertinggi",
          color: "#f67575"
        },
        {
          label: "Daerah dengan harga cukup tinggi",
          color: "#ffa34d"
        },
        {
          label: "Daerah dengan harga normal",
          color: "#fec936"
        },
        {
          label: "Daerah dengan harga cukup murah",
          color: "#87e5bb"
        },
        {
          label: "Daerah dengan harga terendah",
          color: "#1eb2a6"
        },
        {
          label: "Daerah dengan data yang tidak terbaru",
          color: "#ebebeb"
        },
        {
          label: "Tidak ada data",
          color: "#ffffff"
        }
      ]
    };
  },
  components: {
    IndonesiaMap,
    SmallLineChart,
    AsyncDataTable
  }
};
</script>
