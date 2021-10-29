<template>
<default-layout>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <i class="material-icons"> account_circle </i>
  </div>
</default-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue"
// import { useStore } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    HelloWorld,
    'default-layout':DefaultLayout
  },
  // setup(){
  //   const store = useStore();

  //   onMounted(() => {
  //     console.log('test store', store.state.employee.employeeList);

  //   })
  // }
});
</script>
