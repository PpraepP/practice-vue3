<template>
  <div class="base-input">
    <input
      v-model="inputValue"
      :type="inputType"
      :placeholder="placeholder"
      :required="required"
      @input="updateValue"
      v-bind="$attrs"
    />
    <div class="base-input__err-msg" v-if="inputError">
      {{ inputError }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  inheritAttrs: false,
  name: "BaseInput",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
    },
    inputError: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const inputValue = ref<unknown>(null);

    const updateValue = () => {
      //console.log('input val', val.target.value);
      emit("input", inputValue.value);
    };

    return { inputValue, updateValue };
  },
});
</script>

<style lang="scss" scoped>
.base-input {
  input {
    height: 36px;
    width: 100%;
    padding: 0 8px;
    border-radius: 8px;
    border: 1px solid #7f7c82;
    margin: 4px 0;
  }
  &__err-msg {
    font-size: 12px;
    color: $red-color;
    text-align: left;
  }
}
</style>
