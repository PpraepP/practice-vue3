<template>
  <DefaultLayout>
    <h1>Former Employee List</h1>
    <BaseTable v-if="formerEmpList.length > 0" :items="formerEmpList" />
    <BaseNotFound v-else />
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { EmployeeData } from "@/store/modules/employee/state";

export default defineComponent({
  setup() {
    const store = useStore();
    const formerEmpList = ref<EmployeeData[]>(
      store.getters.getFormerEmpList ? store.getters.getFormerEmpList : []
    );

    return {
      formerEmpList,
    };
  },
});
</script>
