<template>
  <div class="columns is-vcentered is-multiline is-gapless">
    <div class="column" :class="reduce ? 'is-full' : 'is-2'">
      <img class="p-1" src="https://bulma.io/images/placeholders/64x64.png" />
    </div>
    <div class="column is-10" v-if="!reduce">
      <span class="pl-2 has-text-white has-text-weight-bold"
        >Agricultural War Room</span
      >
    </div>
    <!-- </div>

    <div class="columns is-vcentered">-->
    <div class="column" :class="reduce ? 'is-full' : 'is-2'">
      <img class="p-1" src="https://bulma.io/images/placeholders/64x64.png" />
    </div>
    <div class="column is-10" v-if="!reduce">
      <span class="pl-2 has-text-white has-text-weight-bold">Gedor Horti</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["reduce"]
};
</script>
