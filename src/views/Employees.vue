<template>
  <DefaultLayout>
    <h1>Employee List</h1>
    <div class="w-100 text-end mb-3">
      <BaseButton
        :label="'Add Employee'"
        @click="openBaseModal"
      >
        <template #prependIcon>
          <i class="material-icons"> add </i>
        </template>
      </BaseButton>
    </div>

    <BaseTable
      v-if="employeeList.length > 0"
      :items="employeeList"
      :delete-button="true"
      disable-keyword="isOriginalMember"
      @deleteEmp="getIndexForDelete"
    >
    <template #icon>
      <i>123</i>
    </template>
    </BaseTable>
    <BaseNotFound v-else title="Not Found Employee" />
  </DefaultLayout>
  <BaseModal :isShow="isAddEmployee">
    <template #header>
      <h4 class="mb-3">Add Employee</h4>
    </template>

    <form @submit.prevent="onSubmit">
      <div class="d-flex align-items-center">
        <input
        class="me-2"
          type="checkbox"
          id="checkbox"
          v-model="employeeForm.isOriginalMember"
          @change="
            employeeForm.isOriginalMember != employeeForm.isOriginalMember
          "
        />
        <span>Original Member</span>
      </div>
      <BaseInput
        v-model.trim="employeeForm.name"
        input-type="text"
        placeholder="Fullname"
        :required="true"
      />
      <BaseInput
        v-model.number="employeeForm.age"
        input-type="number"
        placeholder="Age"
        :required="true"
        :input-error="errorAgeMsg"
        @input="
          employeeForm.age > 0
            ? (errorAgeMsg = null)
            : (errorAgeMsg = 'pls, input age more than 0')
        "
      />
      <div class="btn-group d-flex justify-content-end">
        <BaseButton
          btn-type="reset"
          :label="'Cancle'"
          bg-color="gray"
          @click="isAddEmployee = false"
        ></BaseButton>
        <BaseButton btn-type="submit" :label="'Save'"></BaseButton>
      </div>
    </form>
  </BaseModal>
  <BaseModal :isShow="isConfirm">
    <template #header>
      <div class="modal-confirm d-flex align-items-center">
        <span class="material-icons"> campaign </span>
        <h4>Are you sure?</h4>
      </div>
    </template>
    <template #default>
      <div class="btn-group d-flex justify-content-end">
        <BaseButton
          btn-type="reset"
          :label="'Cancle'"
          bg-color="gray"
          @click="isConfirm = false"
        ></BaseButton>
        <BaseButton :label="'Confirm'" @click="onDeleteEmployee"></BaseButton>
      </div>
    </template>
  </BaseModal>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from "vue";
import { useStore } from "@/store";
import { EmployeeData } from "@/store/modules/employee/state";

import BaseButton from "@/components/BaseButton.vue";
import BaseModal from "@/components/BaseModal.vue";
import BaseInput from "@/components/BaseInput.vue";

export default defineComponent({
  name: "Employees",
  components: { BaseButton, BaseModal, BaseInput },
  setup(_, { slots }) {
    const store = useStore();
    const employeeList = ref<EmployeeData[]>([]);
    const isAddEmployee = ref<boolean>(false);
    const isConfirm = ref<boolean>(false);
    const employeeForm = reactive<EmployeeData>({
      id: "",
      name: "",
      age: 0,
      isOriginalMember: false,
    });
    const errorAgeMsg = ref<string | null>(null);

    employeeList.value = store.getters.getEmployeeList;

    const openBaseModal = () => {
      isAddEmployee.value = true;
    };

    const onSubmit = () => {
      if (employeeForm.age > 0) {
        employeeForm.id = `000${+store.state.employee.employeeLastID + 1}`;
        store.dispatch("addEmployee", { ...employeeForm });
        isAddEmployee.value = false;
        employeeForm.isOriginalMember = false;
      } else {
        errorAgeMsg.value = "pls, input age more than 0";
      }
    };

    let indexDelete = "";
    const getIndexForDelete = (id: string) => {
      isConfirm.value = true;
      indexDelete = id;
    };

    const onDeleteEmployee = () => {
      if (indexDelete) {
        store.dispatch("deleteEmployee", indexDelete);
        isConfirm.value = false;
      }
    };

    onMounted(() => {
      console.log('slots', slots);
    })

    return {
      employeeList,
      isAddEmployee,
      isConfirm,
      employeeForm,
      errorAgeMsg,

      openBaseModal,
      onSubmit,
      getIndexForDelete,
      onDeleteEmployee,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal-confirm{
  span{
    font-size: 45px;
    margin-right: 8px;
  }
  h4{
    margin: 0;
  }
}
.btn-group {
  button {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>
