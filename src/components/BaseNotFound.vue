<template>
  <transition name="fade">
    <div class="base-not-found">
      <h2>{{ title }}</h2>
      <span class="material-icons"> code_off </span>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Not Found",
    },
  },
});
</script>

<style lang="scss" scoped>
.base-not-found {
  width: 80%;
  margin: 10% auto;
  background: $purple-color;
  border-radius: 16px;
  padding: 10%;
  span {
    font-size: 3rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
