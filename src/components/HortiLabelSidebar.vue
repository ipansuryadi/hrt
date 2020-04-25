<template>
  <div class="columns is-vcentered is-multiline is-gapless">
    <div class="column" :class="reduce ? 'is-full' : 'is-2'">
      <div
        class="w-12 h-12 bg-white flex items-center justify-center rounded-full"
      >
        <img class="rounded-full" src="@/assets/logo_awr_kementan.png" />
      </div>
    </div>
    <div class="column is-10" v-if="!reduce">
      <span class="pl-4 font-medium " :class="fontColor"
        >Agricultural War Room</span
      >
    </div>
    <div class="column is-full">
      <div class="p-1"></div>
    </div>
    <div class="column" :class="reduce ? 'is-full' : 'is-2'">
      <div
        class="w-12 h-12 bg-white flex items-center justify-center rounded-full"
      >
        <img class="rounded-full" src="@/assets/gedor_horti.png" />
      </div>
    </div>
    <div class="column is-10" v-if="!reduce">
      <span class="pl-4 font-medium " :class="fontColor">Gedor Horti</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    reduce: {
      type: Boolean,
      default: false
    },
    fontColor: {
      type: String,
      default: "text-gray-700"
    }
  }
};
</script>
