/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap.backend';
import "@coreui/coreui/js/src/carousel"
import "@coreui/coreui/js/src/sidebar"
import "@coreui/coreui/js/src/button"
import "@coreui/coreui/js/src/dropdown"
import "@coreui/coreui/js/src/collapse"
import "@coreui/coreui/js/src/class-toggler"
import "@coreui/coreui/js/src/async-load"
import "@coreui/utils/src/index"
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import BootstrapVue, {BootstrapVueIcons} from "bootstrap-vue";
import Vue from "vue";
import Snotify, { SnotifyPosition } from 'vue-snotify'
import VeeValidate from "vee-validate";
import "./backend"
import Vue2Filters from "vue2-filters";
window.Vue = Vue;
const options = {
    toast: {
        position: SnotifyPosition.rightTop,
        showProgressBar: false
    }
}

Vue.use(Snotify, options)
Vue.use(VeeValidate,{
    inject: true
})
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Vue2Filters)
// Vue.component('dt-component', DtComponent)
Vue.component('dt-component', () => import(/*webpackChunkName: 'js/dt-component'*/'./components/DtComponent'))
Vue.component('datePicker', () => import(/*webpackChunkName: 'js/date-picker'*/'vue-bootstrap-datetimepicker'))

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    mounted() {
        console.log('App mounted');
        /*this.$root.$on("edit-user", function(e) {
            console.log("an edit user event was triggeredd");
            console.log(e);
        })*/
    }
});
