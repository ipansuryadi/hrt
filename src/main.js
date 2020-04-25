import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
Vue.use(Buefy, {
  defaultIconPack: "fas"
});
import axios from "axios";
Vue.prototype.$http = axios;
import "./apis";
// Tailwind
import "@/assets/css/tailwind.css";
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
