import Vue from "vue";

const files = require.context("./modules/", true, /\.js/);
const modules = {};

// aa-bb -> aaBb
function camelize(str) {
  return `${str}`.replace(/-\D/g, match => match.charAt(1).toUpperCase());
}

files.keys().forEach(key => {
  if (key === "./index.js") return;

  const moduleName = camelize(key.replace(/(^\.\/|\.js$)/g, ""));
  modules[moduleName] = files(key).default;
});

Vue.prototype.$apis = modules;
