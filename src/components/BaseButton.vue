<template>
  <button
    class="base-btn"
    :class="[
      { icon: label === null },
      `base-btn--${bgColor}`,
      `base-btn__font--${color}`,
    ]"
    @click="$emit('onClick', $event)"
    :type="btnType"
    :disabled="disabled"
  >
    <div class="text d-flex flex-center">
      <slot name="prependIcon" />
      <slot>{{ label }}</slot>
      <slot name="appendIcon" />
    </div>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: null,
    },
    btnType: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "primary",
    },
    color: {
      type: String,
      default: "dark",
    },
  },
});
</script>

<style lang="scss" scoped>

.base-btn {
  border-radius: 8px;
  border: none;
  padding: 10px 18px;
  &.icon {
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50px;
    > div {
      justify-content: center;
    }
  }
  &:disabled {
    .text {
      color: $gray-color;
    }
  }
  &__font {
    &--white {
      .text {
        color: $white-color;
      }
    }
    &--red {
      .text {
        color: $red-color;
      }
    }
  }
  &--primary {
    background-color: $primay-color;
    .text{ color: $white-color;}
  }
  &--red {
    background-color: $red-color;
  }
  &--gray {
    background-color: $gray-color;
  }
  &--azure{
    background-color: $azure-color;
  }
  &--transparent {
    background-color: transparent;
  }
}
</style>
