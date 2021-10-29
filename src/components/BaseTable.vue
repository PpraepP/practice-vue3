<template>
  <table class="base-table">
    <thead>
      <th
        class="cursor-pointer"
        v-for="(val, name) in sortedItem[0]"
        :key="name"
        @click="sortBy(name)"
      >
        <div class="d-flex aling-items-center justify-content-center">
          <div>{{ name }}</div>
          <span class="material-icons"> sort </span>
        </div>
      </th>
      <th v-if="deleteButton"></th>
    </thead>
    <tbody>
      <tr v-for="item in sortedItem" :key="item.id">
        <td v-for="data in item" :key="data">
          <div v-if="slots.icon">
            <slot name="icon">xx</slot>
          </div>
          {{ data }}
        </td>
        <td v-if="deleteButton">
          <BaseButton
            :disabled="item[disableKeyword] ? true : false"
            bg-color="transparent"
            color="red"
            @click="$emit('deleteEmp', item.id)"
            ><template #prependIcon>
              <span class="material-icons"> remove_circle</span>
            </template></BaseButton
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  toRefs,
} from "vue";
import _ from "lodash";
import BaseButton from "@/components/BaseButton.vue";
import { EmployeeData } from "@/store/modules/employee/state";

type ItemType = EmployeeData[];

export default defineComponent({
  name: "BaseTable",
  components: { BaseButton },
  props: {
    items: {
      type: Array as PropType<ItemType>,
      required: true,
    },
    deleteButton: {
      type: Boolean,
      default: false,
    },
    disableKeyword: {
      type: String,
      default: null,
    },
  },
  setup(props, { slots }) {
    const { items } = toRefs(props);
    const itemList = ref<ItemType>([]);
    const sortKey = ref<string>("id");
    const sortOrder = ref<"asc" | "desc">("desc");

    itemList.value = items.value;

    const sortedItem = computed(() =>
      _.orderBy(itemList.value, sortKey.value, sortOrder.value)
    );

    const sortBy = (key: string) => {
      if (key === sortKey.value) {
        sortOrder.value = sortOrder.value == "asc" ? "desc" : "asc";
      } else {
        sortKey.value = key;
        sortOrder.value = "asc";
      }
    };

    onMounted(() => {
      console.log('slots', slots.icon);
    })

    return {
      sortedItem,
      sortBy,
      slots
    };
  },
});
</script>

<style lang="scss" scoped>
$tb-color: #eae4e9;
table.base-table {
  width: 100%;
  border-spacing: 0 6px;
  border-collapse: separate;
  thead {
    background: #1d3557;
    color: white;
    height: 36px;
    th {
      cursor: pointer;
    }
  }
  tbody {
    tr {
      background-color: $tb-color;
    }
  }
  td, th {
      padding: 4px 0;
      &:first-child {
        border-radius: 8px 0 0 8px;
      }
      &:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  .btn-delete.theme--light.v-btn.v-btn--icon {
    background-color: #ff7878;
    color: white;
    &.v-btn--disabled {
      background-color: #e8eae6;
    }
  }
}
</style>
