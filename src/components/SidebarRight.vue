<template>
  <b-sidebar
    type="is-primary"
    :fullheight="true"
    :fullwidth="false"
    :overlay="true"
    :right="true"
    :open.sync="open"
    :on-cancel="clickOutside"
  >
    <div class="p-5">
      <div class="columns is-vcentered">
        <div class="column">
          <span class="has-text-white font-medium text-lg pl-2">Informasi</span>
        </div>
        <div class="column">
          <b-button
            @click="$emit('close')"
            type="is-light is-pulled-right"
            icon-right="times"
          />
        </div>
      </div>
      <div
        class="p-1 menu-right rounded mb-5"
        v-for="(menu, index) in menus"
        :key="index"
      >
        <div class="columns is-gapless is-vcentered">
          <div class="column is-2">
            <img class="p-1" :src="getImg(menu.icon)" />
          </div>
          <div class="column">
            <div class="pl-2 has-text-white">
              <div class="font-medium pb-1 text-base">{{ menu.title }}</div>
              <div>{{ menu.subtitle }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-sidebar>
</template>
<script>
export default {
  props: ["open"],
  methods: {
    getImg(image) {
      return require("../assets/" + image);
    },
    // eslint-disable-next-line no-unused-vars
    clickOutside(e) {
      this.$emit("close");
    }
  },
  data() {
    return {
      menus: [
        {
          title: "Tentang Kami",
          subtitle: "Informasi terkait aplikasi",
          icon: "tentang-kami.png"
        },
        {
          title: "Bisnis Proses",
          subtitle: "Bisnis proses aplikasi",
          icon: "bisnis-proses.png"
        },
        {
          title: "Panduan",
          subtitle: "Panduan penggunaan aplikasi",
          icon: "panduan.png"
        },
        {
          title: "FAQ",
          subtitle: "Hal yang paling sering ditanyakan",
          icon: "faq.png"
        },
        {
          title: "Struktur Organisasi & Kontak",
          subtitle: "Struktur organisasi dan kontak petugas pengelola",
          icon: "struktur-organisasi.png"
        }
      ]
    };
  }
};
</script>
<style lang="css">
div.sidebar-content.is-primary.is-fixed.is-fullheight.is-right {
  width: 30%;
  background-image: linear-gradient(to bottom, #1eb2a6, #87e5bb);
}
.menu-right:hover {
  background-color: #f67575;
  cursor: pointer;
}
.menu-right {
  cursor: pointer;
}
</style>
