<template>
  <div class="columns is-gapless">
    <div
      class="column is-one-quarter min-h-screen has-background-primary has-text-white"
    >
      <div class="p-5">
        <div class="columns is-vcentered is-multiline is-gapless">
          <div class="column is-2">
            <img
              class="p-1"
              src="https://bulma.io/images/placeholders/64x64.png"
            />
          </div>
          <div class="column is-10">
            <span class="pl-2">Agricultural War Room</span>
          </div>
          <!-- </div>

          <div class="columns is-vcentered">-->
          <div class="column is-2">
            <img
              class="p-1"
              src="https://bulma.io/images/placeholders/64x64.png"
            />
          </div>
          <div class="column is-10">
            <span class="pl-2">Gedor Horti</span>
          </div>
        </div>
        <div class="p-3" />
        <div class="columns">
          <div class="column">
            Silahkan masukkan
            <span class="has-text-weight-bold">username</span> dan
            <span class="has-text-weight-bold">password</span> kamu
          </div>
        </div>
        <div class="p-1" />
        <b-field>
          <b-input placeholder="username" icon-pack="fas" icon="user"></b-input>
        </b-field>
        <div class="p-1" />
        <b-field>
          <b-input
            type="password"
            placeholder="password"
            password-reveal
            icon-pack="fas"
            icon="lock"
          ></b-input>
        </b-field>
        <div class="p-3" />
        <b-button @click="login" type="is-dark" expanded>Sign In</b-button>
      </div>
    </div>
    <div class="column bg">
      <div class="p-5">
        <b-button
          @click="open = true"
          type="is-light is-pulled-right"
          icon-right="bars"
        />
      </div>
    </div>
    <!-- SIDEBAR RIGHT -->
    <b-sidebar
      type="is-primary"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="open"
    >
      <div class="p-5">
        <div class="columns is-vcentered">
          <div class="column">
            <span class="has-text-white">Informasi</span>
          </div>
          <div class="column">
            <b-button
              @click="open = false"
              type="is-light is-pulled-right"
              icon-right="times"
            />
          </div>
        </div>
        <div class="p-1 menu-right rounded mb-3">
          <div class="columns is-gapless is-vcentered">
            <div class="column is-2">
              <img
                class="p-1"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </div>
            <div class="column">
              <div class="pl-2 has-text-white">
                <span class="font-bold">Tentang Kami</span>
                <br />
                <span class="is-size-7">Informasi terkait aplikasi</span>
              </div>
            </div>
          </div>
        </div>
        <div class="p-1 menu-right rounded">
          <div class="columns is-gapless is-vcentered">
            <div class="column is-2">
              <img
                class="p-1"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </div>
            <div class="column">
              <div class="pl-2 has-text-white">
                <span class="font-bold">Bisnis Proses</span>
                <br />
                <span class="is-size-7">Bisnis proses aplikasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: true,
      email: "ipansuryadi@gmail.com",
      password: "password"
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/dashboard"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="css">
.bg {
  background-image: url("../../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.menu-right:hover {
  background-color: #16954f;
  cursor: pointer;
}
.menu-right {
  background-color: #16ba63;
  cursor: pointer;
}
</style>
