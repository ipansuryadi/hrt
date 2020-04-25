<template>
  <div class="columns is-gapless">
    <div class="column is-one-quarter min-h-screen bg-white">
      <div class="p-6">
        <horti-label-sidebar />
        <div class="p-3" />
        <div class="columns">
          <div class="column text-gray-800 text-lg">
            Silahkan masukkan
            <span class="font-medium">username</span> dan
            <span class="font-medium">password</span> kamu
          </div>
        </div>
        <div class="p-3" />
        <b-field>
          <b-input
            v-model="bzemail"
            placeholder="username"
            icon-pack="fas"
            icon="user"
            custom-class="bg-white"
          ></b-input>
        </b-field>
        <div class="p-2" />
        <b-field>
          <b-input
            v-model="bzpassword"
            type="password"
            placeholder="password"
            password-reveal
            icon-pack="fas"
            icon="lock"
            custom-class="bg-white"
          ></b-input>
        </b-field>
        <div class="field">
          <b-checkbox size="is-small" v-model="rememberMe"
            ><span class="has-text-primary font-medium"
              >Ingatkan saya pada perangkat ini</span
            ></b-checkbox
          >
        </div>
        <div class="p-5" />
        <b-button @click="login" type="is-primary" expanded>Sign In</b-button>
      </div>
    </div>
    <div class="column bg">
      <div class="p-5">
        <b-button
          @click="openRightSidebar = !openRightSidebar"
          type="is-primary is-pulled-right"
          icon-right="bars"
        />
      </div>
    </div>
    <!-- SIDEBAR RIGHT -->
    <sidebar-right
      :open.sync="openRightSidebar"
      @close="openRightSidebar = !openRightSidebar"
    />
  </div>
</template>

<script>
import HortiLabelSidebar from "../../components/HortiLabelSidebar";
import SidebarRight from "../../components/SidebarRight";
export default {
  components: {
    HortiLabelSidebar,
    SidebarRight
  },
  data() {
    return {
      openRightSidebar: false,
      bzemail: "",
      password: ""
      // email: "ipansuryadi@gmail.com",
      // password: "password"
    };
  },
  methods: {
    login: function() {
      // let email = this.bzemail;
      // let password = this.bzpassword;
      // this.$store
      //   .dispatch("login", { email, password })
      //   .then(() => this.$router.push("/dashboard"))
      //   .catch(err => console.log(err));
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style lang="css">
.bg {
  background-image: url("../../assets/bg.png");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-position-y: 2rem;
}
</style>
