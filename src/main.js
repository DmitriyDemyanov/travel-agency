import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import { useVuelidate } from '@vuelidate/core'
import { required,email } from '@vuelidate/validators'

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    }
  },
  validations() {
    return {
      firstName: { required }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
      contact: {
        email: { required,email } // Matches this.contact.email
      }
    }
  }
}