import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import svgJs from "./plugin/vueSvgPlugin";

Vue.use(svgJs);

Vue.use(Buefy, {
  defaultIconPack: "fas"
});
import axios from "axios";
Vue.prototype.$http = axios;
import "./apis";
Vue.filter("formatCurrencyPerKg", function(value) {
  let val = (value / 1).toFixed(0);
  return "Rp. " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/Kg";
});
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
