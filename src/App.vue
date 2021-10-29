<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/employees">Employees</router-link> |
    <router-link to="/former-employees">Former Employees</router-link>
  </div> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useStore } from "@/store";
import { EmployeeData } from "@/store/modules/employee/state";

export default defineComponent({
  setup() {
    const store = useStore();
    const employeeList = ref<EmployeeData[]>([]);

    employeeList.value = store.getters.getEmployeeList;

    const autoGenerateId = () => {
      const lastItem = employeeList.value[employeeList.value.length - 1].id;
      // const setID = `000${+lastItem + 1}`
      store.commit("SET_EMP_LAST_ID", lastItem);
      console.log("lastItem", lastItem);
    };

    onMounted(() => {
      autoGenerateId();
      console.log("emp page show store", employeeList.value.length);
    });
  },
});
</script>

<style lang="scss">
// @import "@/assets/scss/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $purple-color;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
