import "@babel/polyfill";
import "mutationobserver-shim";
// import { initBootstrap } from "./plugins/bootstrap-vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//components
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BaseTable from "@/components/BaseTable.vue";
import BaseNotFound from "@/components/BaseNotFound.vue";

// import { useStore } from "./store";
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import "./assets/scss/vendors/bootstrap-vue/index.scss"

const app = createApp(App);

// app.use(useStore)
app.component('DefaultLayout', DefaultLayout);
app.component("BaseTable", BaseTable);
app.component("BaseNotFound", BaseNotFound);
// initBootstrap(app);
app.use(router);
app.mount("#app");
