import Vue       from "vue";
import Vuelidate from "vuelidate";

import App            from "./App.vue";
import router         from "./router";
import store          from "./store";
import {BootstrapVue} from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
