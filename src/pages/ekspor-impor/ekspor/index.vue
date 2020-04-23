<template>
  <div>
    <div class="pb-4">
      <span class="is-size-5 font-bold">Ekspor Hortikultura</span
      ><span class="pl-3">Per Desember 2019</span>
    </div>
    <div class="columns">
      <div class="column">
        <div class="pb-1">
          Filter berdasarkan kelompok komoditas
        </div>
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
      <div class="column">
        <div class="pb-1">
          Filter berdasarkan komoditas
        </div>
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
      <div class="column">
        <div class="pb-1">
          Dari bulan
        </div>
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>
    <div class="pb-2 is-size-6 font-bold">
      Perkembangan Tahunan
    </div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <line-chart-simple />
        </div>
      </div>
      <div class="column">
        <div class="box">
          <line-chart-simple />
        </div>
      </div>
    </div>
    <div class="pb-2 is-size-6 font-bold">
      Perkembangan Bulanan
    </div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <column-chart />
        </div>
      </div>
      <div class="column">
        <div class="box">
          <column-chart />
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <async-data-table />
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="flex justify-between pb-5">
            <div>
              Share Segar VS Olahan
            </div>
            <div class="flex">
              <div class="flex items-center mr-5">
                <div class="w-3 h-3 bg-green-500 mr-1"></div>
                <div>
                  Segar
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-orange-500 mr-1"></div>
                <div>
                  Olahan
                </div>
              </div>
            </div>
          </div>
          <div v-for="(item, index) in 5" :key="index">
            <div>Susu</div>
            <div class="flex pb-3">
              <div
                class="bg-green-500  0 p-1 text-center rounded-l-lg text-white"
                style="flex:30"
              >
                30%
              </div>
              <div
                class="bg-orange-500 p-1 text-center rounded-r-lg text-white"
                style="flex:70"
              >
                70%
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div>0%</div>
            <div class="text-center">
              <div>50%</div>
              <div>Volume (Kg)</div>
            </div>
            <div>100%</div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <async-data-table />
        </div>
      </div>
      <div class="column">
        <div class="box">
          <async-data-table />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ColumnChart from "./components/ColumnChart";
import LineChartSimple from "../../dashboard/components/LineChartSimple";
import AsyncDataTable from "./components/AsyncDataTable";
export default {
  components: {
    ColumnChart,
    LineChartSimple,
    AsyncDataTable
  }
};
</script>
